import React from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function IngredientsSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-cream/40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Pure & Simple Formulation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
            Only Two Ingredients. Zero Fillers.
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light leading-relaxed">
            What is NOT in your sweetener matters just as much as what is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ingredient 1 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider block">
                Ingredient 1 · Fermented Carrier
              </span>
              <h3 className="font-serif font-bold text-2xl text-brand-dark">
                Non-GMO Erythritol
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light">
                Produced through the natural fermentation of non-GMO plant starches. Erythritol provides the crystalline body, crunch, and volume needed to measure spoon-for-spoon like sugar, with 0 kcal metabolizable energy.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-50 text-xs text-brand-dark/70 flex items-center gap-1.5 font-light">
              <Check size={14} className="text-brand-green" />
              <span>Absorbed and excreted unchanged · 0g net carbs</span>
            </div>
          </div>

          {/* Ingredient 2 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider block">
                Ingredient 2 · Botanical Sweetness
              </span>
              <h3 className="font-serif font-bold text-2xl text-brand-dark">
                Monk Fruit Extract
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light">
                Water-extracted from mountain Luo Han Guo (<em>Siraitia grosvenorii</em>) melons. Standardized for Mogroside V, delivering pure, clean plant sweetness that masks polyol cooling without chemical aftertaste.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-50 text-xs text-brand-dark/70 flex items-center gap-1.5 font-light">
              <Check size={14} className="text-brand-green" />
              <span>Non-caloric mogrosides · Zero bitter stevia aftertaste</span>
            </div>
          </div>
        </div>

        {/* The Never-Added Standard Banner */}
        <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded-2xl border border-gray-150/80 shadow-2xs">
          <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider text-center mb-4">
            The MONKAURA "Never Added" Standard
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-brand-dark/80 text-center font-light">
            <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream/60 rounded-lg">
              <X size={13} className="text-brand-orange" />
              <span>NO Aspartame</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream/60 rounded-lg">
              <X size={13} className="text-brand-orange" />
              <span>NO Sucralose</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream/60 rounded-lg">
              <X size={13} className="text-brand-orange" />
              <span>NO Maltodextrin</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 bg-brand-cream/60 rounded-lg">
              <X size={13} className="text-brand-orange" />
              <span>NO Preservatives</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/ingredients"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-green hover:underline underline-offset-4"
          >
            <span>Explore full ingredient transparency & sourcing details</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
