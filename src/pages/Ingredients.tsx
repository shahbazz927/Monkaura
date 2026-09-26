import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, Check, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function Ingredients() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>MONKAURA Ingredients: 100% Transparency & Sourcing | MONKAURA</title>
        <meta
          name="description"
          content="Full ingredient transparency: learn about MONKAURA's two clean ingredients — Non-GMO Erythritol and Monk Fruit Extract (Siraitia grosvenorii). Zero additives."
        />
        <meta
          name="keywords"
          content="monkaura ingredients, monk fruit ingredients list, non gmo erythritol india, mogroside v extract"
        />
        <link rel="canonical" href="https://monkaura.in/ingredients" />
        <meta property="og:title" content="MONKAURA Ingredients: 100% Transparency & Sourcing" />
        <meta property="og:description" content="Discover the two pure ingredients that power MONKAURA natural sweetener." />
        <meta property="og:url" content="https://monkaura.in/ingredients" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "MONKAURA Ingredients & Sourcing Transparency",
            "description": "Complete breakdown of Non-GMO Erythritol and Monk Fruit Extract (Siraitia grosvenorii) used in MONKAURA.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/ingredients"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Ingredients", "item": "https://monkaura.in/ingredients" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Ingredients", url: "/ingredients" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <Leaf size={14} />
            <span>Pure & Simple Formulation</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            MONKAURA Ingredients
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            We believe that what is NOT in your sweetener is just as important as what is. MONKAURA is crafted from strictly two natural, plant-derived components.
          </p>
        </header>

        {/* The Two Ingredients */}
        <section className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-mint text-brand-green flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-brand-dark">Non-GMO Erythritol</h2>
            </div>
            <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
              <strong>Source:</strong> Natural fermentation of non-GMO plant starches.<br />
              <strong>Function in Blend:</strong> Provides crystal physical bulk, crisp mouthfeel, and enables precise 1:1 measuring by teaspoon and cup without altering recipe volumes.<br />
              <strong>Caloric Value:</strong> 0 kcal metabolizable energy.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-mint text-brand-green flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-brand-dark">Monk Fruit Extract (Siraitia grosvenorii)</h2>
            </div>
            <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed">
              <strong>Source:</strong> Water extraction of ripe monk fruit (Luo Han Guo) melons.<br />
              <strong>Function in Blend:</strong> Standardized Mogroside V provides intense, natural sweetness that matches sugar's sweetness curve and eliminates erythritol's cooling aftertaste.<br />
              <strong>Caloric Value:</strong> 0 kcal.
            </p>
          </div>
        </section>

        {/* What is NOT in MONKAURA */}
        <section className="bg-brand-mint-light/60 p-6 sm:p-8 rounded-2xl border border-brand-green/20 space-y-4">
          <h2 className="font-serif font-bold text-xl text-brand-dark">The "Never Added" Standard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-brand-dark/80">
            <div className="flex items-center gap-2"><Check size={16} className="text-brand-green" /><span>NO Aspartame or Sucralose</span></div>
            <div className="flex items-center gap-2"><Check size={16} className="text-brand-green" /><span>NO Saccharin or Acesulfame K</span></div>
            <div className="flex items-center gap-2"><Check size={16} className="text-brand-green" /><span>NO Maltodextrin or Dextrose Bulking Fillers</span></div>
            <div className="flex items-center gap-2"><Check size={16} className="text-brand-green" /><span>NO Artificial Food Colors or Flavors</span></div>
            <div className="flex items-center gap-2"><Check size={16} className="text-brand-green" /><span>NO Chemical Preservatives</span></div>
            <div className="flex items-center gap-2"><Check size={16} className="text-brand-green" /><span>NO Cane Sugar, Corn Syrup or Invert Sugar</span></div>
          </div>
        </section>

        <ProductFactsCard />

        <section className="text-center pt-4">
          <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light shadow-md">
            <span>Shop Clean Sweetener Packs</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </article>
    </div>
  );
}
