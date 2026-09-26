import React from "react";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductFactsCard() {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-2xs my-6">
      <div className="flex items-center gap-3 mb-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-brand-dark">MONKAURA Product Facts</h3>
          <p className="text-xs text-brand-dark/60 font-light">Verified entity information and nutritional standards</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
        <div className="space-y-2.5 bg-brand-cream/40 p-4 rounded-lg border border-gray-100">
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Brand:</span>
            <span className="font-semibold text-brand-dark">MONKAURA</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Formulation:</span>
            <span className="font-semibold text-brand-green">Monk Fruit, Erythritol</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Replacement Ratio:</span>
            <span className="font-semibold text-brand-dark">1:1 spoon for spoon</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Pack Sizes:</span>
            <span className="font-semibold text-brand-dark">100g Trial & 200g Everyday</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Serving Size:</span>
            <span className="font-semibold text-brand-dark">1 teaspoon (4g)</span>
          </div>
        </div>

        <div className="space-y-2.5 bg-brand-cream/40 p-4 rounded-lg border border-gray-100">
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Added Sugar:</span>
            <span className="font-semibold text-brand-green">0g (Zero Added Sugar)</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Calories / Serving:</span>
            <span className="font-semibold text-brand-green">0 kcal</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Category:</span>
            <span className="font-semibold text-brand-dark">Table-Top Sweetener</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Location:</span>
            <span className="font-semibold text-brand-dark">Hyderabad, Telangana, India</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-brand-dark/70">Applications:</span>
            <span className="font-semibold text-brand-dark">Chai, Coffee, Sweets, Baking</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-brand-dark/70 font-light">
          <CheckCircle2 size={14} className="text-brand-green" />
          <span>Non-GMO fermented ingredients · FSSAI standard compliant</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/quality-testing" className="font-semibold text-brand-green hover:underline">
            Quality & Sourcing →
          </Link>
          <Link to="/fssai" className="font-semibold text-brand-green hover:underline">
            FSSAI Standards →
          </Link>
        </div>
      </div>
    </div>
  );
}
