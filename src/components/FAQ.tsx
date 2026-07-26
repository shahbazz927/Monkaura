import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Allulose and how does it differ from other sugars?",
      answer: "Allulose is a rare natural sugar found in tiny quantities in foods like figs, raisins, jackfruit, and maple syrup. It has the exact same molecular formula as fructose, which means it tastes and behaves 100% like real sugar. However, because our body cannot metabolize it, it passes through safely without contributing calories or raising blood sugar levels."
    },
    {
      question: "Why is Monkaura 100% free from cheap bulk Erythritol?",
      answer: "Traditional monk fruit sweeteners are bulked with industrial Erythritol (a sugar alcohol) because it's cheap. However, Erythritol ferments in your lower colon, drawing water and causing bloating, gas, and stomach cramps. It also leaves a cold, unnatural cooling sensation in your throat and refuses to caramelize when heated. Monkaura uses pure Allulose to provide a bloat-free, warm-tasting sweetener that browns beautifully."
    },
    {
      question: "Can I cook and bake with Monkaura? Does it measure like sugar?",
      answer: "Yes, absolutely! Monkaura measures 1:1 exactly like traditional table sugar. Because it is powered by Allulose, it undergoes the Maillard browning process, which means it caramelizes, thickens, and browns beautifully. It is perfect for making sugar-free syrups for Indian desserts like Gulab Jamun, baking crisp cookies, or sweetening your daily chai."
    },
    {
      question: "Is Monkaura safe for diabetics and those on Keto diets?",
      answer: "Yes, perfectly safe. Both pure Monk Fruit extract and Allulose have a Glycemic Index (GI) of exactly zero. They do not raise blood glucose levels or trigger insulin spikes. It is highly recommended for type-1 and type-2 diabetics, weight-watchers, and keto followers who want to satisfy their sweet cravings without health compromises."
    },
    {
      question: "Is Monkaura certified and safe for daily use?",
      answer: "Yes, Monkaura is 100% FSSAI certified, and produced under the highest standards of food safety right here in India. It is completely safe for children, pregnant women, and elderly family members. It is gluten-free, non-GMO, and contains zero artificial chemical preservatives or synthetic additives."
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
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-dark/70 text-sm font-light">
            Everything you need to know about Monkaura, Allulose rare sugars, and healthy baking.
          </p>
        </div>

        {/* Accordion Group */}
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
