import React, { useState, useEffect } from "react";
import { Sparkles, Plus, Minus, ShoppingCart, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import BuyNowModal from "./BuyNowModal";

interface ProductSpotlightProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onExploreAll: () => void;
}

export default function ProductSpotlight({ onAddToCart, onExploreAll }: ProductSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"taste" | "nutrition" | "features">("taste");
  const [isAdded, setIsAdded] = useState(false);
  const [buyNowProduct, setBuyNowProduct] = useState<Product | null>(null);
  const [buyNowQty, setBuyNowQty] = useState(1);

  const product = PRODUCTS[currentIndex] || PRODUCTS[0];
  if (!product) return null;
  const images = product.images || [product.image];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setQuantity(1);
    setActiveTab("taste");
    setImageIndex(0);
    setIsAdded(false);
  }, [currentIndex]);

  const handlePrev = () => setCurrentIndex(p => (p - 1 + PRODUCTS.length) % PRODUCTS.length);
  const handleNext = () => setCurrentIndex(p => (p + 1) % PRODUCTS.length);

  const handleQtyChange = (type: "inc" | "dec") => {
    setQuantity(prev => {
      if (type === "dec" && prev <= 1) return prev;
      return type === "inc" ? prev + 1 : prev - 1;
    });
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="product-spotlight-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-brand-mint/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-gold/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-brand-orange text-xs font-black bg-brand-orange/10 px-4 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
            <Sparkles size={12} />
            <span>100g & 200g Packs</span>
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            Choose Your <span className="text-brand-green">Monkaura</span> Pack
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light">
            Try the sweetness. Make the switch. — 100g Trial Pack or 200g for everyday use.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-brand-cream/60 border border-gray-100 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-xl relative flex flex-col justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-square w-full rounded-2xl bg-white p-4 shadow-md flex items-center justify-center overflow-hidden border border-gray-50">
                  <img src={images[imageIndex]} alt={product.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/10 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      {images.map((_, idx) => (
                        <button key={idx} onClick={() => setImageIndex(idx)} className={`w-1.5 h-1.5 rounded-full transition-all ${imageIndex === idx ? "bg-brand-green w-3.5" : "bg-brand-green/30 hover:bg-brand-green/70"}`} />
                      ))}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.weight} Pack
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.benefits.slice(0, 3).map((b, i) => (
                    <span key={i} className="text-[10px] bg-white border border-gray-100 text-brand-dark/80 font-medium px-2.5 py-1 rounded-full shadow-2xs">✓ {b}</span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-gold tracking-widest uppercase block mb-1">{product.subtitle}</span>
                  <h3 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-dark leading-tight">{product.name}</h3>
                </div>
                <p className="text-brand-dark/70 text-sm leading-relaxed font-light">{product.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 text-brand-dark/80 font-medium"><span className="text-brand-green">✓</span> {b}</li>
                  ))}
                </ul>

                <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 shadow-sm space-y-3">
                  <div className="flex border-b border-gray-100 pb-2 gap-4">
                    <button onClick={() => setActiveTab("taste")} className={`text-xs font-bold pb-1 border-b-2 cursor-pointer ${activeTab === "taste" ? "text-brand-green border-brand-green" : "text-brand-dark/40 border-transparent"}`}>Taste Profile</button>
                    <button onClick={() => setActiveTab("nutrition")} className={`text-xs font-bold pb-1 border-b-2 cursor-pointer ${activeTab === "nutrition" ? "text-brand-green border-brand-green" : "text-brand-dark/40 border-transparent"}`}>Nutrition Facts</button>
                    <button onClick={() => setActiveTab("features")} className={`text-xs font-bold pb-1 border-b-2 cursor-pointer ${activeTab === "features" ? "text-brand-green border-brand-green" : "text-brand-dark/40 border-transparent"}`}>Highlights</button>
                  </div>
                  <div className="min-h-[70px] flex flex-col justify-center text-xs">
                    {activeTab === "taste" && <p className="text-brand-dark/80 italic leading-relaxed font-light">Made with premium Allulose and Monk Fruit, Monkaura delivers a smooth, sugar-like sweetness designed for everyday use in tea, coffee, cooking and baking.</p>}
                    {activeTab === "nutrition" && (
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px]">
                        <div className="flex justify-between border-b border-gray-50 pb-1"><span className="text-brand-dark/50">Added sugar</span><span className="font-semibold text-brand-green">{product.nutritionFacts.addedSugar}</span></div>
                        <div className="flex justify-between border-b border-gray-50 pb-1"><span className="text-brand-dark/50">Energy</span><span className="font-semibold text-brand-green">{product.nutritionFacts.energy}</span></div>
                        <div className="flex justify-between border-b border-gray-50 pb-1"><span className="text-brand-dark/50">Serving</span><span className="font-semibold">{product.nutritionFacts.servingSize}</span></div>
                        <div className="flex justify-between border-b border-gray-50 pb-1"><span className="text-brand-dark/50">Net Carbs</span><span className="font-semibold text-brand-green">0g</span></div>
                      </div>
                    )}
                    {activeTab === "features" && (
                      <div className="space-y-1.5">
                        {product.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="leading-relaxed"><span className="font-semibold text-brand-green">{feat.title}: </span><span className="text-brand-dark/70 font-light">{feat.description}</span></div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-brand-dark">₹{product.price}</span>
                      <span className="text-sm text-brand-dark/40 line-through">₹{product.originalPrice}</span>
                      <span className="text-xs text-brand-orange font-bold bg-brand-orange/10 px-2 py-0.5 rounded">Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
                    </div>
                    <span className="text-xs text-brand-dark/50 font-medium">Net weight: {product.weight}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <div className="flex items-center border border-gray-200 rounded-xl bg-white h-12 shrink-0">
                      <button onClick={() => handleQtyChange("dec")} className="px-3 h-full text-brand-dark hover:text-brand-green cursor-pointer" disabled={quantity <= 1}><Minus size={14} /></button>
                      <span className="px-4 font-semibold text-brand-dark text-sm select-none">{quantity}</span>
                      <button onClick={() => handleQtyChange("inc")} className="px-3 h-full text-brand-dark hover:text-brand-green cursor-pointer"><Plus size={14} /></button>
                    </div>
                    <button onClick={handleAddToCartClick} className={`flex-grow h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${isAdded ? "bg-brand-green text-white" : "bg-brand-mint-light hover:bg-brand-mint text-brand-green border border-brand-green/20"}`}>
                      {isAdded ? <><Check size={16} /><span>Added!</span></> : <><ShoppingCart size={16} /><span>Try Monkaura</span></>}
                    </button>
                    <button onClick={() => { setBuyNowProduct(product); setBuyNowQty(quantity); }} className="flex-grow h-12 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md">Buy Now (₹{product.price * quantity})</button>
                  </div>
                </div>
              </div>
            </div>

            {PRODUCTS.length > 1 && (
              <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 flex items-center justify-between w-[calc(100%+32px)] sm:w-[calc(100%+48px)] pointer-events-none">
                <button onClick={handlePrev} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 text-brand-dark flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer pointer-events-auto"><ChevronLeft size={20} /></button>
                <button onClick={handleNext} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 text-brand-dark flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer pointer-events-auto"><ChevronRight size={20} /></button>
              </div>
            )}
          </div>

          {PRODUCTS.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {PRODUCTS.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === idx ? "bg-brand-green w-6" : "bg-brand-green/20 hover:bg-brand-green/40"}`} />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" onClick={onExploreAll} className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-green-light underline underline-offset-4 cursor-pointer">View all packs side-by-side</Link>
        </div>
      </div>
      <BuyNowModal product={buyNowProduct} initialQuantity={buyNowQty} isOpen={buyNowProduct !== null} onClose={() => setBuyNowProduct(null)} />
    </section>
  );
}
