import React from "react";
import { Coffee, GlassWater, Utensils, Cake, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function HowToUseSection() {
  const useCases = [
    {
      icon: <Coffee size={20} className="text-brand-green" />,
      title: "Daily Masala Chai & Filter Coffee",
      measure: "1 tsp MONKAURA = 1 tsp Sugar",
      description: "Stir into hot tea or boiling milk. Dissolves within seconds without cooling your drink or curdling milk proteins."
    },
    {
      icon: <GlassWater size={20} className="text-brand-green" />,
      title: "Shikanji, Nimbu Pani & Cold Coffee",
      measure: "1 tbsp MONKAURA = 1 tbsp Sugar",
      description: "Pre-dissolve in 2 tbsp warm water before adding ice, or blend directly into iced coffee for thick, frothy sweetness."
    },
    {
      icon: <Utensils size={20} className="text-brand-green" />,
      title: "Traditional Indian Sweets",
      measure: "1/2 cup MONKAURA = 1/2 cup Sugar",
      description: "Cooks into rich rice kheer, badam halwa, and sweet cardamom gravies without caramelizing into hard crystals."
    },
    {
      icon: <Cake size={20} className="text-brand-green" />,
      title: "Home Baking & Cookies",
      measure: "1:1 Volume Ratio",
      description: "Cream with butter for nankhatai cookies and tea sponges. Delivers tender crumb and pleasant crisp edges."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Everyday Applications
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
            How to Use in Your Kitchen
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light leading-relaxed">
            Because MONKAURA is calibrated 1:1 with regular cane sugar, you never have to guess drops or alter family recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u, i) => (
            <div 
              key={i}
              className="bg-brand-cream/30 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-4 hover:border-brand-green/30 transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-2xs">
                  {u.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-dark">
                  {u.title}
                </h3>
                <span className="inline-block text-[11px] font-semibold text-brand-green bg-brand-mint/70 px-2.5 py-0.5 rounded-full">
                  {u.measure}
                </span>
                <p className="text-xs text-brand-dark/75 font-light leading-relaxed">
                  {u.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Baker's Nuance Note */}
        <div className="mt-8 p-4 bg-brand-cream/70 rounded-xl border border-gray-200/70 text-xs text-brand-dark/70 max-w-3xl mx-auto flex items-start gap-3">
          <Info size={16} className="text-brand-green shrink-0 mt-0.5" />
          <p className="font-light leading-relaxed">
            <strong className="font-semibold text-brand-dark">Honest Culinary Guidance: </strong>
            MONKAURA delivers an exact 1:1 match for sweetness and volume in everyday cooking and drinks. In advanced oven baking, polyols do not brown or caramelize identically to sucrose, so texture and crust color may vary slightly from cane sugar.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/how-to-use-monk-fruit-sweetener"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-green hover:underline underline-offset-4"
          >
            <span>Read the complete 1:1 culinary guide with measurements</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
