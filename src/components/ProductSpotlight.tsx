import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, 
  Sparkles, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  Info,
  Flame,
  Activity,
  Heart
} from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import BuyNowModal from "./BuyNowModal";

interface ProductSpotlightProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onExploreAll: () => void;
}

export default function ProductSpotlight({ onAddToCart, onExploreAll }: ProductSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"taste" | "nutrition" | "features">("taste");
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buyNowProduct, setBuyNowProduct] = useState<Product | null>(null);
  const [buyNowQty, setBuyNowQty] = useState(1);

  const product = PRODUCTS[currentIndex];
  const images = product.images || [product.image];
  const [imageIndex, setImageIndex] = useState(0);

  // Reset local state when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveTab("taste");
    setImageIndex(0);
    setIsAdded(false);
  }, [currentIndex]);

  // Auto-rotation effect (5 seconds gap)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleNext = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handleQtyChange = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      if (type === "dec" && prev <= 1) return prev;
      return type === "inc" ? prev + 1 : prev - 1;
    });
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  // Variants for slide animation
  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "left" ? "30%" : "-30%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "left" ? "-30%" : "30%",
      opacity: 0,
    }),
  };

  return (
    <section 
      id="product-spotlight-section" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-brand-mint/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-gold/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-brand-orange text-xs font-black bg-brand-orange/10 px-4 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
            <Sparkles size={12} className="animate-spin" />
            <span>Featured Spotlight</span>
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            Discover Our Packagings <span className="text-brand-green">One by One</span>
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light">
            Take a closer look at our individual offerings. Pure premium monk fruit sweetness designed to elevate your health and culinary experience.
          </p>
        </div>

        {/* Carousel & Spotlight Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Slide Panel */}
          <div className="bg-brand-cream/60 border border-gray-100 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-xl relative min-h-[520px] flex flex-col justify-between">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side: Images Grid/Slide */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-square w-full rounded-2xl bg-white p-4 shadow-md flex items-center justify-center overflow-hidden border border-gray-50 group/spot-img">
                    <img
                      src={images[imageIndex]}
                      alt={product.name}
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Secondary Image Indicators */}
                    {images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/10 backdrop-blur-xs px-2.5 py-1 rounded-full">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setImageIndex(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              imageIndex === idx ? "bg-brand-green w-3.5" : "bg-brand-green/30 hover:bg-brand-green/70"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {product.outOfStock ? (
                      <>
                        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          Sold Out
                        </div>
                        <div className="absolute inset-0 bg-brand-dark/25 backdrop-blur-xs flex items-center justify-center pointer-events-none">
                          <span className="bg-white/95 text-brand-dark font-serif font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-wider">Out of Stock</span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Premium 1:1 Blend
                      </div>
                    )}
                  </div>

                  {/* Benefit highlights as clean row */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] bg-white border border-gray-100 text-brand-dark/80 font-medium px-2.5 py-1 rounded-full shadow-2xs"
                      >
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Product Presentation Panel */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                        {product.subtitle}
                      </span>
                      {/* Rating */}
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-yellow-500">
                          <Star size={12} fill="currentColor" />
                        </div>
                        <span className="text-xs font-bold text-brand-dark">4.9/5</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-dark leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-brand-dark/70 text-sm leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Informational Tabs inside Spotlight Card */}
                  <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 shadow-sm space-y-3">
                    <div className="flex border-b border-gray-100 pb-2 gap-4">
                      <button
                        onClick={() => setActiveTab("taste")}
                        className={`text-xs font-bold pb-1 transition-all border-b-2 cursor-pointer ${
                          activeTab === "taste"
                            ? "text-brand-green border-brand-green"
                            : "text-brand-dark/40 border-transparent hover:text-brand-dark"
                        }`}
                      >
                        Taste Profile
                      </button>
                      <button
                        onClick={() => setActiveTab("nutrition")}
                        className={`text-xs font-bold pb-1 transition-all border-b-2 cursor-pointer ${
                          activeTab === "nutrition"
                            ? "text-brand-green border-brand-green"
                            : "text-brand-dark/40 border-transparent hover:text-brand-dark"
                        }`}
                      >
                        Nutrition Facts
                      </button>
                      <button
                        onClick={() => setActiveTab("features")}
                        className={`text-xs font-bold pb-1 transition-all border-b-2 cursor-pointer ${
                          activeTab === "features"
                            ? "text-brand-green border-brand-green"
                            : "text-brand-dark/40 border-transparent hover:text-brand-dark"
                        }`}
                      >
                        Packaging Highlights
                      </button>
                    </div>

                    <div className="min-h-[70px] flex flex-col justify-center text-xs">
                      {activeTab === "taste" && (
                        <p className="text-brand-dark/80 italic leading-relaxed font-light">
                          "Tastes and measures exactly like table sugar, leaving absolutely no bitter aftertaste or metallic cooling sensation. Use it in a 1:1 ratio for tea, coffee, baking, and all your favorite traditional Indian sweets."
                        </p>
                      )}

                      {activeTab === "nutrition" && (
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px]">
                          <div className="flex justify-between border-b border-gray-50 pb-1">
                            <span className="text-brand-dark/50">Added sugar</span>
                            <span className="font-semibold text-brand-green">{product.nutritionFacts.addedSugar}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-1">
                            <span className="text-brand-dark/50">Energy</span>
                            <span className="font-semibold text-brand-green">{product.nutritionFacts.energy}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-1">
                            <span className="text-brand-dark/50">Glycemic Index</span>
                            <span className="font-semibold text-brand-green">0 (Flat)</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-1">
                            <span className="text-brand-dark/50">Net Carbs</span>
                            <span className="font-semibold text-brand-green">0g</span>
                          </div>
                        </div>
                      )}

                      {activeTab === "features" && (
                        <div className="space-y-1.5">
                          {product.features.slice(0, 2).map((feat, i) => (
                            <div key={i} className="leading-relaxed">
                              <span className="font-semibold text-brand-green">{feat.title}: </span>
                              <span className="text-brand-dark/70 font-light">{feat.description}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Action Elements */}
                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between items-baseline">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-brand-dark">₹{product.price}</span>
                        <span className="text-sm text-brand-dark/40 line-through">₹{product.originalPrice}</span>
                        <span className="text-xs text-brand-orange font-bold bg-brand-orange/10 px-2 py-0.5 rounded">
                          Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                      </div>
                      <span className="text-xs text-brand-dark/50 font-medium">Net weight: {product.weight}</span>
                    </div>

                    {product.outOfStock ? (
                      <div className="w-full space-y-2">
                        <button
                          disabled
                          className="w-full h-12 bg-gray-100 text-gray-400 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200"
                        >
                          <span>Out of Stock</span>
                        </button>
                        <p className="text-center text-[11px] text-brand-dark/50 italic">
                          Temporarily sold out. Use our Concierge to reserve yours or get notified!
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-200 rounded-xl bg-white h-12 shrink-0">
                          <button
                            onClick={() => handleQtyChange("dec")}
                            className="px-3 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-l-xl cursor-pointer"
                            disabled={quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 font-semibold text-brand-dark text-sm select-none">{quantity}</span>
                          <button
                            onClick={() => handleQtyChange("inc")}
                            className="px-3 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-r-xl cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Add to Cart */}
                        <button
                          onClick={handleAddToCartClick}
                          className={`flex-grow h-12 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                            isAdded
                              ? "bg-brand-green text-white"
                              : "bg-brand-mint-light hover:bg-brand-mint text-brand-green border border-brand-green/20"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check size={16} className="text-brand-green animate-bounce" />
                              <span>Added to Cart!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={16} />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>

                        {/* Buy Now Direct Button */}
                        <button
                          onClick={() => {
                            setBuyNowProduct(product);
                            setBuyNowQty(quantity);
                          }}
                          className="flex-grow h-12 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <span>Buy Now (₹{product.price * quantity})</span>
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left and Right Carousel Control Arrows */}
            <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 flex items-center justify-between w-[calc(100%+32px)] sm:w-[calc(100%+48px)] pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 text-brand-dark flex items-center justify-center shadow-lg hover:scale-105 hover:text-brand-green transition-all cursor-pointer pointer-events-auto"
                aria-label="Previous Spotlight"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 text-brand-dark flex items-center justify-center shadow-lg hover:scale-105 hover:text-brand-green transition-all cursor-pointer pointer-events-auto"
                aria-label="Next Spotlight"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {PRODUCTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? "left" : "right");
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-brand-green w-6" : "bg-brand-green/20 hover:bg-brand-green/40"
                }`}
                aria-label={`Go to product spotlight ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Explore All Link / CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-green-light underline underline-offset-4 cursor-pointer transition-colors group"
          >
            <span>Explore All Sweeteners catalog side-by-side</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Immersive Buy Now Billing and Direct Checkout Portal */}
      <BuyNowModal
        product={buyNowProduct}
        initialQuantity={buyNowQty}
        isOpen={buyNowProduct !== null}
        onClose={() => setBuyNowProduct(null)}
      />
    </section>
  );
}
