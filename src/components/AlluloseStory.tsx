import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Sparkles, Check, X, ShieldAlert, Award, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function AlluloseStory() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const keyFacts = [
    {
      title: "Designed for Cooking and Baking",
      description: "Allulose is a rare sugar with a taste and functionality closer to sugar. It can brown and caramelize, making it suitable for many cooking and baking applications where a sugar-like result is desired.",
      stat: "Bakes & Browns"
    },
    {
      title: "Sugar-like Taste",
      description: "Allulose has a smooth, sugar-like sweetness without a cooling sensation, making it especially close to sugar.",
      stat: "Sugar-like Taste"
    },
    {
      title: "Allulose vs Erythritol",
      description: "Allulose is a rare sugar, while erythritol is a sugar alcohol that can have a cooling sensation and different baking characteristics.",
      stat: "Allulose + Monk Fruit"
    }
  ];

  return (
    <section id="allulose-story" className="py-16 md:py-24 bg-brand-mint-light/40 border-t border-b border-brand-green/10">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/allulose-story" />
        <title>Allulose vs Erythritol — Erythritol Available Now, Allulose Coming Soon | Monkaura</title>
        <meta name="description" content="Monkaura Erythritol + Monk Fruit is available now in 100g & 200g. Allulose + Monk Fruit is coming soon. Learn the difference — Allulose browns & caramelizes like sugar." />
        <meta name="keywords" content="allulose vs erythritol, what is allulose, rare sugar, allulose coming soon, erythritol monk fruit" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Allulose vs Erythritol — Erythritol Now, Allulose Coming Soon | Monkaura" />
        <meta property="og:description" content="Erythritol + Monk Fruit available now. Allulose + Monk Fruit coming soon — learn why it bakes & browns like sugar." />
        <meta property="og:url" content="https://monkaura.in/allulose-story" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Allulose vs Erythritol — Erythritol Now, Allulose Coming Soon" />
        <meta name="twitter:description" content="Erythritol + Monk Fruit available now. Allulose + Monk Fruit coming soon." />
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
                "name": "Allulose Story",
                "item": "https://monkaura.in/allulose-story"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Coming Soon Banner */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-[1.5px] shadow-lg">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-[14px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0"><Clock size={18} /></div>
                <div>
                  <p className="text-xs font-black tracking-widest uppercase text-amber-800">Allulose + Monk Fruit — Coming Soon</p>
                  <p className="text-sm text-brand-dark/80 font-light">Our next blend — designed to bake, brown & caramelize like real sugar. Stay tuned.</p>
                </div>
              </div>
              <Link to="/products" className="shrink-0 px-6 py-2.5 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs rounded-xl shadow-md whitespace-nowrap">Shop Erythritol + Monk Fruit Now</Link>
            </div>
          </div>

        </div>

        {/* Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider">
              <Award size={14} />
              <span>Allulose + Monk Fruit</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Allulose vs Erythritol: <br />
              <span className="text-brand-green">What’s the Difference?</span>
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed font-light">
              Confused between Allulose and Erythritol? Here’s a simple breakdown. Allulose is a rare sugar with a sugar-like taste, while erythritol is a sugar alcohol with different characteristics.
            </p>
          </div>
        </div>

        {/* Interactive Features tab slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-5 space-y-4">
            {keyFacts.map((fact, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeFeature === index
                    ? "bg-white border-brand-green shadow-lg scale-102"
                    : "bg-transparent border-gray-100 hover:border-brand-green/20 hover:bg-white/50"
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[10px] uppercase tracking-widest font-bold block ${
                    activeFeature === index ? "text-brand-green" : "text-brand-dark/40"
                  }`}>
                    Reason 0{index + 1}
                  </span>
                  <span className="font-serif font-extrabold text-base sm:text-lg text-brand-dark">
                    {fact.title}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  activeFeature === index ? "bg-brand-green text-white" : "bg-gray-100 text-brand-dark/40"
                }`}>
                  <ArrowRight size={14} className={`transform transition-transform ${activeFeature === index ? "rotate-0" : "-rotate-45"}`} />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <span className="text-4xl font-black text-brand-green block font-serif">
                {keyFacts[activeFeature].stat}
              </span>
              
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-brand-dark border-b border-gray-100 pb-4">
                {keyFacts[activeFeature].title}
              </h2>
              
              <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed font-light">
                {keyFacts[activeFeature].description}
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold bg-brand-mint-light p-3 rounded-xl border border-brand-mint/40">
                <Sparkles size={16} />
                <span>Monkaura Erythritol + Monk Fruit is available now for everyday use.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1:1 Comparison Table */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Compare & Choose</span>
            <h2 className="font-serif font-bold text-2xl text-brand-dark">How They Compare</h2>

          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-green text-white text-xs sm:text-sm">
                    <th className="p-4 sm:p-6 font-serif">Sweetener Metric</th>
                    <th className="p-4 sm:p-6 font-serif bg-brand-green-dark border-l border-brand-green-light">
                      Erythritol + Monk Fruit
                    </th>
                    <th className="p-4 sm:p-6 font-serif bg-amber-600 border-l border-amber-500">
                      Allulose + Monk Fruit
                    </th>
                    <th className="p-4 sm:p-6 font-serif text-white/70">White Sugar</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm divide-y divide-gray-100 font-sans">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Caramelizes & Browns?</td>
                    <td className="p-4 sm:p-6 text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <X size={14} className="text-amber-500 font-bold" />
                        <span>Limited (different behavior)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 bg-amber-50 border-l border-amber-100 text-amber-800 font-bold">
                      <div className="flex items-center gap-1.5">
                        <Check size={16} className="bg-amber-500 text-white rounded-full p-0.5" />
                        <span>Yes — Browns like sugar</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">Yes (High Calorie)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Sweetener Type</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <span>Sugar alcohol + Monk Fruit</span>
                    </td>
                    <td className="p-4 sm:p-6 bg-amber-50 border-l border-amber-100 text-amber-800 font-bold">
                      <span>Rare sugar + Monk Fruit</span>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">Sugar</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Cooling Sensation</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <span>Mild cooling possible</span>
                    </td>
                    <td className="p-4 sm:p-6 bg-amber-50 border-l border-amber-100 text-amber-800 font-bold">
                      <span>Sugar-like, no cooling</span>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">Sugar-like taste</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Best For</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <span>Everyday tea, coffee, cooking & baking</span>
                    </td>
                    <td className="p-4 sm:p-6 bg-amber-50 border-l border-amber-100 text-amber-800 font-bold">
                      <span>Same + enhanced baking & Indian sweets</span>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">
                      <span>All uses (high calorie)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Calories / serving</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <span>0 kcal</span>
                    </td>
                    <td className="p-4 sm:p-6 bg-amber-50 border-l border-amber-100 text-amber-800 font-bold">
                      <span>0 kcal</span>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">16 kcal / tsp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-sm rounded-xl shadow-md">
              Shop Erythritol + Monk Fruit Now <ArrowRight size={16} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
