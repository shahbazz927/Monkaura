import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, ArrowRight, Coffee, Flame, Cake, ShieldCheck } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function MonkFruitGuide() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>The Definitive Guide to Monk Fruit Sweetener | MONKAURA</title>
        <meta
          name="description"
          content="Comprehensive guide to monk fruit sweetener: history, botanical source, mogrosides, culinary applications, taste profile, and health safety."
        />
        <meta
          name="keywords"
          content="monk fruit sweetener guide, what is monk fruit, how monk fruit works, monk fruit baking, 1:1 sugar substitute guide"
        />
        <link rel="canonical" href="https://monkaura.in/monk-fruit-sweetener-guide" />
        <meta property="og:title" content="The Definitive Guide to Monk Fruit Sweetener | MONKAURA" />
        <meta
          property="og:description"
          content="Learn all about monk fruit sweetener: origins, mogroside extraction, 1:1 kitchen usage, and safety."
        />
        <meta property="og:url" content="https://monkaura.in/monk-fruit-sweetener-guide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Definitive Guide to Monk Fruit Sweetener",
            "description": "A complete educational guide covering botanical origins, extraction methods, mogroside chemistry, and culinary techniques of monk fruit sweetener.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/monk-fruit-sweetener-guide"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Monk Fruit Guide", "item": "https://monkaura.in/monk-fruit-sweetener-guide" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Monk Fruit Guide", url: "/monk-fruit-sweetener-guide" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <BookOpen size={14} />
            <span>Comprehensive Educational Guide</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            The Complete Guide to Monk Fruit Sweetener
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            From the misty mountains of Guilin to modern Indian kitchens, monk fruit (Luo Han Guo) has become a celebrated natural, zero-sugar sweetening alternative. This guide explores the science, history, and practical usage of monk fruit sweeteners.
          </p>
        </header>

        {/* Section 1: Quick Navigation Cards */}
        <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-xl text-brand-dark">Topics in This Educational Series</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link to="/monk-fruit-benefits" className="p-3 bg-brand-mint/40 rounded-xl hover:bg-brand-mint flex items-center justify-between font-semibold text-brand-green sm:col-span-2 border border-brand-green/30">
              <span>★ Monk Fruit Benefits: Uses, Nutrition &amp; Side Effects</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
            <Link to="/what-is-monk-fruit" className="p-3 bg-brand-cream/70 rounded-xl hover:bg-brand-mint-light flex items-center justify-between font-semibold text-brand-dark">
              <span>1. What is Monk Fruit (Siraitia grosvenorii)?</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
            <Link to="/how-monk-fruit-sweetener-works" className="p-3 bg-brand-cream/70 rounded-xl hover:bg-brand-mint-light flex items-center justify-between font-semibold text-brand-dark">
              <span>2. How Monk Fruit Sweetener Works (Mogrosides)</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
            <Link to="/how-to-use-monk-fruit-sweetener" className="p-3 bg-brand-cream/70 rounded-xl hover:bg-brand-mint-light flex items-center justify-between font-semibold text-brand-dark">
              <span>3. How to Use Monk Fruit (1:1 Ratio)</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
            <Link to="/monk-fruit-sweetener-for-tea-and-coffee" className="p-3 bg-brand-cream/70 rounded-xl hover:bg-brand-mint-light flex items-center justify-between font-semibold text-brand-dark">
              <span>4. Monk Fruit for Tea, Chai & Coffee</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
            <Link to="/monk-fruit-sweetener-for-baking" className="p-3 bg-brand-cream/70 rounded-xl hover:bg-brand-mint-light flex items-center justify-between font-semibold text-brand-dark">
              <span>5. Monk Fruit Sweetener for Baking</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
            <Link to="/monk-fruit-sweetener-faq" className="p-3 bg-brand-cream/70 rounded-xl hover:bg-brand-mint-light flex items-center justify-between font-semibold text-brand-dark">
              <span>6. Monk Fruit FAQs (15+ Questions)</span>
              <ArrowRight size={14} className="text-brand-green" />
            </Link>
          </div>
        </section>

        {/* Section 2: Botanical & Extraction Overview */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Botanical Origin & Traditional Heritage</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Monk fruit is the fruit of <em>Siraitia grosvenorii</em>, a perennial vine of the Cucurbitaceae (gourd) family. It was first recorded by 13th-century Buddhist monks in Guangxi province, China, who utilized the fruit for soothing cooling drinks. The fruit requires specific high-altitude, subtropical mist environments, making it a rare botanical crop.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            In modern production, freshly harvested ripe monk fruits are crushed and steeped in pure hot water. The resulting fruit infusion is filtered to remove color, seeds, and pulp, yielding a concentrated extract standardized to <strong>Mogroside V</strong> content.
          </p>
        </section>

        {/* Section 3: Why Monk Fruit is Blended for Kitchen Use */}
        <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Why Blending with Erythritol Creates the Best Kitchen Sweetener</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Pure monk fruit extract is intensely sweet — 200 times sweeter than table sugar. A 1/64th teaspoon would sweeten an entire cake, but without sugar's physical bulk, your baked goods would collapse, and tea measurement would require laboratory micro-spoons.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            By blending standardized monk fruit extract with fermented, non-GMO <strong>Erythritol</strong>, MONKAURA solves this fundamental culinary challenge. Erythritol provides natural bulk, clean crystal texture, and crisp mouthfeel, while monk fruit balances erythritol's mild sweetness to achieve an exact <strong>1:1 replacement ratio</strong> for sugar.
          </p>
        </section>

        <ProductFactsCard />

        {/* Section 4: Comparison Overview */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">How Monk Fruit Compares to Other Sweeteners</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Understanding the distinction between different natural and alternative sweeteners allows you to make informed dietary choices:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link to="/monk-fruit-vs-stevia" className="p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green transition-all space-y-2">
              <h3 className="font-bold text-brand-dark text-sm sm:text-base">Monk Fruit vs Stevia</h3>
              <p className="text-xs text-brand-dark/70">Compare taste profiles, bitter aftertaste differences, and heat stability.</p>
              <span className="text-xs font-bold text-brand-green flex items-center gap-1">Read Comparison →</span>
            </Link>
            <Link to="/monk-fruit-vs-erythritol" className="p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green transition-all space-y-2">
              <h3 className="font-bold text-brand-dark text-sm sm:text-base">Monk Fruit vs Erythritol</h3>
              <p className="text-xs text-brand-dark/70">Understand why pure erythritol has a cooling sensation and how monk fruit balances it.</p>
              <span className="text-xs font-bold text-brand-green flex items-center gap-1">Read Comparison →</span>
            </Link>
            <Link to="/monk-fruit-vs-sugar" className="p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green transition-all space-y-2">
              <h3 className="font-bold text-brand-dark text-sm sm:text-base">Monk Fruit vs Sugar</h3>
              <p className="text-xs text-brand-dark/70">Detailed nutritional and glycemic comparison between refined sucrose and monk fruit.</p>
              <span className="text-xs font-bold text-brand-green flex items-center gap-1">Read Comparison →</span>
            </Link>
            <Link to="/monk-fruit-vs-allulose" className="p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-green transition-all space-y-2">
              <h3 className="font-bold text-brand-dark text-sm sm:text-base">Monk Fruit vs Allulose</h3>
              <p className="text-xs text-brand-dark/70">Factual comparison with rare sugars, browning characteristics, and availability.</p>
              <span className="text-xs font-bold text-brand-green flex items-center gap-1">Read Comparison →</span>
            </Link>
          </div>
        </section>

        {/* Section 5: Conclusion & CTA */}
        <section className="bg-brand-mint-light p-6 sm:p-8 rounded-2xl border border-brand-green/20 text-center space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Try Monkaura in Your Daily Routine</h2>
          <p className="text-xs sm:text-sm text-brand-dark/80 max-w-lg mx-auto">
            Ready to switch from refined sugar? Order the Monkaura 100g Trial Pack (₹149) or 200g Everyday Pack (₹298) with pan-India delivery.
          </p>
          <div className="pt-2">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light transition-all">
              <span>Shop Monkaura Sweeteners</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
