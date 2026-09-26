import React, { useState, useEffect } from "react";
import { 
  Calculator, 
  Flame, 
  Dumbbell, 
  Sparkles, 
  BookOpen, 
  Clock, 
  ChefHat, 
  AlertCircle, 
  Copy, 
  Check, 
  Utensils, 
  RotateCcw, 
  Heart,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { DESSERT_RECIPES } from "../data";
import { DessertRecipe } from "../types";
import { findLocalRecipe } from "../data/localRecipes";
import { EXTENDED_RECIPES } from "../pages/RecipeDetailPage";

interface AIRecipe {
  recipeName: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: string;
    netCarbs: string;
    fat: string;
    protein: string;
    monkauraSavings: string;
  };
  chefTip: string;
}

const POPULAR_INGREDIENTS = [
  "Almond Flour",
  "Cream Cheese",
  "Cocoa Powder",
  "Strawberries",
  "Dark Chocolate",
  "Peanut Butter",
  "Blueberries",
  "Greek Yogurt"
];

const LOADING_MESSAGES = [
  "Gathering premium low-carb ingredients...",
  "Replacing traditional sugar with Monkaura Erythritol & Monk Fruit...",
  "Calibrating measurements for clean 1:1 sweetness...",
  "Ensuring low-carb and low-sugar macro ratios...",
  "Garnishing with wellness culinary tips..."
];

// Local fallback recipe — used only when the AI API is unreachable, rate-limited,
// or the hosting platform returns a non-JSON document (e.g. index.html) for the
// API request. This guarantees the generator always shows a full, valid recipe
// instead of crashing with "Unexpected token '<'".
const FALLBACK_RECIPE: AIRecipe = {
  recipeName: "Monkaura Protein Brownie Bites",
  description:
    "Fudgy, sugar-free brownie bites powered by Monkaura Erythritol & Monk Fruit Blend. Zero-added-sugar indulgence that bakes with clean sweetness.",
  prepTime: "10 mins",
  cookTime: "22 mins",
  servings: "12 bites",
  ingredients: [
    "1 cup almond flour",
    "1/3 cup unsweetened cocoa powder",
    "3 tbsp Monkaura Erythritol & Monk Fruit Blend",
    "2 large eggs",
    "1/4 cup melted coconut oil",
    "1 tsp vanilla extract",
    "1/4 tsp baking powder",
    "Pinch of sea salt",
    "1/4 cup sugar-free dark chocolate chips (optional)"
  ],
  instructions: [
    "Preheat oven to 175°C (350°F) and line a small baking dish with parchment paper.",
    "Whisk together almond flour, cocoa powder, Monkaura sweetener, baking powder, and sea salt in a bowl.",
    "In a separate bowl, beat eggs, melted coconut oil, and vanilla extract until smooth.",
    "Fold the wet ingredients into the dry mix until a thick glossy batter forms. Stir in chocolate chips if using.",
    "Transfer batter to the prepared dish and smooth the top. Bake for 18–22 minutes until just set.",
    "Cool completely before slicing into 12 bites. Store in an airtight container for up to 5 days."
  ],
  nutrition: {
    calories: "98 kcal",
    netCarbs: "2g",
    fat: "8g",
    protein: "4g",
    monkauraSavings: "Saves ~12g sugar & ~48 kcal per bite compared to classic brownies."
  },
  chefTip:
    "Let the batter rest for 5 minutes before baking — Monkaura blends evenly with cocoa for that bakery-style crumb."
};

function isRecipeLike(value: unknown): value is AIRecipe {
  if (!value || typeof value !== "object") return false;
  const r = value as AIRecipe;
  return (
    typeof r.recipeName === "string" &&
    typeof r.description === "string" &&
    Array.isArray(r.ingredients) &&
    r.ingredients.every((i) => typeof i === "string") &&
    Array.isArray(r.instructions) &&
    r.instructions.every((i) => typeof i === "string") &&
    !!r.nutrition &&
    typeof r.nutrition.netCarbs === "string"
  );
}

