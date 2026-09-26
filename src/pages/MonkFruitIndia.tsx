import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, Coffee, Flame, Cake, Sparkles, HelpCircle, ShoppingBag } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import ProductFactsCard from "../components/ProductFactsCard";
import { PRODUCTS } from "../data";
import { Product } from "../types";

interface MonkFruitIndiaProps {
  onAddToCart?: (product: Product, quantity: number) => void;
}

export default function MonkFruitIndia({ onAddToCart }: MonkFruitIndiaProps) {
  const navigate = useNavigate();

  const faqData = [
    {
      q: "What is monk fruit sweetener?",
      a: "Monk fruit sweetener is a natural zero-calorie sweetener derived from the juice extract of monk fruit (Siraitia grosvenorii), a small melon native to southern China. Its intense sweetness comes from natural antioxidant compounds called mogrosides."
    },
    {
      q: "Is monk fruit sweetener available in India?",
      a: "Yes. MONKAURA offers a premium monk fruit sweetener blend in India, formulated with non-GMO Erythritol and Monk Fruit extract to create a practical 1:1 sugar replacement suitable for daily Indian cooking, tea, coffee, and baking."
    },
    {
      q: "Why is monk fruit blended with erythritol in MONKAURA?",
      a: "Pure monk fruit extract is approximately 150 to 250 times sweeter than table sugar, making it impossible to measure in typical kitchen recipes. Blending it with non-GMO erythritol creates a crystalline texture and volume that measures teaspoon-for-teaspoon (1:1) exactly like sugar."
    },
    {
      q: "Does MONKAURA have a bitter or metallic aftertaste?",
      a: "No. Unlike stevia, which contains bitter steviol glycosides, or artificial sweeteners like saccharin, MONKAURA's balanced blend of monk fruit and erythritol delivers a clean, smooth, sugar-like taste without lingering bitterness."
    },
    {
      q: "Can I use monk fruit sweetener in hot Indian chai and filter coffee?",
      a: "Yes. MONKAURA is fully heat-stable up to 200°C and dissolves effortlessly in hot beverages like masala chai, ginger tea, and South Indian filter coffee without breaking down or altering its flavor profile."
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <Helmet>
        <title>Monk Fruit Sweetener in India | MONKAURA</title>
        <meta
          name="description"
          content="Learn about monk fruit sweetener, its ingredients, sweetness, uses, nutrition, and how MONKAURA's monk fruit blend can be used as a 1:1 sugar replacement."
        />
        <meta
          name="keywords"
          content="monk fruit sweetener india, monk fruit india, buy monk fruit sweetener, 1:1 sugar replacement, erythritol monk fruit blend, monkaura"
        />
        <link rel="canonical" href="https://monkaura.in/monk-fruit-sweetener-india" />
        <meta property="og:title" content="Monk Fruit Sweetener in India | MONKAURA" />
        <meta
          property="og:description"
          content="Comprehensive guide to monk fruit sweetener in India. Ingredients, 1:1 sugar replacement ratio, tea, coffee, baking, and nutrition."
        />
        <meta property="og:url" content="https://monkaura.in/monk-fruit-sweetener-india" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={PRODUCTS[0]?.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monk Fruit Sweetener in India | MONKAURA" />
        <meta
          name="twitter:description"
          content="Learn about monk fruit sweetener in India: uses, nutrition, and 1:1 sugar substitution."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Monk Fruit Sweetener in India: Comprehensive Guide",
            "description": "Learn about monk fruit sweetener, its ingredients, sweetness, uses, nutrition, and how MONKAURA's monk fruit blend can be used as a 1:1 sugar replacement in India.",
            "image": PRODUCTS[0]?.image,
            "author": {
              "@type": "Organization",
              "name": "MONKAURA",
              "url": "https://monkaura.in"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MONKAURA",
              "logo": {
                "@type": "ImageObject",
                "url": "https://monkaura.in/logo.png"
              }
            },
            "mainEntityOfPage": "https://monkaura.in/monk-fruit-sweetener-india"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Monk Fruit Sweetener India", "item": "https://monkaura.in/monk-fruit-sweetener-india" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Monk Fruit Sweetener in India", url: "/monk-fruit-sweetener-india" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Header Block */}
        <header className="space-y-4 text-center sm:text-left border-b border-gray-200/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase tracking-wider">
            Authoritative Guide & Product Insights
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-brand-dark tracking-tight leading-tight">
            Monk Fruit Sweetener in India
          </h1>
          <p className="text-base sm:text-lg text-brand-dark/70 font-light leading-relaxed">
            As consumers across India seek mindful ways to reduce refined sugar in everyday chai, filter coffee, desserts, and cooking, monk fruit sweetener has emerged as one of the most celebrated natural alternatives. Here is everything you need to know about its origin, ingredients, culinary performance, and how MONKAURA provides a true 1:1 sugar replacement.
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            What Is Monk Fruit Sweetener?
          </h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Monk fruit, also known scientifically as <em>Siraitia grosvenorii</em> and traditionally as <strong>Luo Han Guo</strong>, is a small, herbaceous round melon native to the forested mountains of Southern China and Southeast Asia. Cultivated for centuries by Buddhist monks for its soothing herbal infusions, the fruit has gained global recognition as a natural source of high-intensity sweetness with zero caloric burden.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Unlike traditional fruits whose sweetness stems from fructose and glucose, monk fruit's sweetness is concentrated in unique, non-caloric antioxidants called <strong>mogrosides</strong>. When the fruit is crushed and infused in hot water, these mogrosides are filtered and purified to create a concentrated sweetener that is 150 to 250 times sweeter than standard sucrose (table sugar).
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            How Monk Fruit Gets Its Sweetness
          </h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            The sweetness of monk fruit comes specifically from <strong>Mogroside V</strong>, a triterpene glycoside. Because the human digestive tract does not metabolize mogrosides as energy, they pass through the digestive system without breaking down into glucose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-brand-cream/80 p-4 rounded-xl border border-gray-100 text-center">
              <span className="block text-2xl font-bold text-brand-green">150–250x</span>
              <span className="text-xs text-brand-dark/70 mt-1">Sweeter than table sugar in its pure extract form</span>
            </div>
            <div className="bg-brand-cream/80 p-4 rounded-xl border border-gray-100 text-center">
              <span className="block text-2xl font-bold text-brand-green">0 kcal</span>
              <span className="text-xs text-brand-dark/70 mt-1">Zero caloric contribution per standard serving</span>
            </div>
            <div className="bg-brand-cream/80 p-4 rounded-xl border border-gray-100 text-center">
              <span className="block text-2xl font-bold text-brand-green">0g Net Carbs</span>
              <span className="text-xs text-brand-dark/70 mt-1">Non-glycemic ingredient profile for low-carb lifestyles</span>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            What Is MONKAURA?
          </h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            <strong>MONKAURA</strong> is an Indian brand founded in Hyderabad dedicated to bringing pure, practical, and clean natural sweetness to modern Indian homes. Recognizing that pure monk fruit extract is far too concentrated for everyday kitchen use (where a pinhead amount would over-sweeten a cup of tea), MONKAURA expertly blends high-purity Monk Fruit Extract with non-GMO Erythritol.
          </p>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            The result is a crystalline, granular sweetener that behaves, measures, and tastes just like sugar — spoon for spoon, cup for cup.
          </p>
        </section>

        {/* Product Facts Card */}
        <ProductFactsCard />

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            MONKAURA Ingredients
          </h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            MONKAURA contains strictly two verified, natural ingredients:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-mint text-brand-green flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                1
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-sm sm:text-base">Non-GMO Erythritol</h4>
                <p className="text-xs sm:text-sm text-brand-dark/70 mt-0.5">
                  A naturally occurring polyol produced via fermentation of non-GMO plant starches. It provides the essential physical bulk, crystalline texture, and clean dissolution required for 1:1 measurement.
                </p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-mint text-brand-green flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                2
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-sm sm:text-base">Monk Fruit Extract (Siraitia grosvenorii)</h4>
                <p className="text-xs sm:text-sm text-brand-dark/70 mt-0.5">
                  Standardized Mogroside V extract that provides intense, pure sweetness without the bitter notes commonly associated with stevia leaf extracts.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-brand-dark/60 italic">
            * Free from aspartame, sucralose, acesulfame potassium, saccharin, maltodextrin, and artificial preservatives.
          </p>
        </section>

        {/* Section 5 & 6 */}
        <section className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            How MONKAURA Works as a Sugar Replacement
          </h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            In standard recipes, sugar does more than simply sweeten — it contributes volume, bulk, texture, and moisture retention. MONKAURA’s precise ratio of erythritol crystals and monk fruit extract matches the sweetness profile and density of granulated cane sugar:
          </p>
          <div className="bg-brand-mint-light p-4 rounded-xl text-center border border-brand-green/20">
            <p className="font-serif font-extrabold text-xl text-brand-green">
              1 Teaspoon MONKAURA = 1 Teaspoon Sugar
            </p>
            <p className="text-xs text-brand-dark/70 mt-1">
              No complicated conversion tables, mathematical charts, or liquid drop calculations.
            </p>
          </div>
        </section>

        {/* Sections 7, 8, 9: Culinary Applications */}
        <section className="space-y-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            How to Use MONKAURA in Everyday Cooking & Beverages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center">
                <Coffee size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">MONKAURA for Tea & Coffee</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Add 1 teaspoon directly into hot masala chai, green tea, or South Indian filter coffee. It dissolves instantly and preserves the authentic aroma of roasted coffee beans and tea leaves.
              </p>
              <Link to="/monk-fruit-sweetener-for-tea-and-coffee" className="inline-block text-xs font-bold text-brand-green hover:underline">
                Read Tea & Coffee Guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center">
                <Flame size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">MONKAURA for Cooking</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Heat-stable up to 200°C. Ideal for sweet curries, Gujarati dal, tomato sauces, kheer, and traditional Indian halwas without losing sweetness when boiled.
              </p>
              <Link to="/how-to-use-monk-fruit-sweetener" className="inline-block text-xs font-bold text-brand-green hover:underline">
                Read Cooking Guide →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-green flex items-center justify-center">
                <Cake size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark">MONKAURA for Baking</h3>
              <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                Use 1:1 by volume for cakes, cookies, keto muffins, and custards. Provides structure and clean sweetness without altering dough hydration.
              </p>
              <Link to="/monk-fruit-sweetener-for-baking" className="inline-block text-xs font-bold text-brand-green hover:underline">
                Read Baking Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: Nutrition */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            MONKAURA Nutrition Facts
          </h2>
          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-xs p-4 sm:p-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-brand-dark/60 font-bold">
                  <th className="pb-3">Nutrient</th>
                  <th className="pb-3">Per 4g Serving (1 tsp)</th>
                  <th className="pb-3">Per 100g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-brand-dark/80">
                <tr>
                  <td className="py-2.5 font-medium">Energy / Calories</td>
                  <td className="py-2.5 font-bold text-brand-green">0 kcal</td>
                  <td className="py-2.5 font-bold text-brand-green">0 kcal</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium">Total Fat</td>
                  <td className="py-2.5">0 g</td>
                  <td className="py-2.5">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium">Added Sugars / Sucrose</td>
                  <td className="py-2.5 font-bold text-brand-green">0 g</td>
                  <td className="py-2.5 font-bold text-brand-green">0 g</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium">Total Carbohydrates (Polyols)</td>
                  <td className="py-2.5">4 g (Erythritol)*</td>
                  <td className="py-2.5">100 g (Erythritol)*</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium">Sodium</td>
                  <td className="py-2.5">0 mg</td>
                  <td className="py-2.5">0 mg</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium">Protein</td>
                  <td className="py-2.5">0 g</td>
                  <td className="py-2.5">0 g</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[11px] text-brand-dark/50 mt-3">
              * Erythritol carbohydrates are not metabolized into energy or blood glucose in the body and are excreted unchanged. Net impact carbs = 0g.
            </p>
          </div>
        </section>

        {/* Section 11: Quality and Testing */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            MONKAURA Quality & Testing Standards
          </h2>
          <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
            Every batch of MONKAURA is manufactured adhering strictly to Indian food safety standards and packaged in food-grade, moisture-barrier zip pouches to prevent caking and contamination.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-start gap-3">
              <ShieldCheck className="text-brand-green shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-brand-dark text-sm">Non-GMO Verified Sourcing</h4>
                <p className="text-xs text-brand-dark/70">Raw materials are tested for purity and origin before compounding.</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-start gap-3">
              <ShieldCheck className="text-brand-green shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-brand-dark text-sm">Strict Moisture-Barrier Packaging</h4>
                <p className="text-xs text-brand-dark/70">Multi-layer foil-backed pouches ensure free-flowing crystals in Indian climate.</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-brand-dark/60">
            For detailed information on ingredient specifications and certification status, visit our{" "}
            <Link to="/quality-testing" className="text-brand-green font-bold hover:underline">
              Quality & Testing page
            </Link>.
          </p>
        </section>

        {/* Section 12: Pack Sizes & Pricing */}
        <section className="space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
            MONKAURA Pack Sizes Available in India
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRODUCTS.map(p => (
              <div key={p.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand-mint text-brand-green text-[10px] font-bold uppercase">
                    {p.weight}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-dark">{p.name}</h3>
                  <p className="text-xs text-brand-dark/70">{p.description}</p>
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="text-2xl font-black text-brand-dark">₹{p.price}</span>
                    <span className="text-sm text-brand-dark/40 line-through">₹{p.originalPrice}</span>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex gap-2">
                  <Link
                    to={`/products/${p.id === "pouch-100g" ? "monkaura-100g" : "monkaura-200g"}`}
                    className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-brand-mint-light text-brand-green border border-brand-green/20 hover:bg-brand-mint transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      if (onAddToCart) onAddToCart(p, 1);
                      navigate("/products");
                    }}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold bg-brand-green text-white hover:bg-brand-green-light transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag size={14} />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 13: FAQ */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="text-brand-green" size={24} />
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">
              Frequently Asked Questions About Monk Fruit in India
            </h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <h3 className="font-bold text-brand-dark text-sm sm:text-base mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-2">
            <Link to="/monk-fruit-sweetener-faq" className="text-xs font-bold text-brand-green hover:underline">
              View All 15+ Monk Fruit FAQs →
            </Link>
          </div>
        </section>

        {/* Section 14: Final Shop CTA */}
        <section className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-brand-mint text-xs font-bold tracking-widest uppercase">
            Start Your Sugar-Free Journey
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl">
            Experience Clean, Natural Sweetness in Your Kitchen
          </h2>
          <p className="max-w-xl mx-auto text-white/80 text-sm sm:text-base font-light leading-relaxed">
            Order the MONKAURA 100g Trial Pack or 200g Everyday Pack today. Delivered across India with fast doorstep shipping and WhatsApp customer assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              <span>Shop MONKAURA Packs</span>
            </Link>
            <Link
              to="/monk-fruit-sweetener-guide"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Read Full Sweetener Guide</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
