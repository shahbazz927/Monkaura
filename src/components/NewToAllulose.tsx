import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export default function NewToAllulose() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream/60 border border-brand-green/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-1 space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-brand-green font-bold text-xs uppercase tracking-widest">
              <Sparkles size={14} />
              Available Now — Monk Fruit, Erythritol
            </span>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
              New to Monkaura? Start with 100g.
            </h2>
            <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
              Try our <strong className="font-semibold">100g Trial Pack</strong> — perfect for testing Monkaura in your everyday tea, coffee, cooking and baking. Love it? The <strong className="font-semibold">200g Everyday Pack</strong> is made for regular cooking.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex flex-col gap-3 justify-center">
            <Link
              to="/products"
              className="w-full md:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Try 100g & 200g Everyday</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/monk-fruit-vs-allulose" className="text-center text-xs font-bold text-brand-dark/60 hover:text-brand-green underline underline-offset-4">Learn about Monk Fruit vs Allulose →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
