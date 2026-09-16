import { Product, DessertRecipe } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "pouch-100g",
    name: "Monkaura 100g Trial Pack",
    subtitle: "Try the sweetness. Make the switch.",
    description: "Curious about Allulose? Start small. Try Monkaura in your everyday tea, coffee, cooking and baking before committing to a larger pack.",
    price: 149,
    originalPrice: 189,
    weight: "100g",
    image: "https://lh3.googleusercontent.com/d/143BnzkxizdMZyOnoSYszI1Y60LvYaVJ-",
    images: [
      "https://lh3.googleusercontent.com/d/143BnzkxizdMZyOnoSYszI1Y60LvYaVJ-",
      "https://lh3.googleusercontent.com/d/1suD2ux9Ua3YPiS8XSJ4HapGQ5nU9GDko",
      "https://lh3.googleusercontent.com/d/10IMxezUHvZMMEZAjQ9gQrRnGZrzKUojg",
      "https://lh3.googleusercontent.com/d/1MktL8WR2I36WIBNLmbfNLsHW-8tUbpiG",
      "https://lh3.googleusercontent.com/d/1MD8pmRsKpyiN3CAiJz_S8GTnN_dLQfIs",
      "https://lh3.googleusercontent.com/d/186Nc-GJ4C9ZT6KsAUhELSdaDPwBBl6AM"
    ],
    tagline: "100g Trial Pack — Allulose + Monk Fruit, 1:1 sugar replacement",
    benefits: [
      "Allulose + Monk Fruit",
      "Sugar-like taste",
      "1:1 sugar replacement",
      "Great for beverages, cooking & baking",
      "100g Trial Pack"
    ],
    features: [
      { title: "Allulose + Monk Fruit", description: "Made with premium Allulose and Monk Fruit for a smooth, sugar-like sweetness." },
      { title: "1:1 Replacement", description: "Use it 1:1 in place of sugar in tea, coffee, cooking and baking." },
      { title: "Everyday Use", description: "Designed for everyday beverages, cooking and baking with a clean taste." }
    ],
    nutritionFacts: {
      servingSize: "1 tsp (4g)",
      addedSugar: "0g",
      totalFat: "0g",
      sodium: "0mg",
      totalCarb: "0g",
      energy: "0kcal",
      protein: "0g"
    }
  },
  {
    id: "pouch",
    name: "Monkaura 200g",
    subtitle: "Try the sweetness. Make the switch.",
    description: "Curious about Allulose? Start small. Try Monkaura in your everyday tea, coffee, cooking and baking before committing to a larger pack.",
    price: 298,
    originalPrice: 378,
    weight: "200g",
    image: "https://lh3.googleusercontent.com/d/17T6zceFfwh0cj-xaFeNoMJ701gWCBpFU",
    images: [
      "https://lh3.googleusercontent.com/d/17T6zceFfwh0cj-xaFeNoMJ701gWCBpFU",
      "https://lh3.googleusercontent.com/d/1nC47WZHdCjnJL8L0GQTphrXwaq94EGdQ",
      "https://lh3.googleusercontent.com/d/1ANEydBa2VuPFLmR9hY_BCovWknExYqxU"
    ],
    tagline: "200g — Allulose + Monk Fruit, 1:1 sugar replacement",
    benefits: [
      "Allulose + Monk Fruit",
      "Sugar-like taste",
      "1:1 sugar replacement",
      "Great for beverages, cooking & baking",
      "200g Pack"
    ],
    features: [
      { title: "Allulose + Monk Fruit", description: "Made with premium Allulose and Monk Fruit for a smooth, sugar-like sweetness." },
      { title: "1:1 Replacement", description: "Use it 1:1 in place of sugar in tea, coffee, cooking and baking." },
      { title: "Everyday Use", description: "Designed for everyday beverages, cooking and baking with a clean taste." }
    ],
    nutritionFacts: {
      servingSize: "1 tsp (4g)",
      addedSugar: "0g",
      totalFat: "0g",
      sodium: "0mg",
      totalCarb: "0g",
      energy: "0kcal",
      protein: "0g"
    }
  }
];

export const DESSERT_RECIPES: DessertRecipe[] = [
  {
    name: "Gulab Jamun",
    originalSugarGrams: 200,
    monkauraGrams: 200,
    originalCalories: 800,
    monkauraCalories: 0,
    steps: [
      "Prepare dough using khoya, paneer, and a touch of all-purpose flour.",
      "Shape into small smooth balls without cracks.",
      "Fry deep in ghee on low-medium heat until golden-dark brown.",
      "Create a sugar-free syrup by dissolving Monkaura 1:1 with water, boiling it with crushed cardamom and saffron.",
      "Soak fried jamuns in warm Monkaura syrup for 2 hours. Monkaura syrup absorbs beautifully and browns naturally!"
    ],
    imageUrl: "https://lh3.googleusercontent.com/d/1NCOTfy2-oeALS_3S58oFXlbt4kKA8kZG"
  },
  {
    name: "Kheer (Rice Pudding)",
    originalSugarGrams: 150,
    monkauraGrams: 150,
    originalCalories: 600,
    monkauraCalories: 0,
    steps: [
      "Simmer full cream milk in a heavy-bottomed pan until it reduces to half.",
      "Add pre-soaked Basmati rice and cook on low heat until the rice is completely soft.",
      "Stir in cardamom powder, saffron strands, and chopped pistachios/almonds.",
      "Turn off heat and stir in Monkaura (1:1 substitution). It dissolves instantly with no metallic or cooling aftertaste!"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517244683807-7ae58f352a16?w=600&auto=format&fit=crop&q=80"
  },
  {
    name: "Almond Flour Halwa",
    originalSugarGrams: 100,
    monkauraGrams: 100,
    originalCalories: 400,
    monkauraCalories: 0,
    steps: [
      "Heat ghee in a pan and roast badam (almond) flour until aromatic and light golden.",
      "Pour in warm water or milk slowly while stirring continuously to prevent lumps.",
      "Add cardamom powder and saffron.",
      "Add Monkaura 1:1. Cook for another 2-3 minutes until the ghee begins to separate from the sides of the pan. Notice the perfect glossy caramelization!"
    ],
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80"
  }
];
