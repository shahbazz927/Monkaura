import { Product, DessertRecipe } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "jar",
    name: "Premium Glass Jar",
    subtitle: "Elegant • Reusable • Eco-Friendly",
    description: "Sourced from the finest monk fruit and pure Allulose. Packaged in a beautiful premium glass jar with an organic wooden lid, complete with premium jute wrapping. Ideal for your kitchen counter, and easily reusable.",
    price: 745,
    originalPrice: 945,
    weight: "500g",
    image: "https://lh3.googleusercontent.com/d/1AAOaAQzQ7xJWEQeYPUjAtO4tjUn-oPih",
    images: [
      "https://lh3.googleusercontent.com/d/1AAOaAQzQ7xJWEQeYPUjAtO4tjUn-oPih",
      "https://lh3.googleusercontent.com/d/1ClhI8Mfa8hGBHqOZ57xeuEz5CoI_Vjuq",
      "https://lh3.googleusercontent.com/d/1FWbPXWibrysmQR9MuxtjA8jsywB-2xzx",
      "https://lh3.googleusercontent.com/d/15ZEgY07a_k8cAl9no3QfaadMVxXOJ2vm"
    ],
    tagline: "Premium wooden lid jar - perfect for elegant kitchens",
    benefits: ["100% Natural Sweetness", "Dissolves Perfectly", "Perfect for Baking", "Zero Bitter Aftertaste"],
    features: [
      { title: "Bakes like Sugar", description: "Caramelizes and browns beautifully under heat, delivering authentic sugar-like behavior." },
      { title: "Eco-Friendly Jar", description: "Heavy-duty reusable glass jar with an elegant wood cap, ready to be upcycled." },
      { title: "Zero Aftertaste", description: "Pure monk fruit and premium Allulose blend delivers clean sweetness without metallic bite." }
    ],
    nutritionFacts: {
      servingSize: "1 tsp (4g)",
      addedSugar: "0g",
      totalFat: "0g",
      sodium: "0mg",
      totalCarb: "0g",
      energy: "0kcal",
      protein: "0g"
    },
    outOfStock: true
  },
  {
    id: "pouch",
    name: "Convenient Stand-up Pouch",
    subtitle: "Resealable • Portable • Hygienic",
    description: "Designed for active modern lifestyles. This resealable high-barrier stand-up pouch keeps your Monkaura sweetener fresh, dry, and easily scoopable. Easy to store in compact pantries or carry with you on the go.",
    price: 149,
    originalPrice: 189,
    weight: "100g",
    image: "https://lh3.googleusercontent.com/d/1suD2ux9Ua3YPiS8XSJ4HapGQ5nU9GDko",
    images: [
      "https://lh3.googleusercontent.com/d/1suD2ux9Ua3YPiS8XSJ4HapGQ5nU9GDko",
      "https://lh3.googleusercontent.com/d/143BnzkxizdMZyOnoSYszI1Y60LvYaVJ-",
      "https://lh3.googleusercontent.com/d/10IMxezUHvZMMEZAjQ9gQrRnGZrzKUojg",
      "https://lh3.googleusercontent.com/d/1MktL8WR2I36WIBNLmbfNLsHW-8tUbpiG",
      "https://lh3.googleusercontent.com/d/1MD8pmRsKpyiN3CAiJz_S8GTnN_dLQfIs",
      "https://lh3.googleusercontent.com/d/186Nc-GJ4C9ZT6KsAUhELSdaDPwBBl6AM"
    ],
    tagline: "Resealable premium pouch - easy to pour and carry",
    benefits: ["Easy Pour Lock", "High-barrier protection", "Highly Portable", "Saves Pantry Space"],
    features: [
      { title: "Double Seal Guard", description: "Locks moisture out and preserves sweetness potency perfectly." },
      { title: "Lightweight Design", description: "Flexible food-safe packaging with a low carbon footprint." },
      { title: "Keto & Diabetic Safe", description: "Zero glycemic impact, perfect for daily tea, coffee, and shakes." }
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
    id: "box",
    name: "Value Pack Retail Box",
    subtitle: "Protective • Premium • Gift-Ready",
    description: "The classic Monkaura retail box. Safely stores the sweetener inside a premium, food-safe resealable inner liner to lock in freshness. Presented in an elegant dark green embossed box, making it a perfect healthy gift for loved ones.",
    price: 1490,
    originalPrice: 1890,
    weight: "1Kg",
    outOfStock: true,
    image: "https://lh3.googleusercontent.com/d/1twjmmqJAFRmR9oRdm7sqV7UPhrENavS2",
    images: [
      "https://lh3.googleusercontent.com/d/1twjmmqJAFRmR9oRdm7sqV7UPhrENavS2",
      "https://lh3.googleusercontent.com/d/1xQl211PZDSiB2czByvFA8BwSYoWkuzl4",
      "https://lh3.googleusercontent.com/d/1vISsunPhjn_ZzSvgQbVgwmSScpM5vvyU"
    ],
    tagline: "Value cardboard retail box with inner lining",
    benefits: ["Resealable Inner Liner", "Elegant Embossed Gifting", "Double Protective Layer", "Great Value Pack"],
    features: [
      { title: "Premium Gifting", description: "Clean, high-end packaging that makes health-conscious gifting easy." },
      { title: "Lined Freshness", description: "Double-walled protection locks freshness for up to 24 months." },
      { title: "100% Raw Ingredients", description: "Sugar-like granularity that measures 1:1 like real sugar in all recipes." }
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
