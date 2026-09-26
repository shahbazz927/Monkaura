import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import ProductFactsCard from "./ProductFactsCard";

export default function HomepageSections() {
  return (
    <div className="space-y-20 md:space-y-28 my-12">
      {/* 1. What is MONKAURA: Editorial Introduction */}
      <section id="what-is-monkaura" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            About the Sweetener
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight font-bold">
            A table-top sweetener crafted for everyday Indian homes.
          </h2>
          <p className="text-brand-dark/75 text-base sm:text-lg leading-relaxed font-light">
            MONKAURA is a pure, zero-sugar sweetener blend designed to replace table sugar in daily chai, filter coffee, home cooking, and traditional Indian desserts. By combining non-GMO fermented erythritol with high-purity monk fruit extract, it matches the natural sweetness and crystalline texture of sucrose without calories or blood glucose spikes.
          </p>
        </div>

        {/* 3 Principles: Editorial Columns with Hairline Separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-gray-200/70">
          <div className="space-y-2">
            <span className="text-xs font-mono text-brand-green font-semibold tracking-wider uppercase block">
              01 · Taste
            </span>
            <h3 className="font-serif text-xl font-bold text-brand-dark">
              Clean, familiar sweetness
            </h3>
            <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
              Tastes remarkably like real sugar. No lingering chemical taste, no stevia-like bitterness, and no metallic aftertaste in your morning chai.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-brand-green font-semibold tracking-wider uppercase block">
              02 · Measurement
            </span>
            <h3 className="font-serif text-xl font-bold text-brand-dark">
              1:1 Spoon-for-spoon
            </h3>
            <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
              Use exactly one teaspoon of MONKAURA for one teaspoon of sugar. No conversions, liquid drops, or complicated kitchen calculations.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-brand-green font-semibold tracking-wider uppercase block">
              03 · Heat Stability
            </span>
            <h3 className="font-serif text-xl font-bold text-brand-dark">
              Stable up to 200°C
            </h3>
            <p className="text-sm text-brand-dark/70 font-light leading-relaxed">
              Maintains clean sweetness under high heat. Boil it in rolling chai, simmer in rich kheer, or bake in cookies without bitter decomposition.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Ingredients & Formulation */}
      <section id="ingredients-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-b border-gray-200/70 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
              Pure Formulation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold">
              Only two clean ingredients. Zero fillers.
            </h2>
            <p className="text-brand-dark/70 text-sm font-light">
              We never use maltodextrin, dextrose, aspartame, sucralose, or artificial preservatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Ingredient 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">
                  Crystalline Carrier · INS 968
                </span>
                <span className="text-xs text-brand-dark/40 font-mono">99.5%+ Purity</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                Non-GMO Erythritol
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed font-light">
                Produced via natural fermentation of plant starches. Erythritol provides the crystalline body, volume, and mouthfeel identical to granulated table sugar, while contributing 0 calories per serving.
              </p>
              <div className="pt-2 text-xs text-brand-dark/60 border-t border-gray-50 flex items-center gap-1.5">
                <Check size={14} className="text-brand-green" />
                <span>Absorbed in small intestine and excreted unchanged · 0 net carbs</span>
              </div>
            </div>

            {/* Ingredient 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">
                  Botanical Extract · Siraitia grosvenorii
                </span>
                <span className="text-xs text-brand-dark/40 font-mono">Mogroside V</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                Monk Fruit Extract
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed font-light">
                Derived using pure hot-water extraction and fine filtration from hand-picked mountain monk fruit. Standardized for high-potency Mogroside V, delivering pure, clean botanical sweetness without lingering bitterness.
              </p>
              <div className="pt-2 text-xs text-brand-dark/60 border-t border-gray-50 flex items-center gap-1.5">
                <Check size={14} className="text-brand-green" />
                <span>Zero glycemic response · No bitter stevioside compounds</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/ingredients"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand-green hover:underline underline-offset-4"
            >
              <span>Read the complete ingredient breakdown and safety standards</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Biological Mechanism & Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
              Metabolic Function
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-bold leading-snug">
              How mogrosides deliver sweetness without glucose.
            </h2>
            <p className="text-sm text-brand-dark/75 font-light leading-relaxed">
              Traditional cane sugar (sucrose) breaks down into glucose and fructose, stimulating insulin release and contributing caloric energy. Monk fruit operates on a different biochemical pathway:
            </p>

            <div className="space-y-3 pt-1 text-sm text-brand-dark/80 font-light">
              <div className="border-l-2 border-brand-green pl-3.5 space-y-0.5">
                <span className="font-semibold text-xs text-brand-dark block">1. Receptor Binding</span>
                <p className="text-xs leading-relaxed">Mogroside V molecules bind directly to T1R2 and T1R3 sweet taste receptors on the tongue, signaling sweetness to the brain.</p>
              </div>
              <div className="border-l-2 border-brand-green pl-3.5 space-y-0.5">
                <span className="font-semibold text-xs text-brand-dark block">2. Zero Glucose Breakdown</span>
                <p className="text-xs leading-relaxed">Human digestive enzymes cannot break down mogroside bonds into glucose, passing them through the digestive tract unabsorbed.</p>
              </div>
              <div className="border-l-2 border-brand-green pl-3.5 space-y-0.5">
                <span className="font-semibold text-xs text-brand-dark block">3. Natural Elimination</span>
                <p className="text-xs leading-relaxed">Erythritol is absorbed in the small intestine and excreted unchanged in urine, contributing 0 kcal metabolic energy.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/how-monk-fruit-sweetener-works"
                className="text-xs sm:text-sm font-semibold text-brand-green hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>Explore the biochemical guide</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-4">
            <h3 className="font-serif font-bold text-lg text-brand-dark">
              Sweetener Comparison Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-brand-dark/60 font-semibold">
                    <th className="pb-3 font-normal">Parameter</th>
                    <th className="pb-3 text-brand-green font-bold">MONKAURA</th>
                    <th className="pb-3 text-brand-dark/60 font-normal">Cane Sugar</th>
                    <th className="pb-3 text-brand-dark/60 font-normal">Stevia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2.5 font-medium text-brand-dark">Calories / 4g</td>
                    <td className="py-2.5 font-bold text-brand-green">0 kcal</td>
                    <td className="py-2.5 text-brand-dark/70">16 kcal</td>
                    <td className="py-2.5 text-brand-dark/70">0 kcal</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-brand-dark">Added Sugar</td>
                    <td className="py-2.5 font-bold text-brand-green">0g</td>
                    <td className="py-2.5 text-brand-dark/70">4g</td>
                    <td className="py-2.5 text-brand-dark/70">0g</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-brand-dark">Glycemic Index</td>
                    <td className="py-2.5 font-bold text-brand-green">GI 0</td>
                    <td className="py-2.5 text-brand-dark/70">GI 65</td>
                    <td className="py-2.5 text-brand-dark/70">GI 0</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-brand-dark">Taste Profile</td>
                    <td className="py-2.5 font-bold text-brand-green">Clean, sugar-like</td>
                    <td className="py-2.5 text-brand-dark/70">Sucrose sweet</td>
                    <td className="py-2.5 text-brand-dark/70">Bitter / Licorice</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-brand-dark">Substitution Ratio</td>
                    <td className="py-2.5 font-bold text-brand-green">1:1 Spoon for spoon</td>
                    <td className="py-2.5 text-brand-dark/70">1:1 Reference</td>
                    <td className="py-2.5 text-brand-dark/70">Drops / Fractions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 1:1 Replacement Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xs">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Simple 1:1 Measurement
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold">
            1 spoon MONKAURA = 1 spoon table sugar.
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Unlike intense liquid drops or concentrated stevia powders that ruin recipe texture, MONKAURA is calibrated to deliver the exact sweetness and crystalline volume of sugar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-4 text-left">
            <div className="border-t-2 border-brand-green pt-3">
              <span className="font-serif text-2xl font-bold text-brand-dark block">1 Teaspoon</span>
              <span className="text-xs text-brand-green font-semibold mt-1 block">Tea or Coffee</span>
              <span className="text-xs text-brand-dark/60 mt-0.5 block">Replaces 1 tsp table sugar</span>
            </div>
            <div className="border-t-2 border-brand-green pt-3">
              <span className="font-serif text-2xl font-bold text-brand-dark block">1 Tablespoon</span>
              <span className="text-xs text-brand-green font-semibold mt-1 block">Nimbu Pani & Curd</span>
              <span className="text-xs text-brand-dark/60 mt-0.5 block">Replaces 1 tbsp table sugar</span>
            </div>
            <div className="border-t-2 border-brand-green pt-3">
              <span className="font-serif text-2xl font-bold text-brand-dark block">1/2 to 1 Cup</span>
              <span className="text-xs text-brand-green font-semibold mt-1 block">Halwa, Kheer & Baking</span>
              <span className="text-xs text-brand-dark/60 mt-0.5 block">Replaces 1 cup sugar 1:1</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Food Photography & Kitchen Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            In The Kitchen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold">
            Real food made for everyday Indian tables.
          </h2>
          <p className="text-brand-dark/70 text-sm font-light">
            From morning masala chai to festive sweets and tea crumbles.
          </p>
        </div>

        {/* 3 Editorial Food Stories with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Rice & Saffron Kheer */}
          <div className="space-y-4 group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
              <img
                src="/assets/images/saffron-rice-kheer.jpg"
                alt="Creamy Zero-Sugar Rice & Saffron Kheer prepared with MONKAURA"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-brand-green font-semibold">Traditional Sweets</span>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Saffron & Rice Kheer
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
                Simmers gently in full-cream milk without curdling. Delivers rich, creamy sweetness with 0g added sugar.
              </p>
              <Link
                to="/recipes/kheer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline pt-1"
              >
                <span>View Kheer Recipe</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 2: Keto Badam Halwa */}
          <div className="space-y-4 group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
              <img
                src="/assets/images/almond-flour-halwa.jpg"
                alt="Keto Badam Halwa prepared with MONKAURA"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-brand-green font-semibold">Festive Desserts</span>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Keto Badam Halwa
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
                Roasts alongside superfine almond flour and pure desi ghee for a rich, golden sheen and zero sugar guilt.
              </p>
              <Link
                to="/recipes/almond-flour-halwa"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline pt-1"
              >
                <span>View Badam Halwa Recipe</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Card 3: Fragrant Besan Halwa */}
          <div className="space-y-4 group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
              <img
                src="/assets/images/besan-halwa.jpg"
                alt="Fragrant Besan Halwa prepared with MONKAURA"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-brand-green font-semibold">Indian Classics</span>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                Fragrant Besan Halwa
              </h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
                Dissolves instantly in roasted gram flour and ghee to create an authentic melt-in-mouth texture without sucrose.
              </p>
              <Link
                to="/recipes/besan-halwa"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline pt-1"
              >
                <span>View Besan Halwa Recipe</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Standards, Quality & FSSAI Authority */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200/70 pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
                Food Safety & Compliance
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold leading-tight">
                FSSAI licensed standards you can verify.
              </h2>
              <p className="text-brand-dark/75 text-sm sm:text-base font-light leading-relaxed">
                Health claims mean nothing without transparent testing. MONKAURA operates in full compliance with the Food Safety and Standards Authority of India (FSSAI) regulations for table-top sweetener blends.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-brand-dark/80 pt-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-green shrink-0" />
                  <span>Batch testing for heavy metals (Lead, Arsenic, Cadmium, Mercury)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-green shrink-0" />
                  <span>Microbiological safety testing (Salmonella, E. Coli, Yeast & Mold)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-green shrink-0" />
                  <span>Food-grade multi-layer moisture-barrier zip pouches to withstand Indian humidity</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  to="/quality-testing"
                  className="px-5 py-2.5 rounded-lg bg-brand-green text-white font-semibold text-xs hover:bg-brand-green-light transition-colors"
                >
                  Quality Testing Protocol →
                </Link>
                <Link
                  to="/fssai"
                  className="px-5 py-2.5 rounded-lg border border-gray-200 hover:border-brand-green text-brand-dark font-semibold text-xs transition-colors"
                >
                  FSSAI Standards →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProductFactsCard />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quiet, Confident Conversion Closer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green text-white rounded-2xl p-8 sm:p-12 lg:p-14 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xs uppercase tracking-widest text-brand-mint/80 font-semibold">
              Ready To Switch?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
              Start with the 100g Trial Pack.
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Try it in your morning chai and coffee for just ₹149. Once you taste the authentic sweetness, the 200g Everyday Pack is ready for your family kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-3">
              <Link
                to="/products/monkaura-100g"
                className="px-7 py-3.5 bg-white text-brand-green hover:bg-brand-mint text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Try 100g Trial Pack</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/products/monkaura-200g"
                className="px-7 py-3.5 bg-brand-green-dark/60 hover:bg-brand-green-dark text-white border border-brand-mint/30 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Shop 200g Everyday Pack</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
