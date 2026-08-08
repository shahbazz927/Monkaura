import React from "react";
import { Helmet } from "react-helmet-async";
import { Leaf, Sparkles, ShieldCheck, HeartPulse, Eye, Target, Quote } from "lucide-react";

export default function About() {
  const brandPillars = [
    {
      icon: <Leaf className="text-brand-green" size={24} />,
      title: "100% Earth-Sourced",
      description: "Our monk fruit extract and natural rare Allulose are strictly sourced from premium, verified non-GMO natural farms. No laboratory synthetics or chemicals."
    },
    {
      icon: <ShieldCheck className="text-brand-green" size={24} />,
      title: "Gut-First Safety",
      description: "We are the first brand in India to completely eliminate erythritol, xylitol, and malititol, shielding our consumers from gas, bloating, and digestive discomfort."
    },
    {
      icon: <HeartPulse className="text-brand-green" size={24} />,
      title: "Perfect Diabetic Harmony",
      description: "Our rare Allulose sugar is metabolically inert. It passes through your system with exactly zero spikes in insulin or blood glucose levels. Clean sweetness for all."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-brand-cream relative overflow-hidden">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/about" />
        <title>About Monkaura | India's Pure Monk Fruit & Allulose Sweetener Brand</title>
        <meta name="description" content="Discover the Monkaura story: India's first erythritol-free, FSSAI-certified monk fruit & allulose sweetener brand. Zero calories, zero glycemic impact, crafted in Hyderabad for health-conscious Indian homes." />
        <meta name="keywords" content="about Monkaura, Monkaura story, monk fruit sweetener brand India, FSSAI certified sweetener, allulose brand India, Hyderabad health startup" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Monkaura | India's Pure Monk Fruit & Allulose Sweetener Brand" />
        <meta property="og:description" content="Discover the Monkaura story: India's first erythritol-free, FSSAI-certified monk fruit & allulose sweetener brand. Zero calories, zero glycemic impact." />
        <meta property="og:url" content="https://monkaura.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Monkaura | India's Pure Monk Fruit & Allulose Sweetener Brand" />
        <meta name="twitter:description" content="Discover the Monkaura story: India's first erythritol-free, FSSAI-certified monk fruit & allulose sweetener brand." />
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
            "description": "Monkaura is India's premier erythritol-free monk fruit and allulose sweetener brand, founded with a mission to bring natural sweetness to every Indian home.",
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
      {/* Decorative leaf sketch backdrop overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 80 Q 50 10, 90 80 T 50 90 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stats and Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-2">
                <span className="text-3xl font-serif font-black text-brand-green block">0g</span>
                <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">Net Glycemic Impact</span>
                <p className="text-[10px] text-brand-dark/50 font-light">Safe for type-1 and type-2 diabetes.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-2">
                <span className="text-3xl font-serif font-black text-brand-green block">1:1</span>
                <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">Sugar Replacement</span>
                <p className="text-[10px] text-brand-dark/50 font-light">No complicated recipe math required.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md space-y-2 col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-serif font-black text-brand-green">100%</span>
                  <span className="text-xs font-black text-white bg-brand-orange px-2 py-0.5 rounded-full uppercase tracking-wider">NEW</span>
                </div>
                <span className="text-xs font-bold text-brand-dark/60 uppercase tracking-widest block">Clean-Label Philosophy</span>
                <p className="text-[10px] text-brand-dark/50 font-light">Carefully designed for premium taste, quality, and mindful modern living.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-green text-white rounded-2xl flex items-center gap-3 shadow-md">
              <div className="p-2 bg-white/10 rounded-xl text-brand-mint shrink-0">
                <Sparkles size={20} />
              </div>
              <p className="text-xs font-light leading-relaxed">
                "Our mission is simple: to bring genuine gourmet-grade, zero-calorie sweetness back into the Indian household without compromising on taste, texture, or digestive comfort."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">Our Heritage & Mission</span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight">
              Crafting Pure Natural Sweetness <br />
              for the Health-Conscious Indian
            </h1>
            
            <div className="space-y-4 text-brand-dark/80 text-sm sm:text-base font-light leading-relaxed">
              <p>
                India loves desserts—from the creamy textures of saffron Kheer to the rich caramelization of warm Halwa. But for millions of health-conscious families, keto dieters, and diabetics, traditional table sugar represents a dangerous health hurdle.
              </p>
              <p>
                We realized that standard sugar-free options simply weren't good enough. Stevia carries a bitter, medicinal metallic aftertaste, while cheap bulk sweeteners leave an uncomfortable cooling throat sensation and cause digestive issues.
              </p>
              <p>
                <strong>Monkaura was born out of a desire for perfection.</strong> By blending hand-picked pure Monk Fruit extracts with premium natural Allulose, we achieved the holy grail of sweetening: a sugar replacement that behaves, bakes, and tastes exactly like real sugar, with zero calories, zero stomach bloat, and zero glycemic spikes.
              </p>
            </div>

            {/* Pillar benefits row */}
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
          {/* Vision card */}
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
              To transform the way India experiences sweetness by making healthier, natural alternatives a part of every home—without compromising taste, tradition, or everyday moments.
            </p>
          </div>

          {/* Mission card */}
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
              To help people reduce their dependence on refined sugar by providing a delicious, natural, and easy-to-use monk fruit sweetener for cooking, baking, beverages, and everyday living—supporting healthier choices for every generation.
            </p>
          </div>
        </div>

        {/* Founder Story Section */}
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
              "We started with one simple belief—people shouldn’t have to choose between sweetness and health. Our mission is to make natural sweetness accessible for everyone and inspire Indian households to cook, bake, and enjoy life with less sugar and more balance."
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
