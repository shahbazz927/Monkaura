import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, ShieldCheck, Check } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";

export default function WhatIsMonkFruit() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>What Is Monk Fruit (Siraitia grosvenorii)? History & Science | MONKAURA</title>
        <meta
          name="description"
          content="Discover what monk fruit is: botanical classification (Siraitia grosvenorii / Luo Han Guo), origin in southern China, traditional uses, and modern extraction."
        />
        <meta
          name="keywords"
          content="what is monk fruit, luo han guo, siraitia grosvenorii, monk fruit origin, monk fruit melon"
        />
        <link rel="canonical" href="https://monkaura.in/what-is-monk-fruit" />
        <meta property="og:title" content="What Is Monk Fruit (Siraitia grosvenorii)? History & Science" />
        <meta property="og:description" content="Discover the botanical origin, history, and natural science behind monk fruit." />
        <meta property="og:url" content="https://monkaura.in/what-is-monk-fruit" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Is Monk Fruit (Siraitia grosvenorii)?",
            "description": "An in-depth look at monk fruit botanical classification, traditional Chinese cultivation, and modern natural extraction methods.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/what-is-monk-fruit"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Monk Fruit Guide", "item": "https://monkaura.in/monk-fruit-sweetener-guide" },
              { "@type": "ListItem", "position": 3, "name": "What is Monk Fruit", "item": "https://monkaura.in/what-is-monk-fruit" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Monk Fruit Guide", url: "/monk-fruit-sweetener-guide" },
          { name: "What is Monk Fruit", url: "/what-is-monk-fruit" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <Leaf size={14} />
            <span>Botanical Profile & History</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            What Is Monk Fruit (Luo Han Guo)?
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Known scientifically as <em>Siraitia grosvenorii</em> and revered in Asia for generations as <strong>Luo Han Guo</strong>, monk fruit is a small, round sub-tropical melon that yields one of nature's sweetest natural compounds.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">Botanical Classification & Native Habitat</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Monk fruit belongs to the <strong>Cucurbitaceae family</strong> (which also includes pumpkins, cucumbers, and melons). It is a perennial herbaceous vine that thrives only in narrow geographic microclimates — specifically the steep, cloud-covered forested mountains of Guangxi in Southern China.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            The plant grows by climbing trees and trellises, producing round green fruits approximately 5 to 7 centimeters in diameter. Because the fresh fruit ferments quickly after picking, traditional growers dried the fruits over slow wood-fired kilns, creating a dark, fragrant dried shell historically used for herbal decoctions.
          </p>
        </section>

        <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">The History of the Buddhist Monks</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            The name <em>Monk Fruit</em> originates from the 13th-century Buddhist luóhàn (arhat) monks who cultivated and studied the vine in secluded mountain monasteries. The monks brewed dried fruit infusions as a soothing throat tea and a gentle digestive tonic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-brand-cream/60 rounded-xl border border-gray-100 space-y-1">
              <span className="font-bold text-brand-dark text-sm">13th Century Discovery</span>
              <p className="text-xs text-brand-dark/70">Documented by Buddhist practitioners in Guangxi province.</p>
            </div>
            <div className="p-4 bg-brand-cream/60 rounded-xl border border-gray-100 space-y-1">
              <span className="font-bold text-brand-dark text-sm">Modern Purification</span>
              <p className="text-xs text-brand-dark/70">Water-extracted to isolate pure Mogroside V crystals without sugar.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">How Monk Fruit Differs from Other Fruits</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            In virtually all common fruits (apples, grapes, bananas), sweetness comes from simple sugars like fructose and glucose, which are metabolized into energy and trigger an elevation in blood glucose.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Monk fruit is biologically unique: while it contains trace fructose when raw, its remarkable sweetness is driven by <strong>mogrosides</strong> — complex triterpene glycoside antioxidants that the human body does not digest as calories or convert into blood sugar.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-serif font-bold text-xl text-brand-dark">Monk Fruit in Modern Indian Kitchens</h2>
          <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
            In MONKAURA, monk fruit extract is combined with non-GMO erythritol to deliver a clean, granular 1:1 sugar alternative formulated specifically for Indian teas, filter coffee, and cooking.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link to="/how-monk-fruit-sweetener-works" className="text-xs font-bold text-brand-green hover:underline">
              Read How Mogrosides Work →
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/products" className="text-xs font-bold text-brand-green hover:underline">
              Shop Monkaura Sweeteners →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
