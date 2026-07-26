export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  weight: string;
  image: string;
  images?: string[];
  tagline: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  nutritionFacts: {
    servingSize: string;
    addedSugar: string;
    totalFat: string;
    sodium: string;
    totalCarb: string;
    energy: string;
    protein: string;
  };
  outOfStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DessertRecipe {
  name: string;
  originalSugarGrams: number;
  monkauraGrams: number;
  originalCalories: number;
  monkauraCalories: number;
  steps: string[];
  imageUrl: string;
}
