import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Parse incoming JSON
app.use(express.json());

// Helper for fallback recipe generation when Gemini key is unconfigured, missing, or invalid
function getFallbackRecipe(ingredient: string, category: string, preference: string) {
  const ing = ingredient.trim();
  const titleIng = ing.charAt(0).toUpperCase() + ing.slice(1);
  const catLower = category.toLowerCase();
  const prefLower = preference.toLowerCase();
  
  let recipeName = `Monkaura Zero-Sugar ${titleIng} Delight`;
  let prepTime = "10 mins";
  let cookTime = "15 mins";
  let servings = "4 servings";
  let ingredientsList: string[] = [];
  let instructionsList: string[] = [];
  let netCarbs = "1.5g";
  let calories = "135 kcal";
  let fat = "11g";
  let protein = "3g";
  let chefTip = `Monkaura (Allulose & Monk Fruit) browns and caramelizes just like real sugar without crystallization!`;

  if (catLower.includes("beverage") || prefLower.includes("drink") || prefLower.includes("coffee") || prefLower.includes("tea")) {
    recipeName = `Monkaura Spiced ${titleIng} Iced Latte`;
    prepTime = "5 mins";
    cookTime = "0 mins";
    servings = "2 glasses";
    netCarbs = "1g";
    calories = "85 kcal";
    fat = "8g";
    protein = "1g";
    ingredientsList = [
      `1/4 cup fresh ${ing}`,
      `2 tbsp Monkaura Allulose & Monk Fruit Blend`,
      `1.5 cups cold brew coffee or chilled espresso`,
      `1 cup unsweetened almond milk or heavy cream`,
      `1/2 tsp vanilla extract`,
      `Handful of ice cubes`
    ];
    instructionsList = [
      `In a small pitcher, combine ${ing} and Monkaura sweetener until dissolved into a smooth syrup.`,
      `Fill two tall glasses with ice cubes.`,
      `Pour the coffee over the ice, followed by the Monkaura ${ing} mixture.`,
      `Top with almond milk or heavy cream, stir gently, and enjoy cold!`
    ];
    chefTip = `Because Monkaura is pure Allulose & Monk Fruit, it dissolves instantly in cold liquids without any gritty texture!`;
  } else if (catLower.includes("sauce") || catLower.includes("syrup") || prefLower.includes("sauce")) {
    recipeName = `Artisanal Monkaura ${titleIng} Salted Caramel Glaze`;
    prepTime = "5 mins";
    cookTime = "10 mins";
    servings = "6 servings (2 tbsp each)";
    netCarbs = "0.5g";
    calories = "90 kcal";
    fat = "9g";
    protein = "0.5g";
    ingredientsList = [
      `1/3 cup ${ing}`,
      `1/2 cup Monkaura Allulose & Monk Fruit Blend`,
      `4 tbsp grass-fed unsalted butter`,
      `1/3 cup heavy whipping cream`,
      `1/2 tsp Himalayan pink sea salt`,
      `1/2 tsp pure vanilla extract`
    ];
    instructionsList = [
      `Melt butter in a heavy-bottomed saucepan over medium-low heat.`,
      `Add Monkaura sweetener and cook for 3-4 minutes, whisking gently as it caramelizes to a rich amber color.`,
      `Slowly pour in heavy cream and gently fold in ${ing}.`,
      `Simmer for 2 minutes until thickened, remove from heat, stir in vanilla and sea salt, and let cool.`
    ];
    chefTip = `Allulose in Monkaura caramelizes beautifully without hardening or crystallizing when chilled, making it perfect for keto sauces!`;
  } else if (catLower.includes("breakfast") || prefLower.includes("dough") || prefLower.includes("pancake")) {
    recipeName = `Fluffy Monkaura ${titleIng} Keto Pancakes`;
    prepTime = "10 mins";
    cookTime = "10 mins";
    servings = "3 servings (6 pancakes)";
    netCarbs = "2g";
    calories = "180 kcal";
    fat = "14g";
    protein = "6g";
    ingredientsList = [
      `1/2 cup crushed ${ing}`,
      `3 tbsp Monkaura Allulose & Monk Fruit Blend`,
      `1 cup blanched almond flour`,
      `2 large pasture-raised eggs`,
      `2 tbsp melted butter or coconut oil`,
      `1/2 tsp baking powder & pinch of salt`
    ];
    instructionsList = [
      `Whisk eggs, melted butter, ${ing}, and Monkaura sweetener together in a mixing bowl.`,
      `Fold in almond flour, baking powder, and sea salt until a smooth batter forms.`,
      `Heat a greased non-stick skillet over medium heat. Pour 1/4 cup batter for each pancake.`,
      `Cook for 2-3 minutes until golden brown, flip gently, and cook for 1-2 minutes until fluffy.`
    ];
    chefTip = `Monkaura gives low-carb pancakes that classic golden edge and authentic sweetness with 0 sugar spikes.`;
  } else {
    // Default Dessert / Baking
    recipeName = `Zero-Sugar Monkaura ${titleIng} Gourmet Tart`;
    prepTime = "15 mins";
    cookTime = "20 mins";
    servings = "6 slices";
    netCarbs = "2g";
    calories = "160 kcal";
    fat = "13g";
    protein = "4g";
    ingredientsList = [
      `3/4 cup ripe ${ing}`,
      `1/2 cup Monkaura Allulose & Monk Fruit Blend`,
      `1.5 cups fine almond flour`,
      `1/4 cup coconut flour or cacao powder`,
      `1/3 cup melted butter or ghee`,
      `1 tsp vanilla bean paste & 1 egg`
    ];
    instructionsList = [
      `Preheat oven to 175°C (350°F) and grease a tart pan.`,
      `Mix almond flour, coconut flour, Monkaura sweetener, and melted butter to form a crumbly crust. Press into tart pan.`,
      `In a bowl, combine ${ing} with vanilla and remaining Monkaura sweetener, then layer over the crust.`,
      `Bake for 18-20 minutes until golden brown and aromatic. Cool completely before slicing.`
    ];
    chefTip = `Monkaura bakes exactly 1:1 like sugar, retaining moistness and preventing the dry, cooling aftertaste typical of erythritol.`;
  }

  return {
    recipeName,
    description: `A masterfully crafted keto recipe featuring ${ing}, sweetened to perfection with Monkaura Allulose & Monk Fruit blend (Zero Net Carbs).`,
    prepTime,
    cookTime,
    servings,
    ingredients: ingredientsList,
    instructions: instructionsList,
    nutrition: {
      calories,
      netCarbs,
      fat,
      protein,
      monkauraSavings: `Using Monkaura saves ~120 calories and 32g of refined sugar per serving with zero glycemic impact!`
    },
    chefTip
  };
}

