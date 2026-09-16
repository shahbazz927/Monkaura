import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What’s the difference between Allulose and Erythritol?",
      answer: "Allulose and erythritol are different types of sweeteners. Allulose is a rare sugar with a taste and functionality closer to sugar, while erythritol is a sugar alcohol that can have a cooling sensation. Monkaura is made with Allulose and Monk Fruit, not erythritol."
    },
    {
      question: "Does Monkaura contain erythritol?",
      answer: "No. Monkaura is made with Allulose and Monk Fruit."
    },
    {
      question: "Why does Monkaura come in 100g and 200g packs?",
      answer: "The 100g Trial Pack lets you try Monkaura in your everyday tea, coffee, cooking and baking, while the 200g pack is great if you already love it. Both help you decide whether to make it a regular part of your kitchen."
    },
    {
      question: "Can I use Monkaura instead of sugar?",
      answer: "Monkaura is designed as a 1:1 sugar replacement, making it easy to use in many everyday beverages, recipes and baking applications."
    },
    {
      question: "What is Allulose and how does it differ from regular sugar?",
      answer: "Allulose is a rare sugar found in small amounts in foods like figs and raisins. It has a sugar-like taste and can brown and caramelize, which makes it useful for cooking and baking. Monkaura blends Allulose with Monk Fruit."
    },
    {
      question: "Can I cook and bake with Monkaura? Does it measure like sugar?",
      answer: "Monkaura is designed to be used 1:1 in place of sugar in many everyday recipes, including tea, coffee, cooking and baking. Results may vary by recipe and baking temperature."
    },
    {
      question: "Is Monkaura certified and suitable for daily use?",
      answer: "Monkaura is FSSAI certified and produced under food safety standards in India. It is made with Allulose and Monk Fruit and is intended for everyday use in beverages, cooking and baking."
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-dark/70 text-sm font-light">
            Everything you need to know about Monkaura, Allulose and everyday use.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-brand-mint-light/40 border-brand-green/30 shadow-md"
                    : "bg-white border-gray-100 hover:border-brand-green/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-brand-dark leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-brand-cream text-brand-green shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 animate-fadeIn">
                    <p className="text-brand-dark/80 text-xs sm:text-sm leading-relaxed font-light">
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
