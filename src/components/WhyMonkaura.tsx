import React from "react";
import { Sparkles, Scale, Flame, Heart } from "lucide-react";

export default function WhyMonkaura() {
  const benefits = [
    {
      icon: <Heart size={22} className="text-brand-green" />,
      title: "0g Added Sugar & 0 Calories",
      description: "Naturally non-glycemic formulation. Provides clean sweetness without elevating blood glucose levels or adding unwanted calories."
    },
    {
      icon: <Sparkles size={22} className="text-brand-green" />,
      title: "Clean Sugar-Like Sweetness",
      description: "Sweetened by natural monk fruit mogrosides. Completely free of the bitter metallic or licorice aftertaste common in stevia."
    },
    {
      icon: <Scale size={22} className="text-brand-green" />,
      title: "1:1 Spoon-for-Spoon Measure",
      description: "Use exactly 1 teaspoon of MONKAURA for 1 teaspoon of sugar. No awkward dosage droppers, micro-scoops, or conversion tables."
    },
    {
      icon: <Flame size={22} className="text-brand-green" />,
      title: "Heat-Stable up to 200°C",
      description: "Retains its pure sweetness during rolling boils in morning chai, slow simmering in kheer, and home baking."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-cream/40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Product Benefits
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
            Why Switch to MONKAURA?
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light leading-relaxed">
            Formulated specifically for Indian kitchen habits, hot morning beverages, and traditional cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b, i) => (
            <div 
              key={i}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-2xs space-y-3 hover:border-brand-green/30 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-mint/60 flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
