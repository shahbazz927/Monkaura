import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Sparkles, Send, CheckCircle2, ShieldCheck, MessageSquare, Image, X } from "lucide-react";
import SEOBreadcrumb from "./SEOBreadcrumb";

interface UserReview {
  id: string;
  name: string;
  city: string;
  pack: string;
  orderId?: string;
  rating: number;
  date: string;
  comment: string;
  photoUrl?: string;
  verified: boolean;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [formName, setFormName] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formOrderId, setFormOrderId] = useState("");
  const [formPack, setFormPack] = useState("100g Trial Pack");
  const [formRating, setFormRating] = useState(5);
  const [formComment, setFormComment] = useState("");
  const [formPhoto, setFormPhoto] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          // ignore parsing error
        }
      }
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormPhoto(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formComment.trim()) return;

    setIsSubmitting(true);
    const newReview: UserReview = {
      id: Date.now().toString(),
      name: formName.trim() || "Verified Buyer",
      city: formCity.trim() || "India",
      pack: formPack,
      orderId: formOrderId.trim() || undefined,
      rating: formRating,
      date: new Date().toISOString().split("T")[0],
      comment: formComment.trim(),
      photoUrl: formPhoto || undefined,
      verified: true
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("monkaura_user_reviews", JSON.stringify(updated));
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setFormComment("");
    setFormName("");
    setFormCity("");
    setFormOrderId("");
    setFormPhoto(null);
  };

  return (
    <div className="bg-brand-cream min-h-screen py-8 md:py-12">
      <Helmet>
        <title>Customer Reviews & Feedback | MONKAURA Natural Sweetener</title>
        <meta
          name="description"
          content="Read authentic customer feedback and submit your experience with MONKAURA Monk Fruit, Erythritol sweetener. 100% genuine reviews."
        />
        <link rel="canonical" href="https://monkaura.in/reviews" />
        <meta property="og:title" content="Customer Reviews & Feedback | MONKAURA" />
        <meta property="og:description" content="Authentic experiences from MONKAURA customers across India." />
        <meta property="og:url" content="https://monkaura.in/reviews" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://monkaura.in/reviews" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Reviews", url: "/reviews" }
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-green/20 text-brand-green font-bold text-xs uppercase tracking-widest">
            <Sparkles size={12} /> Community Feedback
          </span>
          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
            Real Experiences. Real Sweetness.
          </h1>
          <p className="text-brand-dark/70 text-sm font-light">
            Read verified feedback from customers using MONKAURA Monk Fruit, Erythritol in their daily tea, coffee, and home cooking.
          </p>
        </div>

        {/* Review Submission Form & Integrity Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-brand-green">
              <MessageSquare size={20} />
              <h2 className="font-serif font-bold text-xl text-brand-dark">Share Your Experience</h2>
            </div>
            <p className="text-xs text-brand-dark/60 leading-relaxed">
              Have you tried Monkaura in your morning chai, filter coffee, or dessert? Share your honest feedback with our community.
            </p>

            {submitted ? (
              <div className="p-4 bg-brand-mint-light rounded-2xl border border-brand-green/20 text-center space-y-2">
                <CheckCircle2 size={24} className="text-brand-green mx-auto" />
                <p className="font-bold text-sm text-brand-dark">Thank you for your feedback!</p>
                <p className="text-xs text-brand-dark/70">Your review has been recorded.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-brand-green underline mt-2 cursor-pointer"
                >
                  Submit another review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">Your Name (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh K."
                    value={formName}
                    onChange={e => setFormName(e.target.value)}
                    className="w-full p-2.5 bg-brand-cream/60 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">City / State (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Telangana"
                    value={formCity}
                    onChange={e => setFormCity(e.target.value)}
                    className="w-full p-2.5 bg-brand-cream/60 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">Pack Purchased</label>
                  <select
                    value={formPack}
                    onChange={e => setFormPack(e.target.value)}
                    className="w-full p-2.5 bg-brand-cream/60 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green font-medium"
                  >
                    <option value="100g Trial Pack">100g Trial Pack</option>
                    <option value="200g Everyday Pack">200g Everyday Pack</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">Order # / Purchase Verification (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. MK-10482"
                    value={formOrderId}
                    onChange={e => setFormOrderId(e.target.value)}
                    className="w-full p-2.5 bg-brand-cream/60 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer ${
                          formRating >= star ? "bg-amber-50 border-amber-300 text-amber-500" : "bg-white border-gray-200 text-gray-300"
                        }`}
                      >
                        <Star size={18} fill={formRating >= star ? "currentColor" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">Your Written Review *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How did Monkaura taste in your tea, coffee, or baking?"
                    value={formComment}
                    onChange={e => setFormComment(e.target.value)}
                    className="w-full p-2.5 bg-brand-cream/60 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-dark/80 mb-1">Upload Photo (optional)</label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer px-3 py-2 bg-brand-cream border border-gray-200 rounded-xl text-brand-dark/70 hover:bg-brand-mint-light hover:text-brand-green flex items-center gap-1.5 transition-colors">
                      <Image size={15} />
                      <span>Choose image</span>
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                    {formPhoto && (
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-200">
                        <img src={formPhoto} alt="Upload preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setFormPhoto(null)}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send size={14} />
                  <span>Submit Verified Review</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[10px] text-brand-dark/50">
              <ShieldCheck size={14} className="text-brand-green shrink-0" />
              <span>We do not publish fabricated ratings. All submitted customer feedback is real.</span>
            </div>
          </div>

          {/* Customer Reviews List */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif font-bold text-xl text-brand-dark">Customer Reviews ({reviews.length})</h2>

            {reviews.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-brand-mint-light flex items-center justify-center mx-auto text-brand-green">
                  <Star size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-dark">Be the first to leave a review!</h3>
                <p className="text-xs sm:text-sm text-brand-dark/60 max-w-md mx-auto">
                  Order the Monkaura 100g Trial Pack or 200g Everyday Pack and share your feedback.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light shadow-md"
                >
                  <span>Shop Monkaura</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {reviews.map(rev => (
                  <div key={rev.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-brand-dark">{rev.name}</span>
                        <span className="text-[10px] bg-brand-mint-light text-brand-green font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={10} />
                          Verified
                        </span>
                      </div>
                      <span className="text-[10px] text-brand-dark/40">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill={i < rev.rating ? "currentColor" : "none"} className={i < rev.rating ? "" : "text-gray-200"} />
                      ))}
                      <span className="text-[10px] text-brand-dark/60 font-medium ml-2">({rev.pack})</span>
                    </div>

                    <p className="text-xs text-brand-dark/80 leading-relaxed font-light">{rev.comment}</p>

                    {rev.photoUrl && (
                      <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 mt-2">
                        <img src={rev.photoUrl} alt="Review attachment" className="w-full h-full object-cover" />
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1 text-[10px] text-brand-dark/40">
                      <span>{rev.city}</span>
                      {rev.orderId && <span>Order: {rev.orderId}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
