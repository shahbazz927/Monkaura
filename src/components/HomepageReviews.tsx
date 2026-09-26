import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

interface UserReview {
  id: string;
  name: string;
  city: string;
  pack: string;
  rating: number;
  date: string;
  comment: string;
  photoUrl?: string;
  verified: boolean;
}

export default function HomepageReviews() {
  const [reviews, setReviews] = useState<UserReview[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("monkaura_user_reviews");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setReviews(parsed);
          }
        } catch {
          // ignore error
        }
      }
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Verified Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark font-bold tracking-tight">
            Customer Feedback & Reviews
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/70 font-light">
            We value genuine experiences. We do not purchase fake ratings or fabricate customer testimonials.
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="border border-gray-200/80 rounded-xl p-8 sm:p-12 text-center space-y-4 max-w-xl mx-auto bg-brand-cream/30">
            <h3 className="font-serif font-bold text-xl text-brand-dark">Share Your Experience with MONKAURA</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
              Have you tried MONKAURA in your morning chai, filter coffee, or weekend home baking? Submit your honest review for other Indian home cooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                to="/products"
                className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-light text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Try 100g Trial Pack (₹149)
              </Link>
              <Link
                to="/reviews"
                className="px-5 py-2.5 bg-white border border-gray-200 text-brand-dark font-semibold text-xs rounded-lg hover:border-brand-green hover:text-brand-green transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Write a Review</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((rev) => (
                <div key={rev.id} className="p-6 rounded-xl border border-gray-100 bg-brand-cream/20 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-brand-dark">{rev.name}</span>
                    <span className="text-[11px] text-brand-green font-medium">Verified Purchase</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < rev.rating ? "currentColor" : "none"}
                        className={i < rev.rating ? "" : "text-gray-200"}
                      />
                    ))}
                    <span className="text-[11px] text-brand-dark/50 ml-1">· {rev.pack}</span>
                  </div>
                  <p className="text-xs text-brand-dark/80 leading-relaxed font-light">
                    "{rev.comment}"
                  </p>
                  <p className="text-[10px] text-brand-dark/40 pt-1">{rev.city} · {rev.date}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:underline underline-offset-4"
              >
                <span>View all reviews & submit feedback</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
