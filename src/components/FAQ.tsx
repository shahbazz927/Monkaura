import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is MONKAURA?",
      answer: "MONKAURA is a zero-calorie, zero-sugar natural tabletop sweetener brand based in Hyderabad, India. It is designed as a direct 1:1 replacement for cane sugar in daily beverages, cooking, and home baking."
    },
    {
      question: "What are the exact ingredients in MONKAURA?",
      answer: "MONKAURA contains strictly two ingredients: Non-GMO Fermented Erythritol and Pure Monk Fruit Extract (Siraitia grosvenorii Mogroside V). It contains no artificial sweeteners, sucralose, aspartame, maltodextrin, or fillers."
    },
    {
      question: "Why is erythritol blended with monk fruit?",
      answer: "Pure monk fruit extract is 150 to 250 times sweeter than sucrose, making it difficult to measure in pinch quantities. Non-GMO erythritol provides the granular volume, bulk, and crystalline texture needed to achieve an effortless 1:1 spoon-for-spoon replacement ratio."
    },
    {
      question: "Is MONKAURA a true 1:1 sugar replacement?",
      answer: "Yes. 1 teaspoon of MONKAURA replaces 1 teaspoon of table sugar. You can substitute it directly in equal measurements across your tea, coffee, and dessert recipes without conversion formulas."
    },
    {
      question: "Can I use MONKAURA in hot chai and filter coffee?",
      answer: "Yes. MONKAURA is heat-stable and dissolves quickly in hot liquids. It maintains its clean sweetness in Indian masala chai, black coffee, and South Indian filter coffee without any bitter or medicinal aftertaste."
    },
    {
      question: "Can I bake and cook Indian sweets with MONKAURA?",
      answer: "Yes. MONKAURA is heat-stable up to 200°C, making it suitable for stove-top cooking (kheer, halwa, curries) and oven baking (cakes, cookies, muffins)."
    },
    {
      question: "What is the difference between monk fruit and stevia?",
      answer: "Stevia derives its sweetness from steviol glycosides (often Reb A), which frequently leave a lingering licorice or bitter aftertaste. Monk fruit derives its sweetness from natural mogrosides, which deliver a smoother, cleaner sugar-like flavor profile."
    },
    {
      question: "What is the difference between erythritol and allulose?",
      answer: "Erythritol is a fermented polyol (sugar alcohol) that contributes 0 calories, has clean crystalline texture, and is widely approved in India. Allulose is a rare monosaccharide that can caramelize and brown under heat. MONKAURA currently produces and sells an Monk Fruit, Erythritol formulation."
    },
    {
      question: "What pack sizes are available and what do they cost?",
      answer: "MONKAURA is available in a 100g Trial Pack for ₹149 (ideal for first-time testing) and a 200g Everyday Pack for ₹298 (designed for regular kitchen cooking and family use)."
    },
    {
      question: "How should MONKAURA be stored?",
      answer: "Store in a cool, dry place away from direct moisture. Reseal the zip-lock barrier pouch tightly after every use to maintain free-flowing crystals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-gray-100">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Questions & Answers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-dark/70 text-sm font-light">
            Clear, factual answers about MONKAURA ingredients, measurement, taste, and kitchen use.
          </p>
        </div>

        <div className="divide-y divide-gray-200/80 border-y border-gray-200/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-5 sm:py-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-brand-dark group-hover:text-brand-green transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-brand-dark/50 shrink-0 transition-transform duration-200 group-hover:text-brand-green ${isOpen ? "rotate-180 text-brand-green" : "rotate-0"}`} 
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 pt-1 pr-8">
                    <p className="text-brand-dark/75 text-sm leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
