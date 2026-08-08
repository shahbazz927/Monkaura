import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Sparkles, Check, X, ShieldAlert, Award, ArrowRight } from "lucide-react";

export default function AlluloseStory() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const keyFacts = [
    {
      title: "Seamless Culinary Browning",
      description: "Unlike erythritol, which simply melts and recrystallizes, Allulose possesses the same chemical structure as traditional fructose. This allows it to undergo genuine Maillard browning and caramelization. Create glossy flans, crispy cookies, and rich syrupy Indian sweets like Gulab Jamun effortlessly.",
      stat: "Bakes & Browns 1:1"
    },
    {
      title: "Banish the Bloat Discomfort",
      description: "Most category-standard sweeteners use Erythritol, a sugar alcohol that ferments in the colon, drawing water and causing painful bloating, gas, and stomach cramps. Allulose is absorbed in the small intestine and excreted unchanged, providing zero digestive stress.",
      stat: "Zero Digestive Bloat"
    },
    {
      title: "No Minty Cooling Aftertaste",
      description: "Ever felt a weird minty, cold sensation in your throat when eating sugar-free desserts? That's the high heat-of-solution property of erythritol. Monkaura's pure Allulose delivers a clean, warm, rounded sweetness identical to real cane sugar.",
      stat: "0% Cooling Effect"
    }
  ];

  return (
    <section id="allulose-story" className="py-16 md:py-24 bg-brand-mint-light/40 border-t border-b border-brand-green/10">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/allulose-story" />
        <title>The Science of Allulose vs Erythritol | Monkaura Rare Sugar Story</title>
        <meta name="description" content="Discover why Monkaura banished erythritol for natural Allulose — the rare sugar that bakes, browns, and caramelizes like real sugar with zero bloating, zero cooling aftertaste, and 0 glycemic index." />
        <meta name="keywords" content="allulose vs erythritol, what is allulose, rare sugar sweetener, allulose baking benefits, no bloating sweetener, natural sugar substitute India" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The Science of Allulose vs Erythritol | Monkaura Rare Sugar Story" />
        <meta property="og:description" content="Discover why Monkaura banished erythritol for natural Allulose — bakes, browns, and caramelizes like real sugar with zero bloating and 0 glycemic index." />
        <meta property="og:url" content="https://monkaura.in/allulose-story" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Science of Allulose vs Erythritol | Monkaura Rare Sugar Story" />
        <meta name="twitter:description" content="Discover why Monkaura banished erythritol for natural Allulose — bakes, browns, and caramelizes like real sugar with zero bloating." />
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
        
        {/* Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider">
              <Award size={14} />
              <span>The Science of Rare Sugar</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Why We Banished Erythritol <br />
              for Natural <span className="text-brand-green">Allulose</span>
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed font-light">
              Most brands bulk their monk fruit with cheap, industrial erythritol (sugar alcohol). At Monkaura, we believe sweetening your food should never compromise your gut comfort, baking quality, or taste buds. Here is why our raw Allulose blend stands completely apart.
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
                <span>Monkaura delivers authentic gourmet sweetness with zero metabolic consequences.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1:1 Comparison Table */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Compare & Choose</span>
            <h2 className="font-serif font-bold text-2xl text-brand-dark">How Monkaura Compares to Others</h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-green text-white text-xs sm:text-sm">
                    <th className="p-4 sm:p-6 font-serif">Sweetener Metric</th>
                    <th className="p-4 sm:p-6 font-serif bg-brand-green-dark border-l border-brand-green-light">
                      MÕNKAURA (Allulose)
                    </th>
                    <th className="p-4 sm:p-6 font-serif text-white/70">Standard Monk Fruit (Erythritol)</th>
                    <th className="p-4 sm:p-6 font-serif text-white/70">White Sugar</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm divide-y divide-gray-100 font-sans">
                  {/* Row 1: Baking & Caramelization */}
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Caramelizes & Browns?</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <div className="flex items-center gap-1.5">
                        <Check size={16} className="bg-brand-green text-white rounded-full p-0.5" />
                        <span>Yes (Undergoes Maillard browning)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <X size={14} className="text-red-500 font-bold" />
                        <span>No (Re-crystallizes/gritty)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">Yes (High Calorie)</td>
                  </tr>

                  {/* Row 2: Digestive Stress / Bloat */}
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Bloating & Stomach Gas?</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <div className="flex items-center gap-1.5">
                        <Check size={16} className="bg-brand-green text-white rounded-full p-0.5" />
                        <span>Zero (No digestive fermentation)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <ShieldAlert size={14} className="text-red-500 font-bold" />
                        <span>High (Ferments in gut)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">Low (But feeds gut yeast)</td>
                  </tr>

                  {/* Row 3: Cooling throat effect */}
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Cooling Throat Sensation?</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <div className="flex items-center gap-1.5">
                        <Check size={16} className="bg-brand-green text-white rounded-full p-0.5" />
                        <span>None (Warm sweet taste)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <ShieldAlert size={14} className="text-red-500 font-bold" />
                        <span>Strong (Cold minty throat)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">None</td>
                  </tr>

                  {/* Row 4: Glycemic index */}
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Glycemic Index (GI)</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <span>0 (Ideal for Diabetics)</span>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">0</td>
                    <td className="p-4 sm:p-6 text-gray-500">
                      <span className="text-red-500 font-semibold">65 (Spikes Blood Sugar)</span>
                    </td>
                  </tr>

                  {/* Row 5: Calories */}
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-brand-dark">Calories / serving</td>
                    <td className="p-4 sm:p-6 bg-brand-mint-light/40 border-l border-brand-mint/40 text-brand-green font-bold">
                      <span>0 kcal</span>
                    </td>
                    <td className="p-4 sm:p-6 text-gray-500">0 kcal</td>
                    <td className="p-4 sm:p-6 text-gray-500">16 kcal / tsp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
