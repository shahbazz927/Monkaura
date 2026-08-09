import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Parse incoming JSON
app.use(express.json());

// OpenRouter configuration
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "openai/gpt-4o-mini";

// Validate that the OpenRouter response matches the expected recipe schema
function isValidRecipe(data: any): boolean {
  return (
    data &&
    typeof data.recipeName === "string" &&
    typeof data.description === "string" &&
    typeof data.prepTime === "string" &&
    typeof data.cookTime === "string" &&
    typeof data.servings === "string" &&
    Array.isArray(data.ingredients) &&
    data.ingredients.every((i: unknown) => typeof i === "string") &&
    Array.isArray(data.instructions) &&
    data.instructions.every((i: unknown) => typeof i === "string") &&
    data.nutrition &&
    typeof data.nutrition.calories === "string" &&
    typeof data.nutrition.netCarbs === "string" &&
    typeof data.nutrition.fat === "string" &&
    typeof data.nutrition.protein === "string" &&
    typeof data.nutrition.monkauraSavings === "string" &&
    typeof data.chefTip === "string"
  );
}

// API route for AI Recipe Generation
app.post("/api/recipes/generate", async (req, res) => {
  const { ingredient, category = "dessert", preference = "baking" } = req.body;

  if (!ingredient || typeof ingredient !== "string" || ingredient.trim() === "") {
    res.status(400).json({ error: "Please provide at least one ingredient." });
    return;
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  const isInvalidKey =
    !apiKey ||
    apiKey === "undefined" ||
    apiKey === "null" ||
    apiKey.includes("your_openrouter_api_key_here") ||
    apiKey.length < 20;

  if (isInvalidKey) {
    console.error(
      "OpenRouter API key is missing or invalid. Set OPENROUTER_API_KEY in the .env file."
    );
    res.status(500).json({
      error: "Recipe generation is temporarily unavailable. Please try again later.",
    });
    return;
  }

  const systemPrompt = `You are a professional keto pastry chef and master of sugar-free culinary arts. You specialize in crafting incredible desserts and baked goods using Monkaura (an Allulose and Monk Fruit sweetener blend). Monkaura is unique because it bakes, browns, and caramelizes exactly like real sugar with zero sugar spikes and zero net carbs. You must always output responses strictly in the requested JSON structure.`;

  const userPrompt = `Create a delicious, creative, and fully keto-friendly/low-carb recipe.
The recipe MUST focus on using or incorporating "${ingredient.trim()}" as a primary ingredient, and MUST use "Monkaura Allulose & Monk Fruit Blend" as the exclusive sugar-free sweetener.
Category of recipe: ${category}. Sweetener usage style: ${preference}.

Ensure the recipe is 100% realistic, has accurate measurements, is safe for keto/diabetics, and is delicious.
In the ingredients list, include where "Monkaura Sweetener" is used (e.g. "3 tbsp Monkaura Allulose & Monk Fruit Blend").
Include clear step-by-step instructions.
Provide precise nutritional info per serving, and highlight how Monkaura saves sugar/carbs/calories.

Respond with a single valid JSON object (no markdown, no code fences) using EXACTLY this structure:
{
  "recipeName": "string",
  "description": "string",
  "prepTime": "string",
  "cookTime": "string",
  "servings": "string",
  "ingredients": ["string"],
  "instructions": ["string"],
  "nutrition": {
    "calories": "string",
    "netCarbs": "string",
    "fat": "string",
    "protein": "string",
    "monkauraSavings": "string"
  },
  "chefTip": "string"
}`;

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://monkaura.in",
        "X-Title": "Monkaura Recipe Generator",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      let errorDetail = "";
      try {
        const errorBody = await response.json();
        errorDetail =
          errorBody?.error?.message ||
          JSON.stringify(errorBody).substring(0, 300);
      } catch {
        errorDetail = await response.text().catch(() => "");
      }

      if (response.status === 401 || response.status === 403) {
        // Authentication / API key errors
        console.error("OpenRouter authentication error:", errorDetail);
        res.status(500).json({
          error: "Recipe generation is temporarily unavailable. Please try again later.",
        });
      } else if (response.status === 429) {
        // Rate limits
        console.error("OpenRouter rate limit exceeded:", errorDetail);
        res.status(429).json({
          error: "Too many requests. Please wait a moment and try again.",
        });
      } else if (response.status >= 500) {
        // Upstream model/server errors
        console.error("OpenRouter upstream error:", response.status, errorDetail);
        res.status(502).json({
          error: "Recipe generation is temporarily unavailable. Please try again later.",
        });
      } else {
        // Other model errors (400, 404, 422, etc.)
        console.error("OpenRouter model error:", response.status, errorDetail);
        res.status(500).json({
          error: "Recipe generation failed. Please try again.",
        });
      }
      return;
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content || typeof content !== "string") {
      console.error(
        "OpenRouter returned an empty or malformed response:",
        JSON.stringify(data).substring(0, 300)
      );
      res.status(500).json({ error: "Recipe generation failed. Please try again." });
      return;
    }

    let recipeData: any;
    try {
      recipeData = JSON.parse(content.trim());
    } catch (parseError) {
      console.error(
        "OpenRouter returned invalid JSON:",
        parseError,
        content.substring(0, 300)
      );
      res.status(500).json({ error: "Recipe generation failed. Please try again." });
      return;
    }

    if (!isValidRecipe(recipeData)) {
      console.error(
        "OpenRouter response failed schema validation:",
        JSON.stringify(recipeData).substring(0, 300)
      );
      res.status(500).json({ error: "Recipe generation failed. Please try again." });
      return;
    }

    res.json(recipeData);
  } catch (networkError: any) {
    // Network errors (DNS, connection refused, timeout, etc.)
    console.error("OpenRouter network error:", networkError?.message || networkError);
    res.status(500).json({
      error: "Recipe generation is temporarily unavailable. Please try again later.",
    });
  }
});

