import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartPulse, Check, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function Nutrition() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>MONKAURA Nutrition Facts & Calorie Breakdown | MONKAURA</title>
        <meta
          name="description"
          content="Complete nutritional panel for MONKAURA: 0 calories, 0g added sugar, 0g fat, 0g net impact carbs. Understand erythritol polyol metabolism."
        />
        <meta
          name="keywords"
          content="monkaura nutrition facts, monk fruit calories, erythritol net carbs, zero sugar nutritional values india"
        />
        <link rel="canonical" href="https://monkaura.in/nutrition" />
        <meta property="og:title" content="MONKAURA Nutrition Facts & Calorie Breakdown" />
        <meta property="og:description" content="View the complete nutritional facts per serving and per 100g for MONKAURA sweetener." />
        <meta property="og:url" content="https://monkaura.in/nutrition" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "MONKAURA Nutrition Facts & Calorie Breakdown",
            "description": "Comprehensive nutritional analysis of MONKAURA Monk Fruit, Erythritol blend.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/nutrition"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Nutrition", "item": "https://monkaura.in/nutrition" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Nutrition", url: "/nutrition" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <HeartPulse size={14} />
            <span>Nutritional Transparency</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            MONKAURA Nutrition Facts
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Detailed, verified nutritional panel for MONKAURA Monk Fruit, Erythritol sweetener. Zero added sugars, zero glycemic response, and zero calorie contribution.
          </p>
        </header>

        {/* Nutritional Panel */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 space-y-6">
          <div className="border-b-4 border-brand-dark pb-3">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-brand-dark">Nutrition Facts</h2>
            <p className="text-xs text-brand-dark/60">Serving Size: 1 teaspoon (approx. 4g) | Servings per 100g pack: ~25 | per 200g pack: ~50</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-brand-dark text-brand-dark font-bold">
                  <th className="pb-2">Nutritional Parameter</th>
                  <th className="pb-2">Per 4g Serving</th>
                  <th className="pb-2">Per 100g Pack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-brand-dark/80">
                <tr className="font-bold">
                  <td className="py-2.5">Energy / Calories</td>
                  <td className="py-2.5 text-brand-green font-bold">0 kcal (0 kJ)</td>
                  <td className="py-2.5 text-brand-green font-bold">0 kcal (0 kJ)</td>
                </tr>
                <tr>
                  <td className="py-2.5">Total Fat</td>
                  <td className="py-2.5">0 g</td>
                  <td className="py-2.5">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 pl-4 text-brand-dark/60">Saturated Fat</td>
                  <td className="py-2.5">0 g</td>
                  <td className="py-2.5">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 pl-4 text-brand-dark/60">Trans Fat</td>
                  <td className="py-2.5">0 g</td>
                  <td className="py-2.5">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5">Cholesterol</td>
                  <td className="py-2.5">0 mg</td>
                  <td className="py-2.5">0 mg</td>
                </tr>
                <tr>
                  <td className="py-2.5">Sodium</td>
                  <td className="py-2.5">0 mg</td>
                  <td className="py-2.5">0 mg</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2.5">Total Carbohydrates</td>
                  <td className="py-2.5">4 g</td>
                  <td className="py-2.5">100 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 pl-4 text-brand-dark/60">Total Sugars</td>
                  <td className="py-2.5 font-bold text-brand-green">0 g</td>
                  <td className="py-2.5 font-bold text-brand-green">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 pl-4 text-brand-dark/60">Added Sugars / Sucrose</td>
                  <td className="py-2.5 font-bold text-brand-green">0 g</td>
                  <td className="py-2.5 font-bold text-brand-green">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 pl-4 text-brand-dark/60">Polyols (Erythritol)*</td>
                  <td className="py-2.5">4 g</td>
                  <td className="py-2.5">100 g</td>
                </tr>
                <tr>
                  <td className="py-2.5">Protein</td>
                  <td className="py-2.5">0 g</td>
                  <td className="py-2.5">0 g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-brand-dark/50 leading-relaxed pt-2 border-t border-gray-100">
            * <strong>Understanding Polyol Carbohydrates:</strong> Erythritol is classified legally under total carbohydrates because of its chemical structure. However, unlike traditional carbohydrates, erythritol is not metabolized into blood glucose or energy; it is absorbed in the small intestine and excreted in urine unchanged. The effective net impact carbohydrate count is 0g.
          </p>
        </section>

        <ProductFactsCard />

        <section className="text-center pt-4">
          <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light shadow-md">
            <span>Shop MONKAURA 100g & 200g Packs</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </article>
    </div>
  );
}
