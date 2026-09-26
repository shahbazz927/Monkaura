import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, FileCheck, Package, CheckCircle2, ArrowRight } from "lucide-react";
import ProductFactsCard from "./ProductFactsCard";

export default function QualityTrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Standards copy */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
              Quality, Safety & Standards
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
              Honest Standards You Can Verify
            </h2>
            <p className="text-brand-dark/75 text-sm sm:text-base font-light leading-relaxed">
              We operate under strict food safety and regulatory protocols for packaged tabletop sweeteners in India. We do not invent certifications or fabricate test results.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-brand-dark/80 font-light">
              <div className="flex items-start gap-3">
                <FileCheck size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-brand-dark block">FSSAI Licensed Standard</strong>
                  <span>Complies with Food Safety and Standards Authority of India tabletop sweetener regulations. <strong className="font-medium text-brand-dark">Lic. No. 13624999000449</strong>.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-brand-dark block">Batch Quality Verification</strong>
                  <span>Raw materials undergo standardized screening for heavy metals (Lead, Arsenic, Cadmium, Mercury) and microbiological safety parameters.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Package size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-brand-dark block">Moisture-Barrier Pouch</strong>
                  <span>Food-grade multi-layer aluminum-barrier pouches with airtight zip seals to protect free-flowing crystals against humid Indian weather.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                to="/quality-testing"
                className="px-5 py-2.5 rounded-xl bg-brand-green text-white font-semibold text-xs hover:bg-brand-green-light transition-colors shadow-2xs"
              >
                Quality & Testing Protocol →
              </Link>
              <Link
                to="/fssai"
                className="px-5 py-2.5 rounded-xl border border-gray-200 hover:border-brand-green text-brand-dark font-semibold text-xs transition-colors"
              >
                FSSAI Standards Overview →
              </Link>
            </div>
          </div>

          {/* Right Column: Product Facts Card */}
          <div className="lg:col-span-6">
            <ProductFactsCard />
          </div>

        </div>
      </div>
    </section>
  );
}
