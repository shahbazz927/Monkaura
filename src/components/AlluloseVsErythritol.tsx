import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AlluloseVsErythritol() {
  return (
    <section className="py-16 md:py-20 bg-brand-mint-light/30 border-y border-brand-green/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-green/10 text-brand-green font-bold text-[11px] uppercase tracking-widest">
            <Sparkles size={12} />
            Know your sweetener
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
            Allulose vs. Erythritol: What’s the Difference?
          </h2>
          <p className="text-brand-dark/70 text-sm font-light">
            Confused between Allulose and Erythritol? Here’s a simple breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-brand-green/10 p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <h3 className="font-serif font-bold text-lg text-brand-dark">Allulose</h3>
              <span className="ml-2 text-[10px] font-bold tracking-widest uppercase bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full">Rare sugar</span>
            </div>
            <ul className="space-y-2.5 text-sm text-brand-dark/80 font-light">
              <li className="flex gap-2"><span className="text-brand-green font-bold">•</span> Rare sugar</li>
              <li className="flex gap-2"><span className="text-brand-green font-bold">•</span> Sugar-like taste</li>
              <li className="flex gap-2"><span className="text-brand-green font-bold">•</span> Can brown and caramelize</li>
              <li className="flex gap-2"><span className="text-brand-green font-bold">•</span> Designed for cooking and baking</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <h3 className="font-serif font-bold text-lg text-brand-dark">Erythritol</h3>
              <span className="ml-2 text-[10px] font-bold tracking-widest uppercase bg-gray-100 text-brand-dark/60 px-2 py-0.5 rounded-full">Sugar alcohol</span>
            </div>
            <ul className="space-y-2.5 text-sm text-brand-dark/70 font-light">
              <li className="flex gap-2"><span className="text-brand-dark/40 font-bold">•</span> Sugar alcohol</li>
              <li className="flex gap-2"><span className="text-brand-dark/40 font-bold">•</span> Can have a cooling sensation</li>
              <li className="flex gap-2"><span className="text-brand-dark/40 font-bold">•</span> Different baking characteristics</li>
              <li className="flex gap-2"><span className="text-brand-dark/40 font-bold">•</span> 0 kcal, widely used</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm text-center space-y-4">
          <h3 className="font-serif font-bold text-lg text-brand-dark">Why Monkaura uses Monk Fruit, Erythritol</h3>
          <p className="text-sm text-brand-dark/70 font-light max-w-2xl mx-auto leading-relaxed">
            Monk Fruit, Erythritol delivers smooth, sugar-like sweetness for everyday tea, coffee, cooking and baking — available now in 100g Trial & 200g Everyday packs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-1">
            <Link
              to="/allulose-story"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-sm rounded-xl transition-colors shadow-md"
            >
              <span>Read Allulose vs Erythritol Guide</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/monk-fruit-vs-allulose"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-green/30 text-brand-green hover:bg-brand-mint text-sm font-bold rounded-xl transition-colors"
            >
              <span>Monk Fruit vs Allulose</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