export default function RecipeCalculator() {
  const [activeTab, setActiveTab] = useState<"directory" | "calculator" | "generator">("directory");
  const [recipeFilter, setRecipeFilter] = useState<string>("All");
  
  // Tab 1: Calculator State
  const [selectedRecipe, setSelectedRecipe] = useState<DessertRecipe>(DESSERT_RECIPES[0]);
  const [sugarInput, setSugarInput] = useState<number>(200);

  const caloriesSaved = Math.round(sugarInput * 4); // Sugar is roughly 4 calories per gram
  const runningHours = (caloriesSaved / 600).toFixed(1);

  const handleRecipeChange = (recipeName: string) => {
    const found = DESSERT_RECIPES.find(r => r.name === recipeName);
    if (found) {
      setSelectedRecipe(found);
      setSugarInput(found.originalSugarGrams);
    }
  };

  const handleInputChange = (val: string) => {
    const num = parseInt(val) || 0;
    if (num >= 0 && num <= 2000) {
      setSugarInput(num);
    }
  };

  // Tab 2: AI Generator State
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [recipeCategory, setRecipeCategory] = useState<string>("dessert");
  const [sweetenerStyle, setSweetenerStyle] = useState<string>("baking");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<AIRecipe | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  // Rotate loading messages during active AI generation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      interval = setInterval(() => {
        setLoadingMsgIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 2500);
    } else {
      setLoadingMsgIdx(0);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleGenerateRecipe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredientInput.trim()) {
      setApiError("Please type or select an ingredient first.");
      return;
    }

    setIsGenerating(true);
    setApiError(null);
    setGeneratedRecipe(null);
    setCheckedIngredients({});

    // ── 0. Simulate a realistic AI "thinking" delay (5–8s) ─────────────
    // Keeps the existing loading animation visible while the local JSON
    // database is queried, so the experience feels like a real AI call.
    const delay = Math.floor(Math.random() * 2001) + 3000;
    await new Promise(resolve => setTimeout(resolve, delay));

    // ── 1. Check the local JSON recipe database first ──────────────────
    // If a matching recipe exists for this ingredient + category + style,
    // display it immediately without calling OpenRouter or any external API.
    const localRecipe = findLocalRecipe(ingredientInput, recipeCategory, sweetenerStyle);
    if (localRecipe) {
      setGeneratedRecipe(localRecipe);
      setIsGenerating(false);
      return;
    }

    // ── 2. No local match — fall back to the OpenRouter AI API ─────────
    try {
      const response = await fetch("/api/recipes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredient: ingredientInput,
          category: recipeCategory,
          preference: sweetenerStyle
        })
      });

      const contentType = response.headers.get("content-type") || "";

      // If the server returned an error status, read the body as text and surface a clear error.
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API request failed (${response.status}):`, errorText.substring(0, 300));
        throw new Error("This recipe combination is not available yet.");
      }

      // If the response is not JSON (e.g. an HTML page returned by a static host),
      // do NOT attempt response.json() — that would throw "Unexpected token '<'".
      // Instead log the problem and gracefully fall back to the local recipe.
      if (!contentType.includes("application/json")) {
        const responseText = await response.text();
        console.error(
          `Expected JSON but received ${contentType || "unknown content type"}:`,
          responseText.substring(0, 300)
        );
        setApiError(
          "AI service is temporarily unavailable, so we prepared a chef-crafted Monkaura recipe for you instead."
        );
        setGeneratedRecipe(FALLBACK_RECIPE);
        return;
      }

      const data = await response.json();

      // Defensive schema check — if the payload isn't a valid recipe, fall back.
      if (!isRecipeLike(data)) {
        console.error(
          "API returned an unexpected recipe shape:",
          JSON.stringify(data).substring(0, 300)
        );
        setApiError(
          "AI service returned an unexpected response, so we prepared a chef-crafted Monkaura recipe for you instead."
        );
        setGeneratedRecipe(FALLBACK_RECIPE);
        return;
      }

      setGeneratedRecipe(data);
    } catch (err: any) {
      console.error("Recipe generation error:", err);
      setApiError("This recipe combination is not available yet.");
      setGeneratedRecipe(FALLBACK_RECIPE);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyRecipe = () => {
    if (!generatedRecipe) return;
    
    const recipeText = `
🍽️ ${generatedRecipe.recipeName}
${generatedRecipe.description}

Prep Time: ${generatedRecipe.prepTime} | Cook Time: ${generatedRecipe.cookTime} | Servings: ${generatedRecipe.servings}

🛒 INGREDIENTS:
${generatedRecipe.ingredients.map(ing => `- ${ing}`).join("\n")}

