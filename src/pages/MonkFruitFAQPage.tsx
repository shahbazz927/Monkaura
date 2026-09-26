import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelpCircle, ChevronDown, ChevronUp, Search, ArrowRight } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";

interface FAQItem {
  q: string;
  a: string;
  category: "General" | "Culinary" | "Nutrition & Health" | "Ordering";
}

export default function MonkFruitFAQPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "General",
      q: "What is monk fruit sweetener?",
      a: "Monk fruit sweetener is a natural zero-calorie sweetener extracted from the juice of monk fruit (Siraitia grosvenorii / Luo Han Guo). Its sweetness is derived from natural antioxidant compounds called mogrosides rather than sucrose, glucose, or fructose."
    },
    {
      category: "General",
      q: "What is MONKAURA?",
      a: "MONKAURA is an Indian brand founded in Hyderabad providing premium, natural 1:1 sugar replacement blends. MONKAURA combines standardized Monk Fruit extract with non-GMO Erythritol to deliver a clean, crystal sugar alternative for daily Indian tea, coffee, cooking, and baking."
    },
    {
      category: "General",
      q: "Does MONKAURA contain sugar?",
      a: "No. MONKAURA contains 0g added sugar and 0g sucrose. It is completely free from table sugar, brown sugar, honey, glucose, and high-fructose corn syrup."
    },
    {
      category: "General",
      q: "Does MONKAURA contain erythritol?",
      a: "Yes. MONKAURA is formulated with non-GMO Erythritol and Monk Fruit extract. Erythritol provides the necessary bulk and crystalline structure so you can measure it 1:1 like real sugar."
    },
    {
      category: "General",
      q: "What ingredients are in MONKAURA?",
      a: "MONKAURA contains strictly two ingredients: Non-GMO Erythritol and Monk Fruit Extract (Siraitia grosvenorii). There are zero artificial sweeteners, preservatives, or chemical fillers."
    },
    {
      category: "Culinary",
      q: "Is MONKAURA a 1:1 sugar replacement?",
      a: "Yes. MONKAURA is calibrated to measure exactly 1:1 by volume and weight with regular white table sugar. 1 teaspoon of MONKAURA replaces 1 teaspoon of sugar."
    },
    {
      category: "Culinary",
      q: "Can I use MONKAURA in tea and coffee?",
      a: "Yes, perfectly. MONKAURA dissolves instantly in hot masala chai, green tea, black coffee, and South Indian filter coffee without any bitter or chemical aftertaste."
    },
    {
      category: "Culinary",
      q: "Can I cook with MONKAURA?",
      a: "Yes. MONKAURA is heat-stable up to 200°C and can be simmered in curries, gravies, tomato sauces, and Indian sweet dishes like kheer and halwa."
    },
    {
      category: "Culinary",
      q: "Can I bake with MONKAURA?",
      a: "Yes. MONKAURA can be creamed with butter or blended into almond flour and whole wheat flours for cakes, cookies, muffins, crumbles, and brownies."
    },
    {
      category: "Culinary",
      q: "How should MONKAURA be stored?",
      a: "Store MONKAURA in a cool, dry place away from moisture. Keep the original zip-lock pouch tightly sealed or transfer to an airtight glass container."
    },
    {
      category: "Ordering",
      q: "What pack sizes are available?",
      a: "MONKAURA is currently available in two convenient pack sizes: the 100g Trial Pack (₹149) and the 200g Everyday Pack (₹298)."
    },
    {
      category: "Culinary",
      q: "How much MONKAURA should I use?",
      a: "Use the exact same amount as you would use regular sugar in any recipe or drink. Start with 1 teaspoon per cup of tea or coffee and adjust to your preferred sweetness."
    },
    {
      category: "Nutrition & Health",
      q: "What is the difference between monk fruit and stevia?",
      a: "Stevia is extracted from the leaves of Stevia rebaudiana and often has a sharp, licorice-like or bitter aftertaste. Monk fruit is extracted from a melon and sweetened by mogrosides, which offer a cleaner, rounder sweetness profile without lingering bitterness."
    },
    {
      category: "Nutrition & Health",
      q: "What is the difference between monk fruit and erythritol?",
      a: "Pure monk fruit is an intense plant extract (200x sweeter than sugar with no bulk), while pure erythritol is a fermented polyol (70% as sweet as sugar with a cooling sensation). MONKAURA blends both to eliminate the cooling effect and achieve a balanced 1:1 sugar alternative."
    },
    {
      category: "Ordering",
      q: "Where can I buy MONKAURA in India?",
      a: "You can purchase genuine MONKAURA products directly on our official website (monkaura.in) with fast door-to-door delivery across all pincodes in India and instant WhatsApp order assistance."
    }
  ];

  const categories = ["All", "General", "Culinary", "Nutrition & Health", "Ordering"];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | MONKAURA Monk Fruit Sweetener</title>
        <meta
          name="description"
          content="Find answers to all questions about MONKAURA monk fruit sweetener: ingredients, 1:1 conversion, chai/coffee usage, baking tips, storage, and orders."
        />
        <meta
          name="keywords"
          content="monk fruit faq, monkaura questions, monk fruit sweetener india faq, 1:1 sugar replacement faq"
        />
        <link rel="canonical" href="https://monkaura.in/monk-fruit-sweetener-faq" />
        <meta property="og:title" content="Frequently Asked Questions (FAQ) | MONKAURA" />
        <meta property="og:description" content="Official answers to all frequently asked questions regarding monk fruit sweetener." />
        <meta property="og:url" content="https://monkaura.in/monk-fruit-sweetener-faq" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://monkaura.in/monk-fruit-sweetener-faq" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "FAQ", url: "/monk-fruit-sweetener-faq" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <header className="space-y-4 text-center sm:text-left border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase">
            <HelpCircle size={14} />
            <span>Knowledge Base & Support</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed">
            Everything you need to know about MONKAURA, our ingredients, culinary usage, pack sizes, and order delivery across India.
          </p>
        </header>

        {/* Filter & Search Toolbar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search questions (e.g., chai, baking, ingredients, price)..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-brand-green shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? "bg-brand-green text-white"
                    : "bg-white text-brand-dark/70 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-brand-dark text-sm sm:text-base">{faq.q}</span>
                    <span className="text-brand-green shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-dark/70 leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 p-8 space-y-2">
              <p className="text-sm font-bold text-brand-dark">No questions found matching "{search}"</p>
              <p className="text-xs text-brand-dark/60">Try searching for other terms or contact our support team on WhatsApp.</p>
            </div>
          )}
        </div>

        {/* Support & Shop Card */}
        <div className="bg-brand-mint-light p-6 sm:p-8 rounded-2xl border border-brand-green/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-xl text-brand-dark">Have an unanswered question?</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 mt-1">Our team is happy to guide you on recipes, usage, and orders.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="px-5 py-2.5 rounded-xl bg-white border border-brand-green text-brand-green font-bold text-xs hover:bg-gray-50">
              Contact Us
            </Link>
            <Link to="/products" className="px-5 py-2.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
