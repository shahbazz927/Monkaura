import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Scale, ArrowRight, ShieldCheck } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function MonkFruitVsSugar() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>Monk Fruit vs Sugar: Glycemic, Calorie & Health Comparison | MONKAURA</title>
        <meta
          name="description"
          content="Evidence-based comparison between Monk Fruit Sweetener and Cane Sugar (Sucrose): calories, glycemic index, dental health, culinary replacement, and metabolism."
        />
        <meta
          name="keywords"
          content="monk fruit vs sugar, monk fruit glycemic index, sugar substitute calories, zero sugar vs table sugar"
        />
        <link rel="canonical" href="https://monkaura.in/monk-fruit-vs-sugar" />
        <meta property="og:title" content="Monk Fruit vs Sugar: Glycemic, Calorie & Health Comparison" />
        <meta property="og:description" content="Compare table sugar with monk fruit sweetener in calories, glycemic impact, and culinary performance." />
        <meta property="og:url" content="https://monkaura.in/monk-fruit-vs-sugar" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Monk Fruit vs Sugar: Glycemic, Calorie & Health Comparison",
            "description": "Nutritional, biochemical, and metabolic comparison between refined cane sugar (sucrose) and MONKAURA monk fruit sweetener blend.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/monk-fruit-vs-sugar"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://monkaura.in/monk-fruit-sweetener-guide" },
              { "@type": "ListItem", "position": 3, "name": "Monk Fruit vs Sugar", "item": "https://monkaura.in/monk-fruit-vs-sugar" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Guides", url: "/monk-fruit-sweetener-guide" },
          { name: "Monk Fruit vs Sugar", url: "/monk-fruit-vs-sugar" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <Scale size={14} />
            <span>Nutritional Comparison</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            Monk Fruit vs Table Sugar: A Complete Comparison
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Refined cane sugar (sucrose) is deeply embedded in Indian cuisine, from sweet morning chai to festive mithais. Here is a scientific comparison of how MONKAURA monk fruit sweetener compares to traditional sugar in nutrition, metabolism, and culinary behavior.
          </p>
        </header>

        {/* Comparison Table */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Nutritional & Metabolic Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-brand-dark/60 font-bold">
                  <th className="pb-3">Characteristic</th>
                  <th className="pb-3 text-brand-green">MONKAURA (Monk Fruit, Erythritol)</th>
                  <th className="pb-3">Refined Cane Sugar (Sucrose)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-brand-dark/80">
                <tr>
                  <td className="py-3 font-medium">Calories (per 100g)</td>
                  <td className="py-3 font-bold text-brand-green">0 kcal</td>
                  <td className="py-3">approx. 387 kcal</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Glycemic Index (GI)</td>
                  <td className="py-3 font-bold text-brand-green">0 (Non-glycemic)</td>
                  <td className="py-3">65 (High glycemic)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Metabolism</td>
                  <td className="py-3">Excreted without glucose conversion</td>
                  <td className="py-3">Rapidly absorbed into glucose + fructose</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Dental Impact</td>
                  <td className="py-3 font-semibold text-brand-green">Tooth-friendly (Non-cariogenic)</td>
                  <td className="py-3">Feeds oral bacteria producing enamel acid</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Taste Similarity</td>
                  <td className="py-3 font-semibold text-brand-green">Clean, sugar-like sweetness</td>
                  <td className="py-3">Standard sucrose profile</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Substitution Ratio</td>
                  <td className="py-3 font-semibold text-brand-dark">1:1 by volume or weight</td>
                  <td className="py-3">Base baseline (1:1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Metabolic Impact</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Sucrose is broken down by the body into glucose and fructose. High daily intake of added sugars is recognized in nutritional literature as a driver of caloric surplus and blood sugar fluctuations.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            MONKAURA delivers the identical sensory sweetness of sucrose without the metabolizable carbohydrates, making it an ideal choice for anyone managing calorie intake or choosing low-sugar dietary protocols.
          </p>
        </section>

        <ProductFactsCard />

        <section className="bg-brand-mint-light p-6 sm:p-8 rounded-2xl border border-brand-green/20 text-center space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Ready to Replace Sugar in Your Kitchen?</h2>
          <p className="text-xs sm:text-sm text-brand-dark/80 max-w-lg mx-auto">
            Order MONKAURA today — 1:1 sugar replacement with zero added calories.
          </p>
          <div className="pt-2">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light transition-all">
              <span>Shop Monkaura 100g & 200g Packs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
