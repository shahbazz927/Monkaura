import React from "react";
import { Helmet } from "react-helmet-async";
import { Leaf, Sparkles, ShieldCheck, HeartPulse, Eye, Target, Quote, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const brandPillars = [
    {
      icon: <Leaf className="text-brand-green" size={24} />,
      title: "Monk Fruit, Erythritol",
      description: "Premium Monk Fruit, Erythritol for smooth, sugar-like sweetness in tea, coffee, cooking and baking. 100g Trial & 200g Everyday packs."
    },
    {
      icon: <ShieldCheck className="text-brand-green" size={24} />,
      title: "1:1 Sugar Replacement",
      description: "Tastes and measures like sugar (1:1) so you can use Monkaura easily across everyday recipes."
    },
    {
      icon: <HeartPulse className="text-brand-green" size={24} />,
      title: "Everyday Use",
      description: "Crafted for daily enjoyment — from morning tea and coffee to cooking and baking — with a focus on taste and familiarity."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-brand-cream relative overflow-hidden">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/about" />
        <title>About Monkaura | Monk Fruit, Erythritol — 100g & 200g</title>
        <meta name="description" content="Discover the Monkaura story: Monk Fruit, Erythritol for everyday tea, coffee, cooking and baking. FSSAI licensed, crafted in Hyderabad." />
        <meta name="keywords" content="about Monkaura, erythritol monk fruit India, FSSAI compliance, Hyderabad" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Monkaura | Monk Fruit, Erythritol" />
        <meta property="og:description" content="Monkaura Monk Fruit, Erythritol for everyday use. FSSAI licensed." />
        <meta property="og:url" content="https://monkaura.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Monkaura | Monk Fruit, Erythritol" />
        <meta name="twitter:description" content="Monkaura Monk Fruit, Erythritol for everyday use. FSSAI licensed." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://monkaura.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://monkaura.in/about"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Monkaura",
            "url": "https://monkaura.in/about",
            "description": "Monkaura Monk Fruit, Erythritol for everyday sweetness — 1:1 sugar replacement.",
            "mainEntity": {
              "@type": "Organization",
              "name": "MONKAURA",
              "url": "https://monkaura.in",
              "slogan": "Pure Natural Sweetness",
              "foundingLocation": {
                "@type": "Place",
                "name": "Hyderabad, India"
              }
            }
          })}
        </script>
      </Helmet>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 80 Q 50 10, 90 80 T 50 90 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Product Lineup Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4 items-center shadow-2xs justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center shrink-0">
                <Package size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-green uppercase tracking-wider">Monk Fruit, Erythritol</p>
                <p className="font-serif font-bold text-brand-dark">100g Trial Pack (₹149) & 200g Everyday Pack (₹298)</p>
                <p className="text-xs text-brand-dark/65 font-light">Crafted for everyday chai, filter coffee, home cooking, and festive baking.</p>
              </div>
            </div>
            <Link to="/products" className="hidden sm:inline-flex px-4 py-2 bg-brand-green hover:bg-brand-green-light text-white font-semibold text-xs rounded-lg transition-colors">Shop Packs →</Link>
          </div>
        </div>

        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-2xs space-y-1">
                <span className="text-3xl font-serif font-bold text-brand-green block">1:1</span>
                <span className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Direct Measure</span>
                <p className="text-xs text-brand-dark/60 font-light">Spoon for spoon — no conversion tables or liquid drops.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-2xs space-y-1">
                <span className="text-3xl font-serif font-bold text-brand-green block">100g & 200g</span>
                <span className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Trial & Family</span>
                <p className="text-xs text-brand-dark/60 font-light">Try first in chai, then stock your family pantry.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-2xs space-y-1 col-span-2">
                <span className="text-3xl font-serif font-bold text-brand-green">100%</span>
                <span className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Non-GMO Clean Formula</span>
                <p className="text-xs text-brand-dark/60 font-light">Non-GMO fermented erythritol with hot-water extracted monk fruit Mogroside V.</p>
              </div>
            </div>
            <div className="p-4 bg-brand-green text-white rounded-xl flex items-center gap-3">
              <p className="text-xs font-light leading-relaxed">
                "Our purpose is simple: to bring authentic sweetness back into the Indian household without sugar spikes or bitter aftertaste."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest block">Our Heritage & Mission</span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
              Natural sweetness for <br />
              the mindful Indian kitchen.
            </h1>
            <div className="space-y-3.5 text-brand-dark/75 text-sm sm:text-base font-light leading-relaxed">
              <p>
                India loves desserts — from rich saffron kheer to slow-roasted besan halwa and steaming morning masala chai. But for millions of families managing glucose or lifestyle goals, traditional cane sugar presents daily trade-offs.
              </p>
              <p>
                Standard artificial sweeteners fall short: stevia often brings bitter licorice notes, chemical packets raise concerns, and cooling sugar alcohols can feel synthetic in warm chai.
              </p>
              <p>
                <strong>MONKAURA</strong> was crafted in Hyderabad to solve this balance. By pairing non-GMO fermented erythritol with high-grade monk fruit extract, MONKAURA creates the natural crystalline texture and familiar sweetness of cane sugar without adding sucrose or calories.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200/70">
              {brandPillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-brand-dark">{pillar.title}</h4>
                  <p className="text-xs text-brand-dark/60 font-light leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-12 border-t border-gray-200/70">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-2xs space-y-2">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider block">Our Vision</span>
            <h2 className="font-serif font-bold text-xl text-brand-dark">A Healthier Sweetness in Every Indian Home</h2>
            <p className="text-sm text-brand-dark/75 font-light leading-relaxed">
              To normalize clean, plant-based sweetness in everyday Indian cooking — ensuring no family has to give up festival desserts, morning chai, or comfort baking.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-2xs space-y-2">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider block">Our Mission</span>
            <h2 className="font-serif font-bold text-xl text-brand-dark">Zero Added Sugar. Zero Compromise.</h2>
            <p className="text-sm text-brand-dark/75 font-light leading-relaxed">
              To produce clean-label, FSSAI-compliant table-top sweeteners that deliver uncompromising taste and reliable 1:1 culinary performance.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-brand-green text-white rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-mint/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-brand-mint/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2.5">
              <Quote className="text-brand-mint rotate-180 shrink-0" size={24} />
              <span className="text-xs font-bold text-brand-mint uppercase tracking-widest block">The Heart of Monkaura</span>
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white tracking-tight">
              Founder Story
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-brand-cream/90 italic">
              "We started with one belief—people shouldn’t have to choose between sweetness and health. Our mission is to make natural sweetness accessible for every Indian household."
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-mint">MONKAURA WELLNESS LABS</span>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mint/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mint/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