// JSON 404 handler for any unknown /api/* route.
// This ensures the frontend always receives JSON (never an HTML page)
// when an API endpoint is missing or mistyped.
app.use("/api", (req, res) => {
  res.status(404).json({ error: `API endpoint not found: ${req.method} ${req.originalUrl}` });
});

// Global error handler — always respond with JSON, never HTML.
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled server error:", err);
  res.status(500).json({ error: "Internal server error. Please try again." });
});

// Setup Vite or Static assets
//
// IMPORTANT: NODE_ENV is frequently UNSET on Cloud Run / AI Studio / `npm start`.
// Relying only on process.env.NODE_ENV would make the production bundle boot
// into Vite "dev" middleware mode and serve index.html for unknown routes,
// which is exactly how a fetch() could receive HTML instead of JSON.
//
// Production mode is detected reliably by checking which script is running:
//   - `npm run dev`            → tsx server.ts        (source   → dev mode)
//   - `npm start`              → node dist/server.cjs (bundle  → production)
//   - explicit NODE_ENV=production still forces production mode.
const isProduction =
  process.env.NODE_ENV === "production" ||
  /(?:[\\/]|^)dist[\\/]server\.cjs$/.test(process.argv[1] || "");

async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    // Serve static assets (index.html, sitemap.xml, robots.txt, /assets/*, etc.)
    // redirect:false prevents Express from 301-redirecting "/products" to
    // "/products/" — the pre-rendered route handlers below serve those directly.
    app.use(express.static(distPath, { extensions: ['html'], redirect: false }));

    // Serve each pre-rendered route's static HTML directly at its clean URL
    // (no trailing-slash redirect). These files are generated by prerender.js
    // during the build so every public page has crawlable server-rendered HTML.
    const prerenderedRoutes = [
      "/home",
      "/products",
      "/zero-sugar-recipes",
      "/allulose-story",
      "/about",
      "/contact",
      "/privacy"
    ];
    for (const route of prerenderedRoutes) {
      app.get(route, (req, res) => {
        res.sendFile(path.join(distPath, route, "index.html"));
      });
    }

    // SPA fallback — any unknown route still renders the client-side app.
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();