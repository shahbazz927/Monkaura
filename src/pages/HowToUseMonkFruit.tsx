import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Utensils, Coffee, Cake, Flame, Check, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";

export default function HowToUseMonkFruit() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>How to Use Monk Fruit Sweetener (1:1 Ratio Guide) | MONKAURA</title>
        <meta
          name="description"
          content="Practical guide on how to use monk fruit sweetener: exact 1:1 conversion ratio, beverage tips, cooking methods, baking guidelines, and storage."
        />
        <meta
          name="keywords"
          content="how to use monk fruit sweetener, monk fruit 1:1 conversion, monk fruit substitution ratio, using monk fruit in cooking"
        />
        <link rel="canonical" href="https://monkaura.in/how-to-use-monk-fruit-sweetener" />
        <meta property="og:title" content="How to Use Monk Fruit Sweetener (1:1 Ratio Guide) | MONKAURA" />
        <meta property="og:description" content="Learn how to substitute sugar 1:1 with monk fruit sweetener in beverages, cooking, and baking." />
        <meta property="og:url" content="https://monkaura.in/how-to-use-monk-fruit-sweetener" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Use Monk Fruit Sweetener as a 1:1 Sugar Replacement",
            "description": "Step-by-step instructions for using MONKAURA Monk Fruit, Erythritol blend in daily beverages, home cooking, and sweet dishes.",
            "totalTime": "PT2M",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Measure 1:1",
                "text": "Use the exact same amount of MONKAURA as you would use regular sugar."
              },
              {
                "@type": "HowToStep",
                "name": "Stir into hot or cold liquid",
                "text": "Stir directly into chai, coffee, lemonade, or cooking sauces until crystals dissolve."
              },
              {
                "@type": "HowToStep",
                "name": "Enjoy clean sweetness",
                "text": "Enjoy your beverage or dessert with zero added sugar and zero aftertaste."
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Monk Fruit Guide", "item": "https://monkaura.in/monk-fruit-sweetener-guide" },
              { "@type": "ListItem", "position": 3, "name": "How to Use Monk Fruit", "item": "https://monkaura.in/how-to-use-monk-fruit-sweetener" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Monk Fruit Guide", url: "/monk-fruit-sweetener-guide" },
          { name: "How to Use Monk Fruit", url: "/how-to-use-monk-fruit-sweetener" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <Utensils size={14} />
            <span>Culinary Conversion & Usage</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            How to Use Monk Fruit Sweetener
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Switching from regular sugar to MONKAURA is straightforward: because it is formulated as an exact <strong>1:1 sugar replacement</strong>, you do not need complex math or dosage droppers.
          </p>
        </header>

        {/* 1:1 Conversion Table */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">The 1:1 Replacement Ratio</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-brand-dark/60 font-bold">
                  <th className="pb-3">Cane Sugar in Recipe</th>
                  <th className="pb-3">Use MONKAURA</th>
                  <th className="pb-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-brand-dark/80">
                <tr>
                  <td className="py-2.5">1 teaspoon (4g)</td>
                  <td className="py-2.5 font-bold text-brand-green">1 teaspoon (4g)</td>
                  <td className="py-2.5">Identical sweetness, 0 calories</td>
                </tr>
                <tr>
                  <td className="py-2.5">1 tablespoon (12g)</td>
                  <td className="py-2.5 font-bold text-brand-green">1 tablespoon (12g)</td>
                  <td className="py-2.5">Identical sweetness, 0 calories</td>
                </tr>
                <tr>
                  <td className="py-2.5">1/2 cup (100g)</td>
                  <td className="py-2.5 font-bold text-brand-green">1/2 cup (100g)</td>
                  <td className="py-2.5">Full recipe volume preserved</td>
                </tr>
                <tr>
                  <td className="py-2.5">1 cup (200g)</td>
                  <td className="py-2.5 font-bold text-brand-green">1 cup (200g)</td>
                  <td className="py-2.5">Perfect for cakes and halwas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Application Sections */}
        <section className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Kitchen Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center">
                <Coffee size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">Beverages</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Add directly into hot milk chai, black coffee, espresso, iced teas, and lemon water. Dissolves within seconds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center">
                <Flame size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">Cooking</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Add to tomato gravies, sweet-and-sour Indian dals, kheer, and custards. Heat-stable during simmering.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center">
                <Cake size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">Baking</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Cream with butter or blend with almond/wheat flour in cookies, brownies, muffins, and keto sponges.
              </p>
            </div>
          </div>
        </section>

        {/* Storage instructions */}
        <section className="space-y-4 bg-brand-mint-light/60 p-6 rounded-2xl border border-brand-green/20">
          <h2 className="font-serif font-bold text-xl text-brand-dark">Storage & Freshness Tips</h2>
          <ul className="space-y-2 text-xs sm:text-sm text-brand-dark/80">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-brand-green shrink-0" />
              <span>Keep inside the original foil-lined zip pouch or an airtight glass container.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-brand-green shrink-0" />
              <span>Store in a cool, dry pantry away from direct moisture and humidity.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-brand-green shrink-0" />
              <span>Always use a dry spoon to prevent moisture clumping in humid weather.</span>
            </li>
          </ul>
        </section>

        <section className="text-center pt-4">
          <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light shadow-md">
            <span>Order Monkaura 100g or 200g Packs</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </article>
    </div>
  );
}
