import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Scale, Check, X, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";

export default function MonkFruitVsStevia() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>Monk Fruit vs Stevia: Evidence-Based Comparison | MONKAURA</title>
        <meta
          name="description"
          content="Neutral, factual comparison between Monk Fruit and Stevia: botanical origins, sweetness compounds (mogrosides vs steviol glycosides), aftertaste, and heat stability."
        />
        <meta
          name="keywords"
          content="monk fruit vs stevia, stevia vs monk fruit taste, monk fruit bitter aftertaste, steviol glycosides vs mogrosides"
        />
        <link rel="canonical" href="https://monkaura.in/monk-fruit-vs-stevia" />
        <meta property="og:title" content="Monk Fruit vs Stevia: Evidence-Based Comparison" />
        <meta property="og:description" content="Compare taste, aftertaste, extraction methods, and culinary properties of monk fruit vs stevia." />
        <meta property="og:url" content="https://monkaura.in/monk-fruit-vs-stevia" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Monk Fruit vs Stevia: Evidence-Based Comparison",
            "description": "Scientific and culinary comparison between Monk Fruit extract and Stevia leaf extract for daily sweetening.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/monk-fruit-vs-stevia"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://monkaura.in/monk-fruit-sweetener-guide" },
              { "@type": "ListItem", "position": 3, "name": "Monk Fruit vs Stevia", "item": "https://monkaura.in/monk-fruit-vs-stevia" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Guides", url: "/monk-fruit-sweetener-guide" },
          { name: "Monk Fruit vs Stevia", url: "/monk-fruit-vs-stevia" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <Scale size={14} />
            <span>Factual Comparison</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            Monk Fruit vs Stevia: A Detailed Comparison
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Both monk fruit and stevia are plant-based, non-caloric natural sweeteners popular among individuals looking to replace sugar. However, their botanical origins, sweetening molecules, taste profiles, and cooking properties differ significantly.
          </p>
        </header>

        {/* Comparison Table */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-brand-dark/60 font-bold">
                  <th className="pb-3">Attribute</th>
                  <th className="pb-3 text-brand-green">Monk Fruit (MONKAURA Blend)</th>
                  <th className="pb-3">Stevia (Rebaudioside A)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-brand-dark/80">
                <tr>
                  <td className="py-3 font-medium">Plant Source</td>
                  <td className="py-3 font-semibold text-brand-dark">Fruit (Siraitia grosvenorii melon)</td>
                  <td className="py-3">Leaf (Stevia rebaudiana shrub)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Active Compound</td>
                  <td className="py-3 font-semibold text-brand-dark">Mogroside V</td>
                  <td className="py-3">Steviol Glycosides (Reb A, Reb M)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Taste Profile</td>
                  <td className="py-3 font-semibold text-brand-green">Clean, round, sugar-like sweetness</td>
                  <td className="py-3">Intense sweetness with herbal/licorice undertone</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Aftertaste</td>
                  <td className="py-3 font-semibold text-brand-green">No bitter metallic finish</td>
                  <td className="py-3">Commonly exhibits lingering bitter notes</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Heat Stability</td>
                  <td className="py-3 font-semibold text-brand-dark">Stable up to 200°C (hot chai & baking)</td>
                  <td className="py-3">Heat stable, but bitterness may concentrate</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Calories & Glycemic Index</td>
                  <td className="py-3 font-semibold text-brand-green">0 kcal / 0 GI</td>
                  <td className="py-3">0 kcal / 0 GI</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Kitchen Measurement</td>
                  <td className="py-3 font-semibold text-brand-green">1:1 like sugar (granulated blend)</td>
                  <td className="py-3">Drops or micro-spoons (unless diluted with maltodextrin)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Understanding the Aftertaste Difference</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            The primary consumer complaint regarding stevia is its lingering metallic or licorice aftertaste. This occurs because steviol glycosides stimulate both sweet (T1R2/T1R3) and bitter (hTAS2R4/hTAS2R14) taste receptors on the human tongue.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            In contrast, <strong>Mogroside V</strong> in monk fruit binds selectively to human sweet receptors with minimal interaction with bitter receptors, providing a flavor experience that closely mimics sucrose without the medicinal aftertaste.
          </p>
        </section>

        <ProductFactsCard />

        <section className="bg-brand-mint-light p-6 sm:p-8 rounded-2xl border border-brand-green/20 text-center space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Experience the Difference in Your Chai</h2>
          <p className="text-xs sm:text-sm text-brand-dark/80 max-w-lg mx-auto">
            Try MONKAURA 100g Trial Pack for ₹149 and discover how clean natural sweetness tastes without stevia bitterness.
          </p>
          <div className="pt-2">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light transition-all">
              <span>Shop MONKAURA Packs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