📋 INSTRUCTIONS:
${generatedRecipe.instructions.map((step, idx) => `${idx + 1}. ${step}`).join("\n")}

💡 NUTRITIONAL FACTS (Per Serving):
- Calories: ${generatedRecipe.nutrition.calories}
- Net Carbs: ${generatedRecipe.nutrition.netCarbs}
- Fat: ${generatedRecipe.nutrition.fat}
- Protein: ${generatedRecipe.nutrition.protein}
🌿 Monkaura Sweetener Savings: ${generatedRecipe.nutrition.monkauraSavings}

👨‍🍳 CHEF TIP:
"${generatedRecipe.chefTip}"

Made healthy with Monkaura — Zero-Sugar Erythritol & Monk Fruit Blend!
    `;

    navigator.clipboard.writeText(recipeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleIngredientCheck = (idx: number) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="recipe-hub" className="py-16 md:py-24 bg-white relative">
      <Helmet>
        <title>Zero-Sugar Indian Recipes & 1:1 Sweetener Directory | MONKAURA</title>
        <link rel="canonical" href="https://monkaura.in/recipes" />
        <meta name="description" content="Discover healthy zero-sugar Indian recipes made with MONKAURA 1:1 Monk Fruit, Erythritol sweetener. Masala chai, filter coffee, kheer, halwa, cookies, and desserts." />
        <meta name="keywords" content="zero sugar recipes india, monk fruit recipes, sugar free chai, sugar free kheer, keto halwa, monkaura recipes" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zero-Sugar Indian Recipes & 1:1 Sweetener Directory | MONKAURA" />
        <meta property="og:description" content="Healthy Indian recipes made with MONKAURA 1:1 Monk Fruit, Erythritol sweetener. Zero added sugar." />
        <meta property="og:url" content="https://monkaura.in/recipes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1NCOTfy2-oeALS_3S58oFXlbt4kKA8kZG" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zero-Sugar Indian Recipes | MONKAURA" />
        <meta name="twitter:description" content="Healthy Indian recipes made with MONKAURA 1:1 Monk Fruit, Erythritol sweetener." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1NCOTfy2-oeALS_3S58oFXlbt4kKA8kZG" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://monkaura.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Recipes",
                "item": "https://monkaura.in/recipes"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Indian Kitchen Recipes
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark font-bold tracking-tight">
            Traditional Recipes with Zero Added Sugar
          </h1>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Discover authentic chai, filter coffee, halwas, kheer, and home bakes made with MONKAURA 1:1 Monk Fruit, Erythritol blend.
          </p>

          {/* Clean Segmented Tab Switcher */}
          <div className="inline-flex p-1 bg-white border border-gray-200/80 rounded-lg max-w-md w-full mt-6 shadow-2xs">
            <button
              onClick={() => setActiveTab("directory")}
              className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === "directory"
                  ? "bg-brand-green text-white shadow-2xs"
                  : "text-brand-dark/70 hover:text-brand-green"
              }`}
            >
              Recipes ({Object.keys(EXTENDED_RECIPES).length})
            </button>
            <button
              onClick={() => setActiveTab("calculator")}
              className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === "calculator"
                  ? "bg-brand-green text-white shadow-2xs"
                  : "text-brand-dark/70 hover:text-brand-green"
              }`}
            >
              Sugar Calculator
            </button>
            <button
              onClick={() => setActiveTab("generator")}
              className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === "generator"
                  ? "bg-brand-green text-white shadow-2xs"
                  : "text-brand-dark/70 hover:text-brand-green"
              }`}
            >
              Recipe Assistant
            </button>
          </div>
        </div>

        {/* Dynamic Panel Renderer */}
        <AnimatePresence mode="wait">
          {activeTab === "directory" ? (
            <motion.div
              key="directory-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {/* Category Filter Controls */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-gray-100 rounded-lg max-w-3xl mx-auto">
                {["All", "Tea", "Coffee", "Lemonade", "Kheer", "Halwa", "Indian desserts", "Cookies", "Cakes", "Cold coffee"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setRecipeFilter(cat)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      recipeFilter === cat
                        ? "bg-brand-green text-white"
                        : "text-brand-dark/70 hover:text-brand-green"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Recipe Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(EXTENDED_RECIPES)
                  .filter((rec) => recipeFilter === "All" || rec.category === recipeFilter)
                  .map((rec) => (
                    <article
                      key={rec.slug}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 relative">
                        <img
                          src={rec.imageUrl}
                          alt={rec.name}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                        <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold text-brand-dark bg-white/95 px-2.5 py-0.5 rounded shadow-2xs">
                          {rec.category}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <h2 className="font-serif font-bold text-base sm:text-lg text-brand-dark group-hover:text-brand-green transition-colors leading-snug">
                            {rec.name}
                          </h2>
                          <div className="flex items-center gap-3 text-xs text-brand-dark/60">
                            <span className="flex items-center gap-1">
                              <Clock size={13} className="text-brand-green" />
                              {rec.prepTime} prep
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame size={13} className="text-brand-green" />
                              {rec.cookTime} cook
                            </span>
                          </div>
                          <p className="text-xs text-brand-dark/70 line-clamp-2">
                            {rec.monkauraUsage}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-brand-green bg-brand-mint/50 px-2.5 py-1 rounded-lg">
                            {rec.caloriesPerServing.split("(")[0]}
                          </span>
                          <Link
                            to={`/recipes/${rec.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-brand-dark group-hover:text-brand-green transition-colors"
                          >
                            <span>Cook Recipe</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </motion.div>
          ) : activeTab === "calculator" ? (
            <motion.div
              key="calculator-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto"
            >
              {/* Left Control Panel */}
              <div className="lg:col-span-5 bg-brand-cream/80 border border-brand-green/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                  {/* Recipe Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">
                      1. Select Dessert Recipe
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {DESSERT_RECIPES.map(recipe => (
                        <button
                          key={recipe.name}
                          onClick={() => handleRecipeChange(recipe.name)}
                          className={`py-3 px-2 rounded-xl text-xs font-bold text-center border cursor-pointer transition-all ${
                            selectedRecipe.name === recipe.name
                              ? "bg-brand-green border-brand-green text-white shadow-md scale-102"
                              : "bg-white border-gray-100 text-brand-dark hover:border-brand-green/20"
                          }`}
                        >
                          {recipe.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slider / Number Input */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest">
                        2. Original Sugar Quantity
                      </label>
                      <span className="text-xs font-black text-brand-green bg-brand-mint px-2 py-0.5 rounded">
                        {sugarInput} Grams
                      </span>
                    </div>
                    
                    <input
                      type="range"
                      min="20"
                      max="1000"
                      step="10"
                      value={sugarInput}
                      onChange={(e) => handleInputChange(e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />

                    <div className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100">
                      <span className="text-xs font-semibold text-brand-dark/50">Or enter manually:</span>
                      <input
                        type="number"
                        value={sugarInput || ""}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="w-20 px-2 py-1 text-center font-bold text-sm text-brand-green border border-gray-200 rounded-lg outline-none focus:border-brand-green"
                      />
                      <span className="text-xs font-bold text-brand-dark">g</span>
                    </div>
                  </div>

                  {/* Live Metric Conversion Outputs */}
                  <div className="pt-6 border-t border-brand-green/10 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest">
                        Monkaura Required (1:1)
                      </span>
                      <span className="font-serif font-black text-lg text-brand-green">
                        {sugarInput} Grams
                      </span>
                    </div>

                    <div className="flex items-center gap-4 bg-brand-green text-white rounded-2xl p-4 shadow-inner">
                      <div className="p-2.5 rounded-xl bg-white/10 text-brand-mint">
                        <Flame size={24} className="animate-pulse" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-brand-mint/70 block leading-none mb-1">
                          Pure Calories Saved
                        </span>
                        <span className="font-serif font-black text-2xl text-white leading-none">
                          {caloriesSaved} kcal
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-brand-gold-dark text-white rounded-2xl p-4">
                      <div className="p-2.5 rounded-xl bg-white/10 text-brand-mint">
                        <Dumbbell size={24} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-white/70 block leading-none mb-1">
                          Equivalent Activity Saved
                        </span>
                        <span className="font-serif font-black text-lg text-white leading-none">
                          {runningHours} Hours of Jogging
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-brand-dark/40 font-light italic text-center pt-4">
                  *1g of white sugar contains ~4 calories. 1g of Monkaura contains 0 net metabolizable calories.
                </div>
              </div>

              {/* Right Display Recipe Column */}
              <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
                {/* Dessert Cover Header */}
                <div className="relative aspect-[16/7] w-full overflow-hidden">
                  <img
                    src={selectedRecipe.imageUrl}
                    alt={selectedRecipe.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="text-[10px] font-bold text-brand-mint uppercase tracking-widest block">
                        Zero-Sugar Recipe Card
                      </span>
                      <h2 className="font-serif text-2xl font-bold">
                        Healthy {selectedRecipe.name}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Steps list */}
                <div className="p-6 sm:p-8 flex-1 space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-50 pb-3">
                    <BookOpen size={16} className="text-brand-green" />
                    <h4 className="text-xs font-bold text-brand-dark/80 uppercase tracking-widest">
                      Sugar-Free Baking & Cooking Steps
                    </h4>
                  </div>

                  <ol className="space-y-4">
                    {selectedRecipe.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-brand-mint/60 flex justify-center items-center text-xs font-black text-brand-green shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-light">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Note bar */}
                <div className="bg-brand-mint-light p-4 text-xs font-medium text-brand-green border-t border-brand-mint/30 flex items-center justify-center gap-1.5">
                  <Clock size={14} />
                  <span>Perfect baking, browning, and caramelization - just like sugar!</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="generator-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Input form */}
              <div className="lg:col-span-5 bg-white border border-brand-green/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center gap-2 border-b border-brand-green/5 pb-3">
                  <Utensils size={18} className="text-brand-green" />
                  <h2 className="font-serif font-bold text-lg text-brand-dark">Keto Recipe Studio</h2>
                </div>

                <form onSubmit={handleGenerateRecipe} className="space-y-6">
                  {/* Ingredient Search */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider block">
                      Main Ingredient You Have:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Strawberry, Almond Butter, Cocoa"
                      value={ingredientInput}
                      onChange={(e) => setIngredientInput(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-cream/40 border border-brand-green/15 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-brand-dark/30 text-brand-dark"
                    />
                  </div>

                  {/* Popular Ingredients Tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest block">
                      Or Select Popular Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {POPULAR_INGREDIENTS.map((ing) => (
                        <button
                          key={ing}
                          type="button"
                          onClick={() => setIngredientInput(ing)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all border ${
                            ingredientInput.toLowerCase() === ing.toLowerCase()
                              ? "bg-brand-mint border-brand-green text-brand-green shadow-sm"
                              : "bg-brand-cream/30 border-gray-100 hover:border-brand-green/30 text-brand-dark/70"
                          }`}
                        >
                          {ing}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Preference */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider block">
                      Recipe Category:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "dessert", label: "🍮 Dessert" },
                        { id: "baked_goods", label: "🍰 Baked Goods" },
                        { id: "breakfast", label: "🍳 Breakfast" },
                        { id: "beverage", label: "☕ Drinks" }
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setRecipeCategory(cat.id)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            recipeCategory === cat.id
                              ? "bg-brand-green border-brand-green text-white shadow"
                              : "bg-brand-cream/30 border-gray-100 hover:border-brand-green/15 text-brand-dark/80"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sweetener preference style */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider block">
                      Monkaura Sweetening Style:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "baking", label: "Classic Baking" },
                        { id: "caramelized", label: "Rich Caramelized" },
                        { id: "standard", label: "Light Sweetness" },
                        { id: "sauce", label: "Glossy Glazes/Syrup" }
                      ].map((pref) => (
                        <button
                          key={pref.id}
                          type="button"
                          onClick={() => setSweetenerStyle(pref.id)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            sweetenerStyle === pref.id
                              ? "bg-brand-green border-brand-green text-white shadow"
                              : "bg-brand-cream/30 border-gray-100 hover:border-brand-green/15 text-brand-dark/80"
                          }`}
                        >
                          {pref.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Trigger */}
                  <button
                    type="submit"
                    disabled={isGenerating || !ingredientInput.trim()}
                    className="w-full py-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl font-bold text-sm tracking-wide shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Generate Keto Recipe</span>
                    <Sparkles size={16} className={isGenerating ? "animate-spin" : ""} />
                  </button>
                </form>

                {apiError && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex gap-3 text-red-700">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed font-medium">{apiError}</p>
                  </div>
                )}
              </div>

              {/* Right Output View */}
              <div className="lg:col-span-7 bg-brand-cream/50 border border-brand-green/10 rounded-3xl min-h-[500px] overflow-hidden flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div
                      key="generating-spinner"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center flex flex-col items-center justify-center space-y-6"
                    >
                      {/* Custom Whimsical Baking Loader */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full border-4 border-brand-green/10 border-t-brand-green animate-spin" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ChefHat className="text-brand-green animate-bounce" size={28} />
                        </div>
                      </div>
                      
                      <div className="space-y-2 max-w-sm">
                        <h4 className="font-serif font-extrabold text-brand-dark text-lg">
                          Keto Kitchen is Cooking...
                        </h4>
                        <p className="text-brand-dark/60 text-xs font-light leading-relaxed min-h-[40px]">
                          {LOADING_MESSAGES[loadingMsgIdx]}
                        </p>
                      </div>
                    </motion.div>
                  ) : generatedRecipe ? (
                    <motion.div
                      key="generated-recipe-display"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6 sm:p-8 space-y-6 bg-white rounded-3xl border border-brand-green/5 shadow-xl flex flex-col justify-between"
                    >
                      {/* Recipe Title & Meta */}
                      <div className="flex justify-between items-start gap-4 border-b border-gray-100 pb-5">
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-mint px-2 py-0.5 rounded-md">
                            <Sparkles size={10} /> Certified Sugar-Free Keto
                          </span>
                          <h2 className="font-serif font-black text-2xl text-brand-dark">
                            {generatedRecipe.recipeName}
                          </h2>
                          <p className="text-xs text-brand-dark/70 font-light leading-relaxed">
                            {generatedRecipe.description}
                          </p>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={handleCopyRecipe}
                            className="p-2.5 rounded-xl bg-brand-cream hover:bg-brand-mint text-brand-green hover:text-brand-green transition-all cursor-pointer border border-brand-green/5"
                            title="Copy full recipe text"
                          >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Prep time metrics */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-brand-cream/60 rounded-2xl border border-brand-green/5">
                        <div className="text-center border-r border-brand-green/10">
                          <span className="block text-[10px] text-brand-dark/40 uppercase font-black tracking-widest">Prep</span>
                          <span className="font-sans font-bold text-xs sm:text-sm text-brand-dark">{generatedRecipe.prepTime}</span>
                        </div>
                        <div className="text-center border-r border-brand-green/10">
                          <span className="block text-[10px] text-brand-dark/40 uppercase font-black tracking-widest">Cook</span>
                          <span className="font-sans font-bold text-xs sm:text-sm text-brand-dark">{generatedRecipe.cookTime}</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-[10px] text-brand-dark/40 uppercase font-black tracking-widest">Serves</span>
                          <span className="font-sans font-bold text-xs sm:text-sm text-brand-dark">{generatedRecipe.servings}</span>
                        </div>
                      </div>

                      {/* Ingredients & Steps Columns */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Ingredients Left */}
                        <div className="md:col-span-5 space-y-3">
                          <h4 className="text-xs font-bold text-brand-dark/80 uppercase tracking-widest border-b border-gray-50 pb-1.5 flex items-center gap-1.5">
                            <span>Ingredients</span>
                            <span className="text-[9px] bg-brand-cream px-1.5 py-0.5 rounded text-brand-dark/60 lowercase">check list</span>
                          </h4>
                          <ul className="space-y-2">
                            {generatedRecipe.ingredients.map((ing, idx) => {
                              const isMonkaura = ing.toLowerCase().includes("monkaura") || ing.toLowerCase().includes("sweetener");
                              return (
                                <li 
                                  key={idx} 
                                  onClick={() => toggleIngredientCheck(idx)}
                                  className={`flex items-start gap-2.5 p-2 rounded-xl border transition-all cursor-pointer ${
                                    checkedIngredients[idx] 
                                      ? "bg-gray-50/50 border-gray-100 opacity-50 line-through" 
                                      : isMonkaura 
                                        ? "bg-brand-mint/35 border-brand-green/20" 
                                        : "bg-white border-gray-50 hover:border-brand-green/10"
                                  }`}
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={!!checkedIngredients[idx]} 
                                    readOnly
                                    className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-brand-green focus:ring-brand-green accent-brand-green cursor-pointer shrink-0"
                                  />
                                  <span className={`text-xs text-brand-dark font-light leading-snug ${isMonkaura ? "font-semibold text-brand-green" : ""}`}>
                                    {ing}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Directions Right */}
                        <div className="md:col-span-7 space-y-3">
                          <h4 className="text-xs font-bold text-brand-dark/80 uppercase tracking-widest border-b border-gray-50 pb-1.5">
                            Step-By-Step Directions
                          </h4>
                          <ol className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                            {generatedRecipe.instructions.map((step, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start">
                                <div className="w-5 h-5 rounded-full bg-brand-green/10 text-[10px] font-bold text-brand-green flex justify-center items-center shrink-0 mt-0.5">
                                  {idx + 1}
                                </div>
                                <p className="text-xs text-brand-dark/80 leading-relaxed font-light">
                                  {step}
                                </p>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* Nutrition Spotlight */}
                      <div className="bg-brand-green text-white rounded-2xl p-4 space-y-3 shadow-inner">
                        <div className="flex justify-between items-center border-b border-white/15 pb-2">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-mint">Macronutrient Intelligence (Per Serving)</span>
                          <Heart size={12} className="text-brand-mint fill-brand-mint animate-pulse" />
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div className="bg-white/5 py-1.5 rounded-lg">
                            <span className="block text-[8px] text-brand-mint/80 uppercase tracking-wider">Calories</span>
                            <span className="font-serif font-black text-xs sm:text-sm">{generatedRecipe.nutrition.calories}</span>
                          </div>
                          <div className="bg-white/5 py-1.5 rounded-lg border border-brand-mint/20 shadow-md">
                            <span className="block text-[8px] text-brand-mint/80 uppercase tracking-wider">Net Carbs</span>
                            <span className="font-serif font-black text-xs sm:text-sm text-brand-mint">{generatedRecipe.nutrition.netCarbs}</span>
                          </div>
                          <div className="bg-white/5 py-1.5 rounded-lg">
                            <span className="block text-[8px] text-brand-mint/80 uppercase tracking-wider">Fat</span>
                            <span className="font-serif font-black text-xs sm:text-sm">{generatedRecipe.nutrition.fat}</span>
                          </div>
                          <div className="bg-white/5 py-1.5 rounded-lg">
                            <span className="block text-[8px] text-brand-mint/80 uppercase tracking-wider">Protein</span>
                            <span className="font-serif font-black text-xs sm:text-sm">{generatedRecipe.nutrition.protein}</span>
                          </div>
                        </div>

                        <p className="text-[10px] text-brand-mint/90 leading-relaxed font-light text-center pt-1 italic">
                          ✨ {generatedRecipe.nutrition.monkauraSavings}
                        </p>
                      </div>

                      {/* Baker Chef Tip */}
                      <div className="bg-brand-mint-light/40 border border-brand-green/10 rounded-2xl p-4 flex gap-3 text-brand-green-dark">
                        <ChefHat size={20} className="shrink-0 mt-0.5 text-brand-green" />
                        <div className="space-y-0.5">
                          <span className="text-[9px] uppercase font-black tracking-widest block text-brand-green">Professional Baker's Advice</span>
                          <p className="text-xs font-light leading-relaxed italic">"{generatedRecipe.chefTip}"</p>
                        </div>
                      </div>

                      {/* Reset option */}
                      <div className="flex justify-center pt-2">
                        <button
                          onClick={() => {
                            setGeneratedRecipe(null);
                            setIngredientInput("");
                          }}
                          className="flex items-center gap-1.5 text-brand-dark/40 hover:text-brand-green text-xs font-semibold cursor-pointer transition-colors"
                        >
                          <RotateCcw size={12} />
                          <span>Reset & Create New Recipe</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="generator-placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center max-w-sm mx-auto space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-green/10 flex justify-center items-center mx-auto text-brand-green">
                        <Sparkles size={28} className="animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif font-extrabold text-brand-dark text-lg leading-tight">
                          Enter Ingredients to Begin
                        </h4>
                        <p className="text-brand-dark/60 text-xs font-light leading-relaxed">
                          Enter an ingredient you have in your cupboard (e.g., coconut, chocolate, blueberries) 
                          and let our AI instantly brew a customized, healthy recipe.
                        </p>
                      </div>
                      <div className="pt-2">
                        <button
                          onClick={() => setIngredientInput("Almond Flour")}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-green text-white font-bold text-[10px] uppercase tracking-wider cursor-pointer shadow hover:shadow-md transition-all hover:scale-103"
                        >
                          <span>Try Almond Flour</span>
                          <ArrowRight size={10} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
