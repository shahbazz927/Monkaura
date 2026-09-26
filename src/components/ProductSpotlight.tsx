import React, { useState } from "react";
import { Plus, Minus, ShoppingCart, Check, ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import BuyNowModal from "./BuyNowModal";
import { trackAddToCart, trackBuyNowClick } from "../utils/analytics";

interface ProductSpotlightProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onExploreAll?: () => void;
}

export default function ProductSpotlight({ onAddToCart, onExploreAll }: ProductSpotlightProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "pouch-100g": 1,
    "pouch": 1,
  });
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});
  const [buyNowProduct, setBuyNowProduct] = useState<Product | null>(null);
  const [buyNowQty, setBuyNowQty] = useState(1);

  const getQty = (id: string) => quantities[id] || 1;

  const handleQtyChange = (productId: string, dir: "inc" | "dec") => {
    setQuantities(prev => {
      const q = prev[productId] || 1;
      if (dir === "dec" && q <= 1) return prev;
      return { ...prev, [productId]: dir === "inc" ? q + 1 : q - 1 };
    });
  };

  const handleAddToCart = (product: Product) => {
    const qty = getQty(product.id);
    trackAddToCart(product, qty);
    onAddToCart(product, qty);
    setAddedMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleBuyNow = (product: Product) => {
    const qty = getQty(product.id);
    trackBuyNowClick(product, qty);
    setBuyNowProduct(product);
    setBuyNowQty(qty);
  };

  return (
    <section id="products-section" className="py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Choose Your Pack · Both Sizes Available
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark font-bold tracking-tight">
            MONKAURA Monk Fruit, Erythritol
          </h2>
          <p className="text-brand-dark/75 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Both packs contain the identical 1:1 sugar replacement formulation — non-GMO fermented erythritol and pure monk fruit extract. Select the 100g trial size or the 200g everyday kitchen pack.
          </p>
        </div>

        {/* Both Products Displayed Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {PRODUCTS.map(product => {
            const qty = getQty(product.id);
            const is100g = product.id === "pouch-100g";
            const isAdded = addedMap[product.id];
            const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <div 
                key={product.id}
                className="bg-brand-cream/30 border border-gray-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-brand-green/40 transition-colors"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-brand-mint text-brand-green tracking-wide uppercase">
                    {is100g ? "100g Trial Pack" : "200g Everyday Pack"}
                  </span>
                  <span className="text-xs font-semibold text-brand-green bg-white border border-brand-green/20 px-2 py-0.5 rounded">
                    Save {discountPercent}%
                  </span>
                </div>

                {/* Product Imagery */}
                <div className="relative aspect-square w-full max-w-[280px] mx-auto bg-white rounded-xl p-4 sm:p-6 mb-6 flex items-center justify-center border border-gray-100 shadow-2xs">
                  <img
                    src={product.image}
                    alt={`${product.name} - MONKAURA Sweetener`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Product Copy & Pricing */}
                <div className="space-y-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-brand-dark">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-green uppercase tracking-wide">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-brand-dark/75 font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-2.5 pt-2">
                    <span className="text-3xl font-serif font-bold text-brand-dark">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-brand-dark/40 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-xs text-brand-dark/60 font-medium ml-auto">
                      {product.weight} Net Wt.
                    </span>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-200/70 text-xs text-brand-dark/80 font-light">
                    <div className="text-center sm:text-left">
                      <span className="block text-[11px] text-brand-dark/50">Calories</span>
                      <span className="font-semibold text-brand-green">0 kcal</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="block text-[11px] text-brand-dark/50">Sugar</span>
                      <span className="font-semibold text-brand-green">0g added</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="block text-[11px] text-brand-dark/50">Ratio</span>
                      <span className="font-semibold text-brand-dark">1:1 Sugar</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Add to Cart & Buy Now */}
                <div className="space-y-3 pt-6">
                  {/* Quantity and Add to Cart Row */}
                  <div className="flex items-center gap-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white h-11 shrink-0">
                      <button
                        onClick={() => handleQtyChange(product.id, "dec")}
                        disabled={qty <= 1}
                        className="px-3 h-full text-brand-dark/70 hover:text-brand-green disabled:opacity-30 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-semibold text-brand-dark min-w-[2rem] text-center select-none">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(product.id, "inc")}
                        className="px-3 h-full text-brand-dark/70 hover:text-brand-green cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex-1 h-11 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isAdded
                          ? "bg-brand-green text-white shadow-2xs"
                          : "border-2 border-brand-green bg-white text-brand-green hover:bg-brand-mint/50"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={15} />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Buy Now Direct Button */}
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="w-full h-11 px-5 rounded-lg bg-brand-green hover:bg-brand-green-light text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Buy Now</span>
                    <ArrowRight size={15} />
                  </button>

                  {/* Pack Detail Deep-Link */}
                  <div className="pt-2 text-center">
                    <Link
                      to={is100g ? "/products/monkaura-100g" : "/products/monkaura-200g"}
                      className="text-xs font-semibold text-brand-dark/80 hover:text-brand-green inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Explore full {product.weight} specifications</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="max-w-3xl mx-auto mt-12 pt-6 border-t border-gray-200/70 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-dark/70 font-light">
          <div className="flex items-center gap-2">
            <Truck size={15} className="text-brand-green" />
            <span>Reliable pan-India delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-brand-green" />
            <span>100% genuine formulation</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={15} className="text-brand-green" />
            <span>Non-GMO, FSSAI compliant standard</span>
          </div>
        </div>

      </div>

      <BuyNowModal
        product={buyNowProduct}
        initialQuantity={buyNowQty}
        isOpen={buyNowProduct !== null}
        onClose={() => setBuyNowProduct(null)}
      />
    </section>
  );
}
