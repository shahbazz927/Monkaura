import React from "react";
import { Helmet } from "react-helmet-async";
import { Leaf, Sparkles, ShieldCheck, HeartPulse, Eye, Target, Quote, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const brandPillars = [
    {
      icon: <Leaf className="text-brand-green" size={24} />,
      title: "Erythritol + Monk Fruit",
      description: "Premium Erythritol + Monk Fruit for smooth, sugar-like sweetness in tea, coffee, cooking and baking. 100g Trial & 200g Everyday packs."
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
        <title>About Monkaura | Erythritol + Monk Fruit — 100g & 200g</title>
        <meta name="description" content="Discover the Monkaura story: Erythritol + Monk Fruit for everyday tea, coffee, cooking and baking. FSSAI certified, crafted in Hyderabad." />
        <meta name="keywords" content="about Monkaura, erythritol monk fruit India, FSSAI certified, Hyderabad" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Monkaura | Erythritol + Monk Fruit" />
        <meta property="og:description" content="Monkaura Erythritol + Monk Fruit for everyday use. FSSAI certified." />
        <meta property="og:url" content="https://monkaura.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Monkaura | Erythritol + Monk Fruit" />
        <meta name="twitter:description" content="Monkaura Erythritol + Monk Fruit for everyday use. FSSAI certified." />
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
            "description": "Monkaura Erythritol + Monk Fruit for everyday sweetness — 1:1 sugar replacement.",
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
          <div className="bg-white rounded-2xl border border-brand-green/10 p-5 flex gap-4 items-center shadow-sm justify-between">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-green text-white flex items-center justify-center shrink-0"><Package size={18} /></div>
              <div>
                <p className="text-[11px] font-black tracking-widest uppercase text-brand-green">Erythritol + Monk Fruit</p>
                <p className="font-serif font-bold text-brand-dark">100g Trial Pack & 200g Everyday Pack</p>
                <p className="text-xs text-brand-dark/60 font-light mt-1">Try the sweetness. Make the switch — for everyday tea, coffee, cooking and baking.</p>
              </div>
            </div>
            <Link to="/products" className="hidden sm:inline-flex px-5 py-2.5 bg-brand-green text-white font-bold text-xs rounded-xl">Shop Now →</Link>
          </div>
        </div>

        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-2">
                <span className="text-3xl font-serif font-black text-brand-green block">1:1</span>
                <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">Sugar Replacement</span>
                <p className="text-[10px] text-brand-dark/50 font-light">Both blends work 1:1 — no complicated math.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-2">
                <span className="text-3xl font-serif font-black text-brand-green block">100g</span>
                <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">Trial & 200g</span>
                <p className="text-[10px] text-brand-dark/50 font-light">Try first, then go everyday.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-2 col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-serif font-black text-brand-green">100%</span>
                  <span className="text-xs font-black text-white bg-brand-orange px-2 py-0.5 rounded-full uppercase tracking-wider">NEW</span>
                </div>
                <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">Clean-Label Philosophy</span>
                <p className="text-[10px] text-brand-dark/50 font-light">Premium taste, quality, and mindful modern living.</p>
              </div>
            </div>
            <div className="p-4 bg-brand-green text-white rounded-2xl flex items-center gap-3 shadow-md">
              <div className="p-2 bg-white/10 rounded-xl text-brand-mint shrink-0">
                <Sparkles size={20} />
              </div>
              <p className="text-xs font-light leading-relaxed">
                "Our mission is simple: to bring genuine sweetness back into the Indian household without compromising on taste."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">Our Heritage & Mission</span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
              Crafting Pure Natural Sweetness <br />
              for the Health-Conscious Indian
            </h1>
            <div className="space-y-4 text-brand-dark/80 text-sm sm:text-base font-light leading-relaxed">
              <p>
                India loves desserts—from creamy Kheer to warm Halwa. But for millions of families, traditional sugar is a hurdle.
              </p>
              <p>
                Standard sugar-free options often fall short — stevia can taste bitter, and some blends leave a cooling sensation that doesn't feel like sugar.
              </p>
              <p>
                <strong>Monkaura Erythritol + Monk Fruit</strong> is available in a <strong>100g Trial Pack</strong> for first-time trying and a <strong>200g Everyday Pack</strong> for regular cooking. It delivers smooth, sugar-like sweetness for everyday tea, coffee, cooking and baking.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-brand-green/10">
              {brandPillars.map((pillar, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="p-2.5 bg-brand-mint/60 w-10 h-10 rounded-xl flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-brand-dark">{pillar.title}</h4>
                  <p className="text-xs text-brand-dark/60 font-light leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-brand-green/10">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/10 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" />
            <div className="flex items-center gap-3.5 mb-5 relative z-10">
              <div className="p-3 bg-brand-mint/40 rounded-2xl text-brand-green">
                <Eye size={22} />
              </div>
              <div>
                <span className="text-[10px] font-black text-brand-gold-dark uppercase tracking-widest block leading-none mb-1">Our Horizon</span>
                <h2 className="font-serif font-extrabold text-xl text-brand-dark">VISION</h2>
              </div>
            </div>
            <p className="text-sm text-brand-dark/80 font-light leading-relaxed relative z-10">
              To transform how India experiences sweetness — making healthier, natural alternatives part of every home without compromising taste or everyday moments.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" />
            <div className="flex items-center gap-3.5 mb-5 relative z-10">
              <div className="p-3 bg-brand-gold/20 rounded-2xl text-brand-gold-dark">
                <Target size={22} />
              </div>
              <div>
                <span className="text-[10px] font-black text-brand-gold-dark uppercase tracking-widest block leading-none mb-1">Our Promise</span>
                <h2 className="font-serif font-extrabold text-xl text-brand-dark">MISSION</h2>
              </div>
            </div>
            <p className="text-sm text-brand-dark/80 font-light leading-relaxed relative z-10">
              To help people reduce refined sugar with a delicious, natural, easy-to-use sweetener for beverages and everyday cooking.
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
