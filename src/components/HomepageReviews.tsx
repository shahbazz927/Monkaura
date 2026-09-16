import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

export default function HomepageReviews() {
  const hasReviews = false;
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">What Monkaura Customers Say</h2>
        {!hasReviews ? (
          <div className="bg-brand-cream/60 border border-gray-100 rounded-3xl p-8 sm:p-10 space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto"><Star size={20} className="text-brand-green" /></div>
            <p className="font-serif font-bold text-brand-dark">Be one of the first to experience Monkaura.</p>
            <p className="text-sm text-brand-dark/60 font-light max-w-lg mx-auto">Try our 200g pack and share your experience with us.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/products" className="px-8 py-3 bg-brand-green text-white font-bold text-sm rounded-xl shadow-md">Try Monkaura</Link>
              <Link to="/reviews" className="px-8 py-3 bg-white border border-brand-green/15 text-brand-green font-bold text-sm rounded-xl flex items-center justify-center gap-1.5">Read All Reviews <ArrowRight size={14} /></Link>
            </div>
          </div>
        ) : null}
        <Link to="/reviews" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green underline underline-offset-4">
          Read All Reviews <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
