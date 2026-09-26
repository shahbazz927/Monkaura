import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, Users, Flame, ChefHat, CheckCircle2, ArrowRight, ShoppingBag, Sparkles, HelpCircle, Archive } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import { PRODUCTS } from "../data";
import { Product } from "../types";

interface RecipeDetailProps {
  onAddToCart?: (product: Product, quantity: number) => void;
}

export interface ExtendedRecipe {
  slug: string;
  name: string;
  category: "Tea" | "Coffee" | "Lemonade" | "Kheer" | "Halwa" | "Indian desserts" | "Cookies" | "Cakes" | "Cold coffee" | "Desserts";
  prepTime: string;
  cookTime: string;
  isoPrepTime: string;
  isoCookTime: string;
  servings: string;
  originalSugarGrams: number;
  monkauraGrams: number;
  originalCalories: number;
  monkauraCalories: number;
  caloriesPerServing: string;
  monkauraUsage: string;
  storage: string;
  ingredients: string[];
  steps: string[];
  chefTip: string;
  imageUrl: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const EXTENDED_RECIPES: Record<string, ExtendedRecipe> = {
  "masala-chai": {
    slug: "masala-chai",
    name: "Classic Indian Masala Chai with Monk Fruit Sweetener",
    category: "Tea",
    prepTime: "3 mins",
    cookTime: "7 mins",
    isoPrepTime: "PT3M",
    isoCookTime: "PT7M",
    servings: "2 cups",
    originalSugarGrams: 16,
    monkauraGrams: 16,
    originalCalories: 64,
    monkauraCalories: 0,
    caloriesPerServing: "55 kcal (from milk only, 0 added sugar)",
    monkauraUsage: "2 teaspoons (8g) MONKAURA replaces 2 teaspoons refined sugar 1:1. Stir in right before serving or during simmering.",
    storage: "Best enjoyed fresh and piping hot. Can be kept in a vacuum thermos for up to 4 hours.",
    ingredients: [
      "2 cups Water",
      "1 cup Whole milk (or unsweetened almond/oat milk)",
      "2 tsp Strong Assam black tea CTC leaves",
      "1 inch Fresh ginger (crushed)",
      "3 Green cardamom pods (lightly crushed)",
      "2 Cloves",
      "1 small Cinnamon stick",
      "2 tsp MONKAURA Monk Fruit, Erythritol Sweetener"
    ],
    steps: [
      "In a saucepan, bring 2 cups of water to a boil with crushed ginger, cardamom, cloves, and cinnamon. Let the spices simmer on medium heat for 2-3 minutes to extract their aromatic oils.",
      "Add 2 teaspoons of strong Assam black tea leaves and simmer for another 2 minutes until the liquor turns deep amber.",
      "Pour in 1 cup of whole milk and bring the mixture to a gentle rolling boil on medium flame.",
      "Turn off heat. Add 2 teaspoons of MONKAURA Monk Fruit, Erythritol Sweetener and stir gently until dissolved. MONKAURA dissolves instantly without cooling or curding the hot milk.",
      "Strain through a fine tea strainer into two traditional cutting chai glasses or ceramic mugs and serve hot with roasted makhana or sugar-free biscuits."
    ],
    chefTip: "MONKAURA is heat-stable up to 200°C. You can add it while simmering or after straining without altering the warm spice notes.",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop&q=80",
    faqs: [
      {
        q: "Will MONKAURA curdle hot milk in chai?",
        a: "No. MONKAURA contains only non-GMO Erythritol and Monk Fruit extract (Mogroside V). It contains zero citric acid or preservatives that could curdle boiling milk."
      },
      {
        q: "Can I reheat chai made with MONKAURA?",
        a: "Yes. MONKAURA does not break down or turn bitter upon gentle reheating."
      }
    ],
    relatedSlugs: ["filter-coffee", "nimbu-pani", "cold-coffee"]
  },
  "filter-coffee": {
    slug: "filter-coffee",
    name: "South Indian Filter Coffee with Monk Fruit Sweetener",
    category: "Coffee",
    prepTime: "5 mins",
    cookTime: "5 mins",
    isoPrepTime: "PT5M",
    isoCookTime: "PT5M",
    servings: "2 cups",
    originalSugarGrams: 16,
    monkauraGrams: 16,
    originalCalories: 64,
    monkauraCalories: 0,
    caloriesPerServing: "70 kcal (from milk only)",
    monkauraUsage: "2 teaspoons (8g) MONKAURA replaces 2 teaspoons cane sugar 1:1.",
    storage: "Decoction can be stored in an airtight glass jar in the refrigerator for up to 24 hours. Brew fresh with hot milk.",
    ingredients: [
      "3 tbsp South Indian filter coffee blend (80% coffee, 20% chicory)",
      "3/4 cup Freshly boiled water",
      "1.5 cups Full-cream fresh milk",
      "2 tsp MONKAURA Monk Fruit, Erythritol Sweetener"
    ],
    steps: [
      "Add 3 tablespoons of coffee-chicory powder into the upper pierced chamber of a traditional brass coffee filter. Press down lightly with the pressing disc.",
      "Pour 3/4 cup of freshly boiled water over the disc and close the lid. Allow the rich, thick dark decoction to drip slowly into the lower chamber for 10-15 minutes.",
      "In a small pot, bring full-cream milk to a rolling boil until frothy.",
      "In a traditional davarah (tumbler and bowl set), add 2-3 tablespoons of hot dark decoction and 1 teaspoon of MONKAURA sweetener.",
      "Pour boiling hot frothy milk from a height into the tumbler, creating a rich velvety micro-foam on top. Pour back and forth between davarah and tumbler twice to blend completely, then serve."
    ],
    chefTip: "Pouring the coffee from a height not only aerates the milk into foam but also ensures MONKAURA crystals dissolve evenly with zero sediment.",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700&auto=format&fit=crop&q=80",
    faqs: [
      {
        q: "Does MONKAURA mask the rich roasted coffee flavor?",
        a: "Not at all. MONKAURA has a clean, neutral sweetness profile without the licorice or metallic notes of stevia, letting the dark roast aroma shine."
      }
    ],
    relatedSlugs: ["cold-coffee", "masala-chai", "kheer"]
  },
  "nimbu-pani": {
    slug: "nimbu-pani",
    name: "Refreshing Indian Shikanji (Nimbu Pani) with Monk Fruit",
    category: "Lemonade",
    prepTime: "5 mins",
    cookTime: "0 mins",
    isoPrepTime: "PT5M",
    isoCookTime: "PT0M",
    servings: "2 tall glasses",
    originalSugarGrams: 30,
    monkauraGrams: 30,
    originalCalories: 120,
    monkauraCalories: 0,
    caloriesPerServing: "15 kcal (from lemon juice, 0g added sugar)",
    monkauraUsage: "2 tablespoons (24g) MONKAURA replaces 2 tablespoons granulated sugar 1:1.",
    storage: "Keep chilled in refrigerator in a covered glass pitcher for up to 24 hours.",
    ingredients: [
      "2 Large fresh juicy Indian lemons (juiced)",
      "2.5 cups Chilled filtered water or club soda",
      "2 tbsp MONKAURA Monk Fruit, Erythritol Sweetener",
      "1/4 tsp Kala namak (Indian black rock salt)",
      "1/4 tsp Roasted cumin powder (bhuna jeera)",
      "Pinch of regular rock salt",
      "Fresh mint leaves for garnish",
      "Ice cubes"
    ],
    steps: [
      "In a small mixing cup, combine 2 tablespoons of MONKAURA sweetener with 1/4 cup of warm water. Stir for 20 seconds until the fine crystals dissolve completely.",
      "In a glass pitcher, add freshly squeezed lemon juice, black salt (kala namak), and freshly roasted cumin powder.",
      "Pour in the dissolved MONKAURA syrup and top with chilled water or club soda.",
      "Stir vigorously. Taste and adjust salt or lemon intensity according to your taste.",
      "Fill two tall glasses with ice cubes, pour the shikanji over the ice, clap fresh mint leaves between your palms to release aromatics, and float on top. Serve chilled."
    ],
    chefTip: "Pre-dissolving MONKAURA in just 2 tablespoons of warm water before adding ice ensures 100% crystal dissolution in cold beverages.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700&auto=format&fit=crop&q=80",
    faqs: [
      {
        q: "Can I use club soda instead of still water?",
        a: "Yes! Soda Shikanji is an Indian street-style classic. MONKAURA works seamlessly with carbonated club soda."
      }
    ],
    relatedSlugs: ["cold-coffee", "masala-chai", "keto-almond-cookies"]
  },
  "cold-coffee": {
    slug: "cold-coffee",
    name: "Café-Style Frothy Cold Coffee with Monk Fruit",
    category: "Cold coffee",
    prepTime: "5 mins",
    cookTime: "0 mins",
    isoPrepTime: "PT5M",
    isoCookTime: "PT0M",
    servings: "2 glasses",
    originalSugarGrams: 24,
    monkauraGrams: 24,
    originalCalories: 96,
    monkauraCalories: 0,
    caloriesPerServing: "90 kcal (with cow's milk, 0g added sugar)",
    monkauraUsage: "2 tablespoons (24g) MONKAURA replaces 2 tablespoons white sugar 1:1.",
    storage: "Best consumed immediately after blending to enjoy the thick foamy head.",
    ingredients: [
      "2 cups Chilled full-fat milk (or unsweetened almond/soy milk)",
      "2 tsp Premium instant coffee powder",
      "2 tbsp MONKAURA Monk Fruit, Erythritol Sweetener",
      "2 tbsp Warm water",
      "6-8 Fresh ice cubes",
      "Unsweetened cocoa powder for dusting (optional)"
    ],
    steps: [
      "In a small bowl, whisk together 2 teaspoons instant coffee powder, 2 tablespoons MONKAURA sweetener, and 2 tablespoons warm water until dissolved and slightly frothy.",
      "Pour the coffee-sweetener mixture into a high-speed blender jar.",
      "Add 2 cups chilled milk and 6-8 ice cubes.",
      "Blend on high speed for 60 to 90 seconds until the ice is crushed and a thick, thick café-style foam forms on the surface.",
      "Pour into two tall chilled glasses and lightly dust the foamy head with pure cocoa powder. Serve immediately."
    ],
    chefTip: "Blending the warm coffee-sweetener mixture directly with ice and chilled milk creates the dense, velvety microfoam characteristic of Indian café cold coffee.",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700&auto=format&fit=crop&q=80",
    faqs: [
      {
        q: "Does MONKAURA froth like sugar when whipped?",
        a: "Yes! Blended at high speed, MONKAURA aerates beautifully with milk proteins to create rich foam without gritty residue."
      }
    ],
    relatedSlugs: ["filter-coffee", "nimbu-pani", "sponge-cake"]
  },
  "kheer": {
    slug: "kheer",
    name: "Creamy Zero-Sugar Rice & Saffron Kheer",
    category: "Kheer",
    prepTime: "10 mins",
    cookTime: "35 mins",
    isoPrepTime: "PT10M",
    isoCookTime: "PT35M",
    servings: "4 servings",
    originalSugarGrams: 150,
    monkauraGrams: 150,
    originalCalories: 600,
    monkauraCalories: 0,
    caloriesPerServing: "120 kcal (from milk and rice, 0 added sugar)",
    monkauraUsage: "1/2 cup (96g) MONKAURA replaces 1/2 cup granulated sugar 1:1.",
    storage: "Store in an airtight container in the refrigerator for up to 3 days. Reheat gently with a splash of milk or enjoy chilled.",
    ingredients: [
      "1 liter Full-cream buffalo or cow milk",
      "1/4 cup Basmati rice (rinsed and soaked for 20 minutes)",
      "1/2 cup MONKAURA Monk Fruit, Erythritol Sweetener",
      "1/2 tsp Green cardamom powder",
      "10-12 strands Saffron soaked in 2 tbsp warm milk",
      "1 tbsp Slivered almonds",
      "1 tbsp Chopped pistachios"
    ],
    steps: [
      "In a heavy-bottomed pot or brass handi, bring full-cream milk to a boil on medium heat. Reduce heat and simmer for 10 minutes.",
      "Drain the soaked basmati rice, coarsely crush half of it with your fingers to release starch, and add to the simmering milk.",
      "Cook on low-medium flame for 25-30 minutes, stirring frequently and scraping the malai (clotted cream) from the sides back into the pot, until the rice grains are soft and the milk has reduced by 40%.",
      "Stir in the saffron milk infusion, freshly ground cardamom powder, and sliced almonds and pistachios.",
      "Turn off the heat. Stir in MONKAURA sweetener 1:1. The crystals dissolve completely in the hot kheer in seconds.",
      "Serve warm or chill in the refrigerator for 2 hours before serving."
    ],
    chefTip: "Adding MONKAURA right after turning off the flame locks in the natural floral aroma of monk fruit and saffron without carmelizing excessively.",
    imageUrl: "/assets/images/saffron-rice-kheer.jpg",
    faqs: [
      {
        q: "Will the kheer turn watery when refrigerated?",
        a: "No. Unlike some liquid sweeteners, MONKAURA's crystalline erythritol base retains moisture and maintains the creamy texture of reduced milk."
      }
    ],
    relatedSlugs: ["gulab-jamun", "almond-flour-halwa", "besan-halwa"]
  },
  "gulab-jamun": {
    slug: "gulab-jamun",
    name: "Traditional Soft Gulab Jamun with Saffron Monkaura Syrup",
    category: "Indian desserts",
    prepTime: "20 mins",
    cookTime: "25 mins",
    isoPrepTime: "PT20M",
    isoCookTime: "PT25M",
    servings: "12 pieces",
    originalSugarGrams: 200,
    monkauraGrams: 200,
    originalCalories: 800,
    monkauraCalories: 0,
    caloriesPerServing: "70 kcal per piece (vs 150 kcal traditional)",
    monkauraUsage: "1 cup (192g) MONKAURA replaces 1 cup sugar 1:1 to create the fragrant cardamom-saffron soaking chasni.",
    storage: "Store in an airtight container at room temperature for 2 days or refrigerated for up to 5 days. Warm slightly before serving.",
    ingredients: [
      "1 cup Mawa / Khoya (grated fine)",
      "1/4 cup Fresh paneer (mashed completely smooth)",
      "2 tbsp All-purpose flour (maida) or fine almond flour",
      "1/4 tsp Green cardamom powder",
      "Pinch of baking soda",
      "Desi ghee or neutral oil for deep frying",
      "1 cup MONKAURA Monk Fruit, Erythritol Sweetener",
      "1 cup Water",
      "4 Green cardamom pods (crushed)",
      "Few strands of Saffron (Kesar)",
      "1/2 tsp Pure rose water"
    ],
    steps: [
      "In a wide flat plate, knead together the grated khoya and paneer using the heels of your palms for 5-6 minutes until completely soft and lump-free.",
      "Add flour, a tiny pinch of baking soda, and cardamom powder. Knead gently to form a soft, pliable dough. Do not overwork.",
      "Pinch small portions and roll into 12 small crack-free smooth spheres.",
      "Heat ghee in a heavy kadai on low flame. Gently slide in the dough balls. Fry on low heat, swirling the warm ghee gently with a slotted spoon so the jamuns rotate continuously and brown evenly to a deep golden mahogany hue.",
      "For the sugar-free syrup: In a separate saucepan, combine 1 cup water, 1 cup MONKAURA sweetener, crushed cardamom pods, and saffron. Bring to a boil for 4-5 minutes until the sweetener is completely dissolved. Turn off flame and stir in rose water.",
      "Gently transfer the warm fried jamuns directly into the warm MONKAURA syrup. Allow them to soak for at least 2 hours. The jamuns absorb the syrup thoroughly while staying soft and spongy."
    ],
    chefTip: "Ensure both the fried jamuns and the MONKAURA syrup are warm (not scalding hot) when combined. This allows optimal syrup absorption to the core.",
    imageUrl: "https://lh3.googleusercontent.com/d/1NCOTfy2-oeALS_3S58oFXlbt4kKA8kZG",
    faqs: [
      {
        q: "Does the MONKAURA syrup crystallize when cooled?",
        a: "If kept at room temperature for 1-2 days, the syrup remains liquid. If refrigerated, gentle heating in a microwave or saucepan for 30 seconds dissolves any surface crystal formation instantly."
      }
    ],
    relatedSlugs: ["kheer", "besan-halwa", "almond-flour-halwa"]
  },
  "almond-flour-halwa": {
    slug: "almond-flour-halwa",
    name: "Keto Badam Halwa (Almond Flour Halwa) with Monk Fruit",
    category: "Halwa",
    prepTime: "5 mins",
    cookTime: "15 mins",
    isoPrepTime: "PT5M",
    isoCookTime: "PT15M",
    servings: "4 servings",
    originalSugarGrams: 100,
    monkauraGrams: 100,
    originalCalories: 400,
    monkauraCalories: 0,
    caloriesPerServing: "185 kcal (rich in healthy fats, 0g added sugar)",
    monkauraUsage: "1/2 cup (96g) MONKAURA replaces 1/2 cup sugar 1:1.",
    storage: "Keep in an airtight container in the refrigerator for up to 5 days. Reheat with 1 teaspoon warm ghee before serving.",
    ingredients: [
      "1 cup Blanched almond flour (superfine)",
      "3 tbsp Pure desi ghee",
      "1/2 cup Warm milk or unsweetened almond milk",
      "1/2 cup MONKAURA Monk Fruit, Erythritol Sweetener",
      "1/4 tsp Cardamom powder",
      "Pinch of saffron strands",
      "1 tbsp Slivered almonds for garnish"
    ],
    steps: [
      "Heat desi ghee in a heavy non-stick kadai on medium-low flame.",
      "Add the blanched almond flour and roast continuously for 5-7 minutes until aromatic, slightly darkened, and nutty.",
      "Gradually pour in warm milk while stirring vigorously with a spatula to prevent any lumps.",
      "Add saffron strands and cardamom powder. Stir continuously until the mixture thickens into a cohesive halwa.",
      "Add MONKAURA sweetener and cook on low flame for another 2-3 minutes until the ghee starts releasing from the sides and the halwa takes on a glossy sheen.",
      "Transfer into serving bowls, garnish with slivered almonds, and serve warm."
    ],
    chefTip: "Monkaura provides a rich, glossy sheen without turning sticky or burnt on low-medium cooking heat.",
    imageUrl: "/assets/images/almond-flour-halwa.jpg",
    faqs: [
      {
        q: "Is this suitable for a ketogenic or low-carb lifestyle?",
        a: "Yes. Blanched almond flour provides protein and healthy fats, while MONKAURA contributes 0g net carbs, making it an ideal keto dessert."
      }
    ],
    relatedSlugs: ["besan-halwa", "kheer", "keto-almond-cookies"]
  },
  "besan-halwa": {
    slug: "besan-halwa",
    name: "Fragrant Besan Halwa (Gram Flour Halwa) with Monk Fruit",
    category: "Halwa",
    prepTime: "5 mins",
    cookTime: "20 mins",
    isoPrepTime: "PT5M",
    isoCookTime: "PT20M",
    servings: "4 servings",
    originalSugarGrams: 100,
    monkauraGrams: 100,
    originalCalories: 400,
    monkauraCalories: 0,
    caloriesPerServing: "165 kcal (0 added sugar)",
    monkauraUsage: "1/2 cup (96g) MONKAURA replaces 1/2 cup table sugar 1:1.",
    storage: "Store refrigerated in an airtight glass container for up to 4 days. Warm gently before eating.",
    ingredients: [
      "1 cup Gram flour (Besan / chickpea flour)",
      "1/3 cup Pure desi ghee",
      "1.5 cups Warm milk or water",
      "1/2 cup MONKAURA Monk Fruit, Erythritol Sweetener",
      "1/2 tsp Freshly ground green cardamom powder",
      "1 tbsp Golden roasted cashews and almonds"
    ],
    steps: [
      "Melt desi ghee in a heavy-bottomed kadai on low heat. Add gram flour (besan) through a sieve to eliminate lumps.",
      "Roast the besan patiently on low flame for 12-15 minutes, stirring continuously, until the raw chickpea smell disappears and turns deep golden and fragrant.",
      "Carefully and slowly pour in warm milk in batches, whisking vigorously to avoid lump formation. The mixture will froth and absorb the liquid rapidly.",
      "Stir in green cardamom powder and cook for 2 minutes until the mixture leaves the sides of the pan.",
      "Fold in MONKAURA sweetener and roasted nuts. Stir on low heat for 1-2 minutes until completely smooth, glossy, and meltingly soft.",
      "Remove from heat and serve warm."
    ],
    chefTip: "Roasting the besan patiently on low heat is crucial. Never turn up the heat, as besan burns easily.",
    imageUrl: "/assets/images/besan-halwa.jpg",
    faqs: [
      {
        q: "Does MONKAURA dissolve properly in thick halwa?",
        a: "Yes. The fine crystal structure of MONKAURA melts easily in warm roasted halwa within 60 seconds."
      }
    ],
    relatedSlugs: ["almond-flour-halwa", "gulab-jamun", "kheer"]
  },
  "keto-almond-cookies": {
    slug: "keto-almond-cookies",
    name: "Crispy Almond Nankhatai (Keto Almond Cookies) with Monk Fruit",
    category: "Cookies",
    prepTime: "15 mins",
    cookTime: "15 mins",
    isoPrepTime: "PT15M",
    isoCookTime: "PT15M",
    servings: "12 cookies",
    originalSugarGrams: 80,
    monkauraGrams: 80,
    originalCalories: 320,
    monkauraCalories: 0,
    caloriesPerServing: "75 kcal per cookie (0 added sugar)",
    monkauraUsage: "1/3 cup (64g) powdered MONKAURA replaces 1/3 cup powdered sugar 1:1.",
    storage: "Store in an airtight cookie jar with a moisture packet at room temperature for up to 10 days.",
    ingredients: [
      "1.5 cups Superfine blanched almond flour",
      "1/3 cup MONKAURA Monk Fruit, Erythritol Sweetener (pulsed in a blender to fine powder)",
      "1/4 cup Melted desi ghee or coconut oil",
      "1/2 tsp Baking powder",
      "1/2 tsp Cardamom powder",
      "Pinch of sea salt",
      "12 Whole or halved pistachios for pressing on top"
    ],
    steps: [
      "Preheat your oven to 160°C (320°F) and line a baking tray with parchment paper.",
      "In a medium bowl, whisk together the almond flour, powdered MONKAURA sweetener, baking powder, cardamom powder, and pinch of sea salt.",
      "Add melted desi ghee and mix with a spatula until a soft, pliable dough forms. If it feels too crumbly, add 1 teaspoon additional ghee.",
      "Divide the dough into 12 equal portions and roll them into smooth balls. Place on the prepared baking sheet with 2 inches between them.",
      "Lightly press each ball down with your thumb and press a pistachio into the center.",
      "Bake for 12 to 14 minutes until the bottoms and edges are light golden brown. Do not over-bake.",
      "Remove from oven. The cookies will be soft right out of the oven. Allow them to cool completely on the tray for 20 minutes to firm up into crispy, buttery nankhatai cookies."
    ],
    chefTip: "Pulsing MONKAURA in a small spice grinder or blender for 5 seconds creates confectioner-style fine powder, giving cookies a tender melt-in-the-mouth crumb.",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&auto=format&fit=crop&q=80",
    faqs: [
      {
        q: "Why are the cookies soft when taken out of the oven?",
        a: "Erythritol and almond flour cookies firm up as they cool on the baking sheet. Give them 20 minutes to reach maximum crispiness."
      }
    ],
    relatedSlugs: ["sponge-cake", "masala-chai", "filter-coffee"]
  },
  "sponge-cake": {
    slug: "sponge-cake",
    name: "Classic Vanilla Tea Cake (Sponge Cake) with Monk Fruit",
    category: "Cakes",
    prepTime: "15 mins",
    cookTime: "30 mins",
    isoPrepTime: "PT15M",
    isoCookTime: "PT30M",
    servings: "8 slices",
    originalSugarGrams: 150,
    monkauraGrams: 150,
    originalCalories: 600,
    monkauraCalories: 0,
    caloriesPerServing: "130 kcal per slice (0 added sugar)",
    monkauraUsage: "3/4 cup (144g) MONKAURA replaces 3/4 cup granulated sugar 1:1.",
    storage: "Wrap well and store in an airtight container at room temperature for 3 days or refrigerated for up to 6 days.",
    ingredients: [
      "1.5 cups All-purpose flour (or gluten-free 1:1 baking flour)",
      "3/4 cup MONKAURA Monk Fruit, Erythritol Sweetener",
      "1/2 cup Unsalted butter (softened at room temperature) or cold-pressed oil",
      "3/4 cup Milk at room temperature",
      "1.5 tsp Baking powder",
      "1 tsp Pure vanilla extract",
      "1/4 tsp Salt"
    ],
    steps: [
      "Preheat your oven to 175°C (350°F). Grease and line an 8-inch round or loaf cake pan with parchment paper.",
      "In a large mixing bowl, beat softened butter and MONKAURA sweetener together with a hand mixer or whisk for 3 minutes until light and creamy.",
      "Add room-temperature milk and pure vanilla extract, beating until combined.",
      "In a separate bowl, sift flour, baking powder, and salt.",
      "Fold the dry ingredients gently into the wet mixture using a spatula until just combined. Avoid overmixing.",
      "Pour the batter into the prepared cake tin and smooth the top with a spatula.",
      "Bake for 28-32 minutes until a wooden toothpick inserted into the center emerges clean and dry.",
      "Cool in the pan for 10 minutes, then invert onto a wire cooling rack to cool completely before slicing."
    ],
    chefTip: "Because MONKAURA contains zero added sucrose, baking at 175°C yields a light golden crust. Pair a warm slice with evening masala chai.",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    faqs: [
      {
        q: "Can I replace refined flour with almond flour in this cake?",
        a: "Yes! Use 1.75 cups superfine almond flour and 3 eggs for a keto version of this vanilla sponge cake."
      }
    ],
    relatedSlugs: ["keto-almond-cookies", "cold-coffee", "masala-chai"]
  }
};

export default function RecipeDetailPage({ onAddToCart }: RecipeDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? EXTENDED_RECIPES[slug] : null;

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  const defaultProduct = PRODUCTS[0];
  const relatedRecipes = recipe.relatedSlugs
    .map(s => EXTENDED_RECIPES[s])
    .filter(Boolean);

  const metaImageUrl = recipe.imageUrl.startsWith("http")
    ? recipe.imageUrl
    : `https://monkaura.in${recipe.imageUrl}`;

  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>{recipe.name} | MONKAURA Recipes</title>
        <meta
          name="description"
          content={`Make ${recipe.name}: 1:1 sugar replacement with MONKAURA monk fruit sweetener. 0g added sugar, saves ${recipe.originalCalories} kcal.`}
        />
        <meta
          name="keywords"
          content={`${recipe.slug} monk fruit recipe, sugar free ${recipe.slug}, zero sugar indian recipes, monkaura recipes`}
        />
        <link rel="canonical" href={`https://monkaura.in/recipes/${recipe.slug}`} />
        <meta property="og:title" content={`${recipe.name} | MONKAURA`} />
        <meta
          property="og:description"
          content={`Zero added sugar ${recipe.name} prepared with MONKAURA 1:1 Monk Fruit, Erythritol sweetener.`}
        />
        <meta property="og:url" content={`https://monkaura.in/recipes/${recipe.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${recipe.name} | MONKAURA`} />
        <meta
          name="twitter:description"
          content={`Healthy 1:1 monk fruit recipe for ${recipe.name}. Zero added sugar.`}
        />
        <meta name="twitter:image" content={metaImageUrl} />

        {/* Recipe Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": recipe.name,
            "image": [metaImageUrl],
            "author": {
              "@type": "Organization",
              "name": "MONKAURA",
              "url": "https://monkaura.in"
            },
            "datePublished": "2026-09-24",
            "description": `Authentic recipe for ${recipe.name} made with MONKAURA Monk Fruit, Erythritol natural sweetener. 1:1 sugar replacement with 0g added sugar.`,
            "prepTime": recipe.isoPrepTime,
            "cookTime": recipe.isoCookTime,
            "recipeYield": recipe.servings,
            "recipeCategory": recipe.category,
            "recipeCuisine": "Indian",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": recipe.caloriesPerServing,
              "sugarContent": "0g added sugar",
              "servingSize": "1 serving"
            },
            "recipeIngredient": recipe.ingredients,
            "recipeInstructions": recipe.steps.map((step, idx) => ({
              "@type": "HowToStep",
              "position": idx + 1,
              "text": step
            }))
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Recipes", "item": "https://monkaura.in/recipes" },
              { "@type": "ListItem", "position": 3, "name": recipe.name, "item": `https://monkaura.in/recipes/${recipe.slug}` }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Recipes", url: "/recipes" },
          { name: recipe.name, url: `/recipes/${recipe.slug}` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-12">
        {/* Header Block */}
        <header className="space-y-4 border-b border-gray-200/80 pb-8">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Traditional Indian Recipes · {recipe.category}
          </p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            {recipe.name}
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/75 font-light leading-relaxed max-w-2xl">
            Crafted with MONKAURA Monk Fruit, Erythritol blend. Replaces {recipe.originalSugarGrams}g of refined sugar 1:1 with zero added sugar and clean natural sweetness.
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 text-xs text-brand-dark/70 font-light">
            <span>Prep Time: <strong className="font-semibold text-brand-dark">{recipe.prepTime}</strong></span>
            <span className="text-gray-300 font-sans" aria-hidden="true">·</span>
            <span>Cook Time: <strong className="font-semibold text-brand-dark">{recipe.cookTime}</strong></span>
            <span className="text-gray-300 font-sans" aria-hidden="true">·</span>
            <span>Yield: <strong className="font-semibold text-brand-dark">{recipe.servings}</strong></span>
          </div>
        </header>

        {/* Hero Recipe Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xs border border-gray-100 bg-white">
          <img
            src={recipe.imageUrl}
            alt={`${recipe.name} prepared with MONKAURA Monk Fruit Sweetener`}
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Calorie & Sugar Savings Card */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-2xs space-y-4">
          <p className="text-xs uppercase tracking-wider text-brand-green font-semibold">
            Nutritional Comparison Profile
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
            <div>
              <span className="text-2xl font-serif font-bold text-brand-dark block">{recipe.caloriesPerServing}</span>
              <span className="text-xs text-brand-dark/60 font-light mt-0.5 block">Calories per serving</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-brand-green block">0g</span>
              <span className="text-xs text-brand-dark/60 font-light mt-0.5 block">Added Cane Sugar</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-brand-green block">1:1</span>
              <span className="text-xs text-brand-dark/60 font-light mt-0.5 block">Direct Sugar Replacement</span>
            </div>
          </div>
          <div className="pt-3 border-t border-gray-100 text-xs text-brand-dark/75 font-light">
            <strong className="font-semibold text-brand-dark">How to measure: </strong>
            <span>{recipe.monkauraUsage}</span>
          </div>
        </div>

        {/* Ingredients & Method Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Ingredients Column */}
          <section className="md:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-gray-100 shadow-2xs space-y-4">
            <h2 className="font-serif font-bold text-lg text-brand-dark">Ingredients</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-dark/80 font-light">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 pb-2 border-b border-gray-50 last:border-0 last:pb-0">
                  <span className="text-brand-green font-bold">·</span>
                  <span className={ing.includes("MONKAURA") ? "font-semibold text-brand-green" : ""}>
                    {ing}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps Column */}
          <section className="md:col-span-7 bg-white p-6 sm:p-7 rounded-xl border border-gray-100 shadow-2xs space-y-4">
            <h2 className="font-serif font-bold text-lg text-brand-dark">Step-by-Step Method</h2>
            <ol className="space-y-4">
              {recipe.steps.map((st, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-brand-dark/80 font-light leading-relaxed">
                  <span className="font-serif font-bold text-brand-green text-sm shrink-0 mt-0.5">
                    {i + 1}.
                  </span>
                  <span>{st}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Chef Tip & Storage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-2xs space-y-2">
            <span className="text-xs uppercase tracking-wider text-brand-green font-semibold block">
              Culinary Tip
            </span>
            <p className="text-xs sm:text-sm text-brand-dark/80 font-light leading-relaxed">
              {recipe.chefTip}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-2xs space-y-2">
            <span className="text-xs uppercase tracking-wider text-brand-green font-semibold block">
              Storage Advice
            </span>
            <p className="text-xs sm:text-sm text-brand-dark/80 font-light leading-relaxed">
              {recipe.storage}
            </p>
          </div>
        </div>

        {/* Recipe FAQs */}
        {recipe.faqs && recipe.faqs.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-2xs space-y-4">
            <h2 className="font-serif font-bold text-lg text-brand-dark">Recipe Notes & Questions</h2>
            <div className="space-y-4 pt-1 divide-y divide-gray-100">
              {recipe.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-1 pt-3 first:pt-0">
                  <h3 className="font-semibold text-xs sm:text-sm text-brand-dark">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="space-y-5 pt-4 border-t border-gray-200/80">
            <div className="flex justify-between items-baseline">
              <h2 className="font-serif font-bold text-xl text-brand-dark">More Indian Desserts</h2>
              <Link to="/recipes" className="text-xs font-semibold text-brand-green hover:underline">
                View All Recipes →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedRecipes.map(rel => (
                <Link
                  key={rel.slug}
                  to={`/recipes/${rel.slug}`}
                  className="group flex flex-col space-y-2"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                    <img
                      src={rel.imageUrl}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-green font-medium">
                      {rel.category}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-brand-dark group-hover:text-brand-green transition-colors line-clamp-2">
                      {rel.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Buy Sweetener Callout Box */}
        <section className="bg-brand-mint-light/80 p-6 sm:p-8 rounded-3xl border border-brand-green/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-bold text-brand-green uppercase tracking-widest">Make This Recipe at Home</span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-brand-dark">
              Order MONKAURA 100g Trial or 200g Everyday Pack
            </h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 font-light max-w-lg">
              1:1 sugar replacement. Non-GMO Monk Fruit, Erythritol extract. No fillers, 0g added sugar.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/products/monkaura-100g"
              className="px-5 py-3 bg-white border border-brand-green/20 text-brand-green font-bold text-xs rounded-xl shadow-xs hover:bg-brand-mint-light transition-all"
            >
              100g Trial (₹149)
            </Link>
            <Link
              to="/products/monkaura-200g"
              className="px-5 py-3 bg-brand-green text-white font-bold text-xs rounded-xl shadow-md hover:bg-brand-green-light transition-all flex items-center gap-1.5"
            >
              <ShoppingBag size={14} />
              <span>200g Everyday (₹298)</span>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
