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
              Start small
            </span>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
              New to Allulose? Start with 100g.
            </h2>
            <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
              Not sure if Allulose is right for you? Try our 100g Trial Pack or 200g and experience Monkaura in your everyday food and drinks before making it a regular part of your kitchen.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <Link
              to="/products"
              className="w-full md:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Try 100g or 200g</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