// API route for AI Recipe Generation
app.post("/api/recipes/generate", async (req, res) => {
  const { ingredient, category = "dessert", preference = "baking" } = req.body;

  if (!ingredient || typeof ingredient !== "string" || ingredient.trim() === "") {
    res.status(400).json({ error: "Please provide at least one ingredient." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const isInvalidKey = !apiKey || 
    apiKey === "undefined" || 
    apiKey === "null" || 
    apiKey.includes("MY_GEMINI_API_KEY") || 
    apiKey.includes("YOUR_API_KEY") || 
    apiKey.length < 15;

  if (isInvalidKey) {
    res.json(getFallbackRecipe(ingredient, category, preference));
    return;
  }

  try {
    // Initialize the Gemini API client with required User-Agent
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });

    const prompt = `Create a delicious, creative, and fully keto-friendly/low-carb recipe.
The recipe MUST focus on using or incorporating "${ingredient.trim()}" as a primary ingredient, and MUST use "Monkaura Allulose & Monk Fruit Blend" as the exclusive sugar-free sweetener.
Category of recipe: ${category}. Sweetener usage style: ${preference}.

Ensure the recipe is 100% realistic, has accurate measurements, is safe for keto/diabetics, and is delicious.
In the ingredients list, include where "Monkaura Sweetener" is used (e.g. "3 tbsp Monkaura Allulose & Monk Fruit Blend").
Include clear step-by-step instructions.
Provide precise nutritional info per serving, and highlight how Monkaura saves sugar/carbs/calories.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a professional keto pastry chef and master of sugar-free culinary arts. You specialize in crafting incredible desserts and baked goods using Monkaura (an Allulose and Monk Fruit sweetener blend). Monkaura is unique because it bakes, browns, and caramelizes exactly like real sugar with zero sugar spikes and zero net carbs. You must always output responses strictly in the requested JSON structure.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["recipeName", "description", "prepTime", "cookTime", "servings", "ingredients", "instructions", "nutrition", "chefTip"],
          properties: {
            recipeName: {
              type: Type.STRING,
              description: "Elegant, appetizing name of the keto-friendly recipe."
            },
            description: {
              type: Type.STRING,
              description: "A short, mouth-watering description of the recipe (1-2 sentences)."
            },
            prepTime: {
              type: Type.STRING,
              description: "Preparation time, e.g., '15 mins'."
            },
            cookTime: {
              type: Type.STRING,
              description: "Cooking/baking time, e.g., '25 mins'."
            },
            servings: {
              type: Type.STRING,
              description: "Number of servings, e.g., '8 servings'."
            },
            ingredients: {
              type: Type.ARRAY,
              description: "List of ingredients with precise measurements. Highlight Monkaura.",
              items: {
                type: Type.STRING
              }
            },
            instructions: {
              type: Type.ARRAY,
              description: "Step-by-step cooking instructions.",
              items: {
                type: Type.STRING
              }
            },
            nutrition: {
              type: Type.OBJECT,
              required: ["calories", "netCarbs", "fat", "protein", "monkauraSavings"],
              properties: {
                calories: { type: Type.STRING, description: "Calories per serving" },
                netCarbs: { type: Type.STRING, description: "Net carbs per serving, e.g. '2g'" },
                fat: { type: Type.STRING, description: "Fat per serving, e.g. '14g'" },
                protein: { type: Type.STRING, description: "Protein per serving, e.g. '4g'" },
                monkauraSavings: { type: Type.STRING, description: "A sentence highlighting the sugar/calorie savings compared to regular sugar, specifically mentioning Monkaura." }
              }
            },
            chefTip: {
              type: Type.STRING,
              description: "A professional baker's or chef's tip for perfecting this specific recipe using Monkaura."
            }
          }
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response received from Gemini API");
    }

    const recipeData = JSON.parse(responseText.trim());
    res.json(recipeData);

  } catch (_geminiError: any) {
    console.log("Serving Monkaura chef recipe fallback.");
    res.json(getFallbackRecipe(ingredient, category, preference));
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
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
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
