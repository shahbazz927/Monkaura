import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";

export default function EducationalPreview() {
  const guides = [
    {
      title: "Monk Fruit Sweetener in India",
      tag: "Authority Guide",
      description: "Everything you need to know about monk fruit availability, FSSAI regulations, taste profile, and culinary uses in Indian households.",
      url: "/monk-fruit-sweetener-india"
    },
    {
      title: "Allulose vs. Erythritol",
      tag: "Sweetener Science",
      description: "A neutral, scientific comparison between rare sugars (Allulose) and fermented polyols (Erythritol): chemistry, browning, and metabolic differences.",
      url: "/allulose-story"
    },
    {
      title: "Monk Fruit vs. Stevia",
      tag: "Taste Comparison",
      description: "Why stevia often leaves a lingering bitter licorice aftertaste, while monk fruit mogrosides provide clean, rounded sweetness in hot tea.",
      url: "/monk-fruit-vs-stevia"
    },
    {
      title: "Monk Fruit vs. Sugar",
      tag: "Nutrition & Health",
      description: "How table sugar (sucrose) compares to MONKAURA in calorie count, glycemic response (GI 65 vs GI 0), and dental enamel friendliness.",
      url: "/monk-fruit-vs-sugar"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Educational Library
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
            Explore the Science of Sweeteners
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light leading-relaxed">
            Unbiased research and ingredient comparisons to help you make informed decisions for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((g, i) => (
            <Link
              key={i}
              to={g.url}
              className="group bg-brand-cream/30 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:border-brand-green/30 hover:bg-brand-cream/60 transition-all space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-mint/60 px-2 py-0.5 rounded-full inline-block">
                  {g.tag}
                </span>
                <h3 className="font-serif font-bold text-lg text-brand-dark group-hover:text-brand-green transition-colors leading-snug">
                  {g.title}
                </h3>
                <p className="text-xs text-brand-dark/70 font-light leading-relaxed">
                  {g.description}
                </p>
              </div>

              <div className="pt-2 text-xs font-semibold text-brand-green flex items-center gap-1">
                <span>Read Guide</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
