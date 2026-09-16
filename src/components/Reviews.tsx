import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Sparkles } from "lucide-react";

export default function Reviews() {
  // No genuine review data exists yet — show empty state per requirements
  const hasReviews = false;

  return (
    <section className="py-16 md:py-24 bg-brand-cream min-h-[60vh]">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/reviews" />
        <title>Reviews — Monkaura Allulose & Monk Fruit</title>
        <meta name="description" content="Real experiences from Monkaura customers making the switch to Allulose + Monk Fruit." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest">
            <Sparkles size={12} /> Reviews
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            Real Experiences. Real Sweetness.
          </h1>
          <p className="text-brand-dark/70 text-sm font-light">
            See what Monkaura customers have to say about making the switch to Allulose + Monk Fruit.
          </p>
        </div>

        {!hasReviews ? (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-mint-light border border-brand-green/10 flex items-center justify-center mx-auto">
              <Star size={24} className="text-brand-green" />
            </div>
            <h2 className="font-serif font-bold text-xl text-brand-dark">Be one of the first to experience Monkaura.</h2>
            <p className="text-sm text-brand-dark/60 font-light max-w-lg mx-auto">
              Try our 200g pack and share your experience with us. Your review could help others make the switch.
            </p>
            <Link to="/products" className="inline-flex items-center justify-center px-8 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-sm rounded-xl shadow-md mt-2">
              Try Monkaura
            </Link>
            <p className="text-[11px] text-brand-dark/40 pt-2">Reviews will appear here once genuine customer feedback is available. We do not display fabricated ratings.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
