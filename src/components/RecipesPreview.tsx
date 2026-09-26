import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

export default function RecipesPreview() {
  const featuredRecipes = [
    {
      slug: "masala-chai",
      title: "Classic Masala Chai",
      category: "Daily Beverage",
      time: "10 mins",
      description: "Infused with fresh ginger, cardamom, and Assam CTC leaves. 0g added cane sugar with authentic cutting chai taste.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop&q=80"
    },
    {
      slug: "kheer",
      title: "Saffron & Rice Kheer",
      category: "Traditional Sweets",
      time: "45 mins",
      description: "Slow-simmered in full-cream milk with basmati rice, fragrant saffron strands, and roasted nuts. Rich and creamy.",
      image: "/assets/images/saffron-rice-kheer.jpg"
    },
    {
      slug: "almond-flour-halwa",
      title: "Keto Badam Halwa",
      category: "Festive Desserts",
      time: "20 mins",
      description: "Roasted blanched almond flour in pure desi ghee. Melts in your mouth with zero sugar guilt and zero blood glucose spikes.",
      image: "/assets/images/almond-flour-halwa.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-cream/40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
              Made with MONKAURA
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
              Tested Indian Kitchen Recipes
            </h2>
            <p className="text-brand-dark/70 text-sm font-light">
              Authentic Indian desserts and beverages made with 1:1 sugar replacement.
            </p>
          </div>

          <Link
            to="/recipes"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green hover:underline underline-offset-4 shrink-0"
          >
            <span>View All 10+ Recipes</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRecipes.map((r) => (
            <Link
              key={r.slug}
              to={`/recipes/${r.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-2xs hover:border-brand-green/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={r.image}
                    alt={`${r.title} prepared with MONKAURA monk fruit sweetener`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-brand-dark/50">
                    <span className="text-brand-green font-semibold uppercase tracking-wider">{r.category}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {r.time}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-brand-dark group-hover:text-brand-green transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-brand-dark/70 font-light leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 text-xs font-semibold text-brand-green flex items-center gap-1">
                <span>View Full Recipe</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
