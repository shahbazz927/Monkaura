import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";

export default function HowMonkFruitWorks() {
  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>How Monk Fruit Sweetener Works: Mogrosides & Sweetness Science | MONKAURA</title>
        <meta
          name="description"
          content="Understand how monk fruit sweetener works: Mogroside V extraction, biological sweetness receptors, non-caloric metabolism, and blending science."
        />
        <meta
          name="keywords"
          content="how monk fruit works, mogroside v, mogrosides sweetness, non caloric sweetener science, erythritol monk fruit synergy"
        />
        <link rel="canonical" href="https://monkaura.in/how-monk-fruit-sweetener-works" />
        <meta property="og:title" content="How Monk Fruit Sweetener Works: Mogrosides & Sweetness Science" />
        <meta property="og:description" content="Explore the biochemical mechanism behind monk fruit's intense sweetness and zero-calorie metabolism." />
        <meta property="og:url" content="https://monkaura.in/how-monk-fruit-sweetener-works" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Monk Fruit Sweetener Works: Mogrosides & Sweetness Science",
            "description": "Biochemical analysis of Mogroside V, human sweet taste receptor binding (T1R2/T1R3), and zero-glycemic metabolic pathways.",
            "author": { "@type": "Organization", "name": "MONKAURA" },
            "publisher": { "@type": "Organization", "name": "MONKAURA" },
            "mainEntityOfPage": "https://monkaura.in/how-monk-fruit-sweetener-works"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Monk Fruit Guide", "item": "https://monkaura.in/monk-fruit-sweetener-guide" },
              { "@type": "ListItem", "position": 3, "name": "How It Works", "item": "https://monkaura.in/how-monk-fruit-sweetener-works" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Monk Fruit Guide", url: "/monk-fruit-sweetener-guide" },
          { name: "How It Works", url: "/how-monk-fruit-sweetener-works" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <Sparkles size={14} />
            <span>Biochemical Mechanism</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            How Monk Fruit Sweetener Works: The Science of Mogrosides
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Why does monk fruit taste intensely sweet while providing 0 kcal energy and 0g net carbs? The answer lies in the unique molecular structure of <strong>Mogroside V</strong> and the human gustatory receptor system.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">1. The Chemistry of Mogroside V</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Mogrosides are a family of cucurbitane-type triterpenoid glycosides found inside the fleshy pulp of monk fruit. Among these compounds, <strong>Mogroside V</strong> is the most abundant and responsible for the primary clean sweetness profile.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3 text-xs sm:text-sm text-brand-dark/80">
            <p className="font-semibold text-brand-dark">Key Molecular Characteristics:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                <span><strong>High Sweetness Potency:</strong> Mogroside V is approximately 250 times sweeter than sucrose by weight.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                <span><strong>Natural Antioxidant Properties:</strong> Mogrosides possess documented free-radical scavenging capabilities in plant physiology.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                <span><strong>Thermal Stability:</strong> Unlike aspartame which degrades under heat, mogrosides remain stable up to high cooking temperatures (up to 200°C).</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">2. How the Body Processes Monk Fruit</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            When you consume sugar, salivary enzymes and intestinal disaccharidases rapidly split sucrose into glucose and fructose, which are absorbed into the bloodstream, elevating blood sugar.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            In contrast, the human upper gastrointestinal tract lacks the specific glycosidase enzymes needed to break down mogroside bonds into simple energy sugars. As a result, mogrosides travel through the digestive system without being converted into cellular energy or blood glucose, leading to a zero-calorie, non-glycemic profile.
          </p>
        </section>

        <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs">
          <h2 className="font-serif font-bold text-2xl text-brand-dark">3. The Synergistic Blend in MONKAURA</h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Because Mogroside V is 250 times sweeter than sugar, using pure extract in the kitchen is impractical. MONKAURA co-crystallizes monk fruit extract with fermented, non-GMO <strong>Erythritol</strong>.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            This synergy produces two critical benefits:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-brand-cream/60 rounded-xl border border-gray-100">
              <h3 className="font-bold text-brand-dark text-sm mb-1">1:1 Physical Substitution</h3>
              <p className="text-xs text-brand-dark/70">Erythritol provides the bulk, crystal texture, and solubility needed to measure spoon-for-spoon like sugar.</p>
            </div>
            <div className="p-4 bg-brand-cream/60 rounded-xl border border-gray-100">
              <h3 className="font-bold text-brand-dark text-sm mb-1">Balanced Flavor Curve</h3>
              <p className="text-xs text-brand-dark/70">Monk fruit's deep sweetness rounds out erythritol's mild cooling effect, achieving a clean, balanced sweet taste.</p>
            </div>
          </div>
        </section>

        <section className="p-6 bg-brand-mint-light rounded-2xl border border-brand-green/20 text-center space-y-3">
          <h2 className="font-serif font-bold text-xl text-brand-dark">Explore MONKAURA 1:1 Sweeteners</h2>
          <p className="text-xs sm:text-sm text-brand-dark/70 max-w-md mx-auto">
            Available in 100g Trial Pack (₹149) and 200g Everyday Pack (₹298).
          </p>
          <div className="pt-1">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light">
              <span>View Product Packs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
