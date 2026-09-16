import React, { useState } from "react";
import { X, Star, ShieldCheck, Heart, ShoppingCart, Plus, Minus, Check, ArrowLeft, Award, HelpCircle, Utensils, Zap } from "lucide-react";
import { Product } from "../types";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

export default function ProductDetailsModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onBuyNow
}: ProductDetailsModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedAlert, setAddedAlert] = useState(false);
  const [activeTab, setActiveTab] = useState<"ingredients" | "recipes" | "safety">("ingredients");

  if (!isOpen || !product) return null;

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedAlert(true);
    setTimeout(() => {
      setAddedAlert(false);
    }, 2000);
  };

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-hidden">
      {/* Immersive backdrop with light blur */}
      <div 
        className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Main product page container */}
      <div 
        id="product-details-container"
        className="relative bg-white w-full h-full md:h-auto md:max-h-[92vh] md:max-w-4xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-scaleUp"
      >
        {/* Mobile/Sticky Header */}
        <div className="px-6 py-4 bg-brand-cream border-b border-gray-100 flex justify-between items-center shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-brand-dark/70 hover:text-brand-dark cursor-pointer transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Shop</span>
          </button>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {product.weight || "200g"} Pack
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-brand-dark/60 hover:text-brand-dark cursor-pointer transition-colors"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable details wrapper */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Main info row: Left (images) & Right (meta) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Images Gallery */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl bg-brand-cream/40 border border-gray-100 flex items-center justify-center overflow-hidden group">
                <img
                  src={images[activeImageIdx]}
                  alt={`${product.name} - detailed view`}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 w-10 h-10 rounded-full bg-white/95 text-brand-dark shadow-md flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      aria-label="Previous photo"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 w-10 h-10 rounded-full bg-white/95 text-brand-dark shadow-md flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      aria-label="Next photo"
                    >
                      <ArrowLeft size={16} className="rotate-180" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails array */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 justify-center">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-16 h-16 rounded-xl border-2 overflow-hidden bg-brand-cream/30 p-1 cursor-pointer transition-all ${
                        activeImageIdx === idx ? "border-brand-green scale-105 shadow-sm" : "border-gray-150 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Purchase Details */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wide uppercase">
                    {product.subtitle}
                  </span>
                </div>

                <h2 className="font-serif font-black text-2xl sm:text-3xl text-brand-dark leading-tight">
                  {product.name}
                </h2>
                
                <p className="text-xs font-semibold text-brand-green tracking-wide">
                  {product.tagline}
                </p>
              </div>

              {/* Price display */}
              <div className="flex items-baseline gap-2 pb-4 border-b border-gray-100">
                <span className="text-3xl font-black text-brand-dark">₹{product.price}</span>
                <span className="text-base text-brand-dark/40 line-through">₹{product.originalPrice}</span>
                <span className="text-xs text-brand-orange font-bold bg-brand-orange/10 px-2 py-1 rounded">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>

              {/* Product description */}
              <p className="text-xs sm:text-sm text-brand-dark/70 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Benefits badge matrix */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-brand-dark">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 bg-brand-cream/30 rounded-xl border border-brand-cream">
                    <Check size={14} className="text-brand-green shrink-0 font-bold" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Purchase CTA Panel */}
              <div className="bg-brand-cream/30 border border-brand-cream/80 p-4 rounded-2xl space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-dark/60 font-medium">
                  <span>Pack Size: <strong>{product.weight || "200g"}</strong></span>
                  {product.outOfStock ? (
                    <span className="text-red-600 font-bold">Out of Stock</span>
                  ) : (
                    <span className="text-brand-green font-bold">In Stock (Dispatched within 24h)</span>
                  )}
                </div>

                <div className="space-y-3">
                  {product.outOfStock ? (
                    <div className="space-y-2">
                      <button
                        disabled
                        className="w-full h-12 bg-gray-100 text-gray-400 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200"
                      >
                        <span>Out of Stock</span>
                      </button>
                      <p className="text-center text-[11px] text-brand-dark/50 italic">
                        This item is currently sold out. Leave a message for our Concierge to get a notification on restock.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        {/* Qty Selector */}
                        <div className="flex items-center border border-gray-200 rounded-xl bg-white h-12 shadow-xs shrink-0">
                          <button
                            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            className="px-3 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-l-xl cursor-pointer"
                            disabled={quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 font-semibold text-brand-dark text-sm select-none w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => setQuantity(prev => prev + 1)}
                            className="px-3 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-r-xl cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Add to Cart CTA */}
                        <button
                          onClick={handleAddToCart}
                          className={`flex-grow h-12 rounded-xl font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md ${
                            addedAlert
                              ? "bg-brand-green text-white"
                              : "bg-brand-mint-light hover:bg-brand-mint text-brand-green border border-brand-green/20"
                          }`}
                        >
                          {addedAlert ? (
                            <>
                              <Check size={16} className="text-brand-green animate-bounce" />
                              <span>Added to Cart!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={16} />
                              <span>Try Monkaura</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Buy Now Direct Checkout CTA */}
                      <button
                        onClick={() => onBuyNow(product, quantity)}
                        className="w-full h-12 rounded-xl font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 bg-brand-orange hover:bg-brand-orange/95 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        <span>Buy Now (₹{product.price * quantity})</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Expanded detailed specifications and facts tabs */}
          <div className="border-t border-gray-100 pt-8 space-y-4">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`flex-1 sm:flex-initial px-6 pb-3 text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "ingredients"
                    ? "text-brand-green border-b-2 border-brand-green font-extrabold"
                    : "text-brand-dark/50 hover:text-brand-dark"
                }`}
              >
                <Zap size={14} />
                <span>Premium Ingredients</span>
              </button>
              <button
                onClick={() => setActiveTab("recipes")}
                className={`flex-1 sm:flex-initial px-6 pb-3 text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "recipes"
                    ? "text-brand-green border-b-2 border-brand-green font-extrabold"
                    : "text-brand-dark/50 hover:text-brand-dark"
                }`}
              >
                <Utensils size={14} />
                <span>Culinary Usage</span>
              </button>
              <button
                onClick={() => setActiveTab("safety")}
                className={`flex-1 sm:flex-initial px-6 pb-3 text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "safety"
                    ? "text-brand-green border-b-2 border-brand-green font-extrabold"
                    : "text-brand-dark/50 hover:text-brand-dark"
                }`}
              >
                <Award size={14} />
                <span>Certified Purity</span>
              </button>
            </div>

            <div className="bg-brand-cream/30 rounded-2xl p-6 border border-gray-100">
              {activeTab === "ingredients" && (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-light text-brand-dark/80">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                    <p>
                      <strong>Erythritol + Monk Fruit:</strong> Made with premium Erythritol and Monk Fruit for smooth, sugar-like sweetness. 100g Trial & 200g Everyday packs.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                    <p>
                      <strong>Monk Fruit Extract:</strong> Provides clean sweetness without bitterness.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100">
                    <ShieldCheck className="text-brand-green shrink-0 mt-0.5" size={16} />
                    <span className="text-xs font-semibold text-brand-green">Made with Erythritol and Monk Fruit. 1:1 sugar replacement for everyday tea, coffee, cooking and baking.</span>
                  </div>
                </div>
              )}

              {activeTab === "recipes" && (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-light text-brand-dark/80">
                  <p>
                    Monkaura can be substituted for normal refined table sugar in a precise <strong>1:1 ratio</strong>. No calculations needed!
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-white rounded-xl border border-gray-100">
                      <span className="font-bold text-brand-green block mb-1 text-xs uppercase tracking-wide">Daily Teas & Coffees</span>
                      <p className="text-xs text-brand-dark/70 font-light">
                        Dissolves instantly in hot and iced milk drinks, giving a deep, rich, authentic sweetness without any chemical aftertaste.
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">
                      <span className="font-bold text-brand-green block mb-1 text-xs uppercase tracking-wide">Traditional Indian Sweets</span>
                       <p className="text-xs text-brand-dark/70 font-light">
                        Ideal for Kheer, Halwa, and Gulab Jamun.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "safety" && (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-light text-brand-dark/80">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <Award className="text-brand-gold shrink-0" size={24} />
                    <div>
                      <span className="font-bold text-brand-dark block text-xs sm:text-sm">FSSAI License Certified</span>
                      <span className="text-[10px] sm:text-xs text-brand-dark/50 font-light">Lic No: 13624999000449</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 bg-white rounded-xl border border-gray-100 text-center">
                      <span className="font-bold text-brand-green block text-xs">Erythritol + Monk Fruit</span>
                      <span className="text-[10px] text-brand-dark/50">Available Now</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100 text-center">
                      <span className="font-bold text-brand-green block text-xs">1:1 Replacement</span>
                      <span className="text-[10px] text-brand-dark/50">For beverages, cooking & baking</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100 text-center">
                      <span className="font-bold text-brand-green block text-xs">Everyday Use</span>
                      <span className="text-[10px] text-brand-dark/50">Tea, coffee & recipes</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Reviews link — genuine reviews only */}
          <div className="bg-brand-cream/40 border border-gray-100 rounded-xl p-4 flex items-center justify-between">
            <p className="text-xs text-brand-dark/70 font-light">Want to see what customers say? Visit our Reviews page.</p>
            <a href="/reviews" className="text-xs font-bold text-brand-green hover:underline">Read Reviews →</a>
          </div>

        </div>

        {/* Secure checkout footer badge */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center shrink-0 text-[10px] text-brand-dark/50">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck size={14} className="text-brand-green" /> FSSAI Certified Pure • Non-GMO • Gluten-Free
          </span>
          <span className="hidden sm:inline">Monkaura Sweeteners</span>
        </div>

      </div>
    </div>
  );
}
