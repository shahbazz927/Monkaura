import monkauraRecipes from "./monkaura_128_recipes.json";

export interface LocalNutrition {
  calories: string;
  netCarbs: string;
  fat: string;
  protein: string;
}

export interface LocalRecipe {
  id: number;
  slug: string;
  title: string;
  mainIngredient: string;
  category: string;
  sweeteningStyle: string;
  prepTime: string;
  cookTime: string;
  serves: string;
  ingredients: string[];
  directions: string[];
  nutritionPerServing: LocalNutrition;
  monkauraNote: string;
}

export interface LocalRecipeDatabase {
  name: string;
  totalRecipes: number;
  combinations: {
    mainIngredients: string[];
    categories: string[];
    sweeteningStyles: string[];
  };
  nutritionNote: string;
  recipes: LocalRecipe[];
}

export interface AIRecipe {
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

const CATEGORY_MAP: Record<string, string> = {
  dessert: "Dessert",
  baked_goods: "Baked Goods",
  breakfast: "Breakfast",
  beverage: "Drinks",
};

const STYLE_MAP: Record<string, string> = {
  baking: "Classic Baking",
  caramelized: "Rich Caramelized",
  standard: "Light Sweetness",
  sauce: "Glossy Glazes/Syrup",
};

function normalizeIngredient(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, " ");
}

export function findLocalRecipe(
  ingredient: string,
  categoryId: string,
  styleId: string
): AIRecipe | null {
  const db = monkauraRecipes as unknown as LocalRecipeDatabase;
  const categoryName = CATEGORY_MAP[categoryId];
  const styleName = STYLE_MAP[styleId];

  if (!categoryName || !styleName) return null;

  const normalizedIngredient = normalizeIngredient(ingredient);

  let match = db.recipes.find(
    (r) =>
      normalizeIngredient(r.mainIngredient) === normalizedIngredient &&
      r.category === categoryName &&
      r.sweeteningStyle === styleName
  );

  if (!match) {
    match = db.recipes.find(
      (r) =>
        normalizeIngredient(r.mainIngredient).includes(normalizedIngredient) &&
        r.category === categoryName &&
        r.sweeteningStyle === styleName
    );
  }

  if (!match) return null;

  return convertLocalRecipe(match);
}

export function convertLocalRecipe(recipe: LocalRecipe): AIRecipe {
  return {
    recipeName: recipe.title,
    description: `A delicious ${recipe.category.toLowerCase()} featuring ${recipe.mainIngredient} with a ${recipe.sweeteningStyle.toLowerCase()} sweetening style — sweetened exclusively with Monkaura Allulose & Monk Fruit Blend.`,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    servings: recipe.serves,
    ingredients: recipe.ingredients,
    instructions: recipe.directions,
    nutrition: {
      calories: recipe.nutritionPerServing.calories,
      netCarbs: recipe.nutritionPerServing.netCarbs,
      fat: recipe.nutritionPerServing.fat,
      protein: recipe.nutritionPerServing.protein,
      monkauraSavings: "Zero-sugar, zero-spike sweetness from Monkaura Allulose & Monk Fruit Blend.",
    },
    chefTip: recipe.monkauraNote,
  };
}

export function hasLocalRecipe(
  ingredient: string,
  categoryId: string,
  styleId: string
): boolean {
  return findLocalRecipe(ingredient, categoryId, styleId) !== null;
}