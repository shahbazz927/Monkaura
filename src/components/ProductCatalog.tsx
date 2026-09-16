<<<<<<< HEAD
import React, { useState } from "react";
import { Check, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
=======
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShieldCheck, Heart, Info, Plus, Minus, ShoppingCart, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product, CartItem } from "../types";
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
import ProductDetailsModal from "./ProductDetailsModal";
import BuyNowModal from "./BuyNowModal";
import { Helmet } from "react-helmet-async";

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
<<<<<<< HEAD
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({});
  const [activeImageIdx, setActiveImageIdx] = useState<Record<string, number>>({});
  const [added, setAdded] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [buyNowProduct, setBuyNowProduct] = useState<Product | null>(null);
  const [buyNowQty, setBuyNowQty] = useState(1);

  const getQty = (id: string) => quantities[id] || 1;
  const handleQty = (id: string, dir: "inc" | "dec") => {
    setQuantities(prev => {
      const cur = prev[id] || 1;
      if (dir === "dec" && cur <= 1) return prev;
      return { ...prev, [id]: dir === "inc" ? cur + 1 : cur - 1 };
    });
  };
  const handleAdd = (p: Product) => {
    const q = getQty(p.id);
    onAddToCart(p, q);
    setAdded(prev => ({ ...prev, [p.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [p.id]: false })), 2000);
=======
  const [quantities, setQuantities] = useState<Record<string, number>>({
    jar: 1,
    pouch: 1,
    box: 1
  });

  const [activeTab, setActiveTab] = useState<Record<string, "taste" | "nutrition" | "features">>({
    jar: "taste",
    pouch: "taste",
    box: "taste"
  });

  const [addedAlert, setAddedAlert] = useState<Record<string, boolean>>({});
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});
  const [slideDirection, setSlideDirection] = useState<Record<string, "left" | "right">>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [buyNowProduct, setBuyNowProduct] = useState<Product | null>(null);
  const [buyNowQty, setBuyNowQty] = useState<number>(1);

  // Automatic slide rotation for product photos on Home Page (3-second gap)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(prev => {
        const nextDirs = { ...prev };
        PRODUCTS.forEach(product => {
          nextDirs[product.id] = "left";
        });
        return nextDirs;
      });
      setActiveImageIndex(prev => {
        const nextIndices = { ...prev };
        PRODUCTS.forEach(product => {
          const images = product.images || [product.image];
          if (images.length > 1) {
            const currentIdx = prev[product.id] || 0;
            nextIndices[product.id] = (currentIdx + 1) % images.length;
          }
        });
        return nextIndices;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleQtyChange = (id: string, type: "inc" | "dec") => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      if (type === "dec" && current <= 1) return prev;
      return {
        ...prev,
        [id]: type === "inc" ? current + 1 : current - 1
      };
    });
  };

  const handleAddToCartClick = (product: Product) => {
    const qty = quantities[product.id] || 1;
    onAddToCart(product, qty);
    
    // Show temporary success feedback
    setAddedAlert(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAlert(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-brand-cream relative">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/products" />
<<<<<<< HEAD
        <title>Monkaura Packs — 100g Trial Pack & 200g — Allulose & Monk Fruit</title>
        <meta name="description" content="Choose Monkaura 100g Trial Pack or 200g — made with premium Allulose and Monk Fruit. Sugar-like taste, 1:1 replacement for tea, coffee, cooking and baking." />
        <meta name="keywords" content="Monkaura 100g, Monkaura 200g, allulose sweetener India, monk fruit sweetener" />
        <meta property="og:title" content="Monkaura Packs — 100g & 200g — Allulose & Monk Fruit" />
        <meta property="og:description" content="100g Trial Pack and 200g — Allulose + Monk Fruit, sugar-like taste, 1:1 replacement." />
        <meta property="og:url" content="https://monkaura.in/products" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={PRODUCTS[0]?.image} />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://monkaura.in/" },
                { "@type": "ListItem", position: 2, name: "Products", item: "https://monkaura.in/products" }
              ]
            },
            ...PRODUCTS.map(p => ({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: `${p.name} - Monkaura Allulose & Monk Fruit (${p.weight})`,
              image: p.image,
              description: p.description,
              sku: `MONKAURA-${p.id.toUpperCase()}`,
              brand: { "@type": "Brand", name: "MONKAURA" },
              offers: { "@type": "Offer", url: "https://monkaura.in/products", priceCurrency: "INR", price: p.price, availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "MONKAURA" } }
            }))
          ])}
=======
        <title>Buy Monkaura Zero-Calorie Monk Fruit & Allulose Sweetener Online</title>
        <meta name="description" content="Shop Monkaura natural sweeteners in India — pure Allulose & Monk Fruit blend, 0 calories, 0 glycemic impact. Premium glass jar, portable pouch & value gift box. Order via WhatsApp." />
        <meta name="keywords" content="buy monk fruit sweetener India, allulose sweetener India, zero calorie sweetener online, keto sweetener buy, diabetic sugar substitute India" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Buy Monkaura Zero-Calorie Monk Fruit & Allulose Sweetener Online" />
        <meta property="og:description" content="Shop Monkaura natural sweeteners — pure Allulose & Monk Fruit blend, 0 calories, 0 glycemic impact. Premium glass jar, portable pouch & value gift box." />
        <meta property="og:url" content="https://monkaura.in/products" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1suD2ux9Ua3YPiS8XSJ4HapGQ5nU9GDko" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Monkaura Zero-Calorie Monk Fruit & Allulose Sweetener Online" />
        <meta name="twitter:description" content="Shop Monkaura natural sweeteners — pure Allulose & Monk Fruit blend, 0 calories, 0 glycemic impact." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1suD2ux9Ua3YPiS8XSJ4HapGQ5nU9GDko" />
        <script type="application/ld+json">
          {JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://monkaura.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://monkaura.in/products"
                  }
                ]
              },
              ...PRODUCTS.map(product => ({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": `${product.name} - Monkaura Monk Fruit & Allulose Sweetener (${product.weight})`,
                "image": product.image,
                "description": product.description,
                "sku": `MONKAURA-${product.id.toUpperCase()}`,
                "mpn": `MONKAURA-${product.id.toUpperCase()}`,
                "brand": {
                  "@type": "Brand",
                  "name": "MONKAURA"
                },
                "category": "Natural Sweetener",
                "offers": {
                  "@type": "Offer",
                  "url": "https://monkaura.in/products",
                  "priceCurrency": "INR",
                  "price": product.price,
                  "availability": product.outOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition",
                  "seller": {
                    "@type": "Organization",
                    "name": "MONKAURA"
                  }
                }
              }))
            ]
          )}
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
            Choose Your <span className="text-brand-green">Monkaura</span> Pack
          </h1>
          <p className="text-brand-dark/60 font-bold text-sm tracking-widest uppercase">Try the sweetness. Make the switch.</p>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light">Try Monkaura 100g Trial Pack or 200g — Allulose + Monk Fruit for everyday tea, coffee, cooking and baking.</p>
          <div className="flex justify-center items-center gap-3">
            <div className="h-[2px] w-12 bg-brand-gold rounded" />
            <span className="text-brand-gold font-brand tracking-widest text-xs font-semibold uppercase">Allulose + Monk Fruit</span>
            <div className="h-[2px] w-12 bg-brand-gold rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRODUCTS.map(product => {
            const qty = getQty(product.id);
            const tab = activeTabs[product.id] || "taste";
            const imgIdx = activeImageIdx[product.id] || 0;
            const images = product.images || [product.image];
            const curImg = images[imgIdx];
            return (
              <div key={product.id} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col">
                <div className="p-6 pb-2">
                  <div onClick={() => setSelectedProduct(product)} className="relative aspect-square w-full rounded-2xl bg-brand-cream/50 overflow-hidden flex justify-center items-center cursor-pointer group/img">
                    <img src={curImg} alt={product.name} className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{product.weight} Pack</div>
                    {images.length > 1 && (
                      <>
                        <button onClick={e => { e.stopPropagation(); setActiveImageIdx(prev => ({ ...prev, [product.id]: (imgIdx - 1 + images.length) % images.length })); }} className="absolute left-2 w-8 h-8 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-md opacity-0 group-hover/img:opacity-100 cursor-pointer"><ChevronLeft size={16} /></button>
                        <button onClick={e => { e.stopPropagation(); setActiveImageIdx(prev => ({ ...prev, [product.id]: (imgIdx + 1) % images.length })); }} className="absolute right-2 w-8 h-8 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-md opacity-0 group-hover/img:opacity-100 cursor-pointer"><ChevronRight size={16} /></button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
                          {images.map((_, idx) => (
                            <button key={idx} onClick={e => { e.stopPropagation(); setActiveImageIdx(prev => ({ ...prev, [product.id]: idx })); }} className={`w-1.5 h-1.5 rounded-full ${imgIdx === idx ? "bg-white w-3" : "bg-white/50"}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="px-6 space-y-3 flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <div onClick={() => setSelectedProduct(product)} className="cursor-pointer flex-1">
                      <h2 className="font-serif font-extrabold text-xl text-brand-dark leading-tight">{product.name}</h2>
                      <p className="text-xs font-semibold text-brand-gold tracking-wide mt-1 uppercase">{product.subtitle}</p>
                    </div>
                    <button className="p-1.5 rounded-full bg-brand-cream text-brand-green/70"><Heart size={16} /></button>
                  </div>
                  <p className="text-xs text-brand-dark/70 leading-relaxed font-light">{product.description}</p>
                  <div className="grid grid-cols-1 gap-1.5 py-2 border-y border-gray-50 text-[11px] font-medium text-brand-dark/80">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-1"><Check size={12} className="text-brand-green shrink-0" /><span>{b}</span></div>
                    ))}
                  </div>
                  <div className="bg-brand-cream/50 rounded-xl p-3 text-xs space-y-2 border border-gray-100/50">
                    <div className="flex border-b border-gray-200">
                      <button onClick={() => setActiveTabs(prev => ({ ...prev, [product.id]: "taste" }))} className={`flex-1 text-center pb-1.5 font-bold ${tab === "taste" ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark/50"} cursor-pointer`}>Use & Taste</button>
                      <button onClick={() => setActiveTabs(prev => ({ ...prev, [product.id]: "nutrition" }))} className={`flex-1 text-center pb-1.5 font-bold ${tab === "nutrition" ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark/50"} cursor-pointer`}>Nutrition</button>
                      <button onClick={() => setActiveTabs(prev => ({ ...prev, [product.id]: "features" }))} className={`flex-1 text-center pb-1.5 font-bold ${tab === "features" ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark/50"} cursor-pointer`}>Highlights</button>
                    </div>
                    <div className="pt-1.5 min-h-[90px] flex flex-col justify-center">
                      {tab === "taste" && <p className="text-[11px] text-brand-dark/80 italic leading-relaxed">Made with premium Allulose and Monk Fruit, Monkaura delivers a smooth, sugar-like sweetness designed for everyday use in tea, coffee, cooking and baking. Use 1:1 like sugar.</p>}
                      {tab === "nutrition" && (
                        <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[10px]">
                          <div className="flex justify-between border-b border-gray-100 pb-0.5"><span className="text-brand-dark/50">Serve Size</span><span className="font-semibold">{product.nutritionFacts.servingSize}</span></div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5"><span className="text-brand-dark/50">Added sugar</span><span className="font-semibold text-brand-green">{product.nutritionFacts.addedSugar}</span></div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5"><span className="text-brand-dark/50">Total Fat</span><span className="font-semibold">{product.nutritionFacts.totalFat}</span></div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5"><span className="text-brand-dark/50">Total Carbs</span><span className="font-semibold">{product.nutritionFacts.totalCarb}</span></div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5"><span className="text-brand-dark/50">Energy</span><span className="font-semibold text-brand-green">{product.nutritionFacts.energy}</span></div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5"><span className="text-brand-dark/50">Protein</span><span className="font-semibold">{product.nutritionFacts.protein}</span></div>
                        </div>
                      )}
                      {tab === "features" && (
                        <div className="space-y-1.5">
                          {product.features.map((feat, i) => (
                            <div key={i} className="text-[10px] leading-tight"><span className="font-semibold text-brand-green">{feat.title}: </span><span className="text-brand-dark/70">{feat.description}</span></div>
=======
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            Choose Your Perfect <span className="text-brand-green">MÕNKAURA</span> <br />
            Natural Monk Fruit Sweetener
          </h1>
          <div className="flex justify-center items-center gap-3">
            <div className="h-[2px] w-12 bg-brand-gold rounded" />
            <span className="text-brand-gold font-brand tracking-widest text-xs font-semibold uppercase">Pure Sweetness</span>
            <div className="h-[2px] w-12 bg-brand-gold rounded" />
          </div>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light">
            Whether you want an elegant jar for your kitchen, a portable stand-up pouch, or a premium gift box, we have the perfect packaging to elevate your wellness journey.
          </p>
        </div>



        {/* Dynamic Interactive Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {PRODUCTS.map(product => {
            const qty = quantities[product.id] || 1;
            const tab = activeTab[product.id] || "taste";
            const images = product.images || [product.image];
            const currentImgIndex = activeImageIndex[product.id] || 0;
            const currentImage = images[currentImgIndex];

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-brand-green/20 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Image and Tagline */}
                <div className="p-6 pb-2">
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="relative aspect-square w-full rounded-2xl bg-brand-cream/50 overflow-hidden flex justify-center items-center group/img cursor-pointer"
                  >
                    <AnimatePresence initial={false} custom={slideDirection[product.id] || "left"}>
                      <motion.img
                        key={currentImgIndex}
                        custom={slideDirection[product.id] || "left"}
                        variants={{
                          enter: (dir: "left" | "right") => ({
                            x: dir === "left" ? "100%" : "-100%",
                            opacity: 0
                          }),
                          center: {
                            x: 0,
                            opacity: 1
                          },
                          exit: (dir: "left" | "right") => ({
                            x: dir === "left" ? "-100%" : "100%",
                            opacity: 0
                          })
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.25 }
                        }}
                        src={currentImage}
                        alt={`${product.name} - view ${currentImgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover/img:scale-102"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                    {product.outOfStock ? (
                      <>
                        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-md">
                          Sold Out
                        </div>
                        <div className="absolute inset-0 bg-brand-dark/25 backdrop-blur-xs z-10 flex items-center justify-center pointer-events-none">
                          <span className="bg-white/95 text-brand-dark font-serif font-extrabold text-[11px] sm:text-xs px-3 py-2 rounded-xl shadow-lg uppercase tracking-wider text-center">Temporarily Out of Stock</span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                        {product.weight} Pack
                      </div>
                    )}

                    {/* Slideshow Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSlideDirection(prev => ({
                              ...prev,
                              [product.id]: "right"
                            }));
                            setActiveImageIndex(prev => ({
                              ...prev,
                              [product.id]: (currentImgIndex - 1 + images.length) % images.length
                            }));
                          }}
                          className="absolute left-2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-brand-dark flex items-center justify-center shadow-md hover:scale-105 transition-all opacity-0 group-hover/img:opacity-100 cursor-pointer z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSlideDirection(prev => ({
                              ...prev,
                              [product.id]: "left"
                            }));
                            setActiveImageIndex(prev => ({
                              ...prev,
                              [product.id]: (currentImgIndex + 1) % images.length
                            }));
                          }}
                          className="absolute right-2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-brand-dark flex items-center justify-center shadow-md hover:scale-105 transition-all opacity-0 group-hover/img:opacity-100 cursor-pointer z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {/* Dot Indicators */}
                    {images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full z-10">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              const dir = idx > currentImgIndex ? "left" : "right";
                              setSlideDirection(prev => ({
                                ...prev,
                                [product.id]: dir
                              }));
                              setActiveImageIndex(prev => ({
                                ...prev,
                                [product.id]: idx
                              }));
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              currentImgIndex === idx ? "bg-white w-3" : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info and Ratings */}
                <div className="px-6 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <div 
                      onClick={() => setSelectedProduct(product)}
                      className="cursor-pointer group/title flex-1"
                    >
                      <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-brand-dark leading-tight group-hover/title:text-brand-green group-hover:text-brand-green transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-xs font-semibold text-brand-gold tracking-wide mt-1 uppercase">
                        {product.subtitle}
                      </p>
                    </div>
                    
                    {/* Fake Likes Indicator */}
                    <button className="p-1.5 rounded-full bg-brand-cream hover:bg-brand-mint-light text-brand-green/70 hover:text-brand-green transition-colors cursor-pointer">
                      <Heart size={16} />
                    </button>
                  </div>

                  {/* Reviews rating */}
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-brand-dark">4.9</span>
                    <span className="text-xs text-brand-dark/40">(148 Verified Reviews)</span>
                  </div>

                  <p 
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs text-brand-dark/70 leading-relaxed font-light line-clamp-3 cursor-pointer hover:text-brand-dark transition-colors"
                  >
                    {product.description}
                  </p>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-bold text-brand-green hover:text-brand-green-light flex items-center gap-1 cursor-pointer hover:underline pt-0.5"
                  >
                    <span>View details & photos →</span>
                  </button>

                  {/* Highlight Benefits List */}
                  <div className="grid grid-cols-2 gap-1.5 py-2 border-t border-b border-gray-50 text-[11px] font-medium text-brand-dark/80">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <Check size={12} className="text-brand-green font-bold shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Details Tab panel in Card */}
                  <div className="bg-brand-cream/50 rounded-xl p-3 text-xs space-y-2 border border-gray-100/50">
                    <div className="flex border-b border-gray-200">
                      <button
                        onClick={() => setActiveTab(prev => ({ ...prev, [product.id]: "taste" }))}
                        className={`flex-1 text-center pb-1.5 font-bold tracking-wide transition-all ${
                          tab === "taste"
                            ? "text-brand-green border-b-2 border-brand-green font-extrabold"
                            : "text-brand-dark/50 hover:text-brand-dark"
                        } cursor-pointer`}
                      >
                        Use & Taste
                      </button>
                      <button
                        onClick={() => setActiveTab(prev => ({ ...prev, [product.id]: "nutrition" }))}
                        className={`flex-1 text-center pb-1.5 font-bold tracking-wide transition-all ${
                          tab === "nutrition"
                            ? "text-brand-green border-b-2 border-brand-green font-extrabold"
                            : "text-brand-dark/50 hover:text-brand-dark"
                        } cursor-pointer`}
                      >
                        Nutrition
                      </button>
                      <button
                        onClick={() => setActiveTab(prev => ({ ...prev, [product.id]: "features" }))}
                        className={`flex-1 text-center pb-1.5 font-bold tracking-wide transition-all ${
                          tab === "features"
                            ? "text-brand-green border-b-2 border-brand-green font-extrabold"
                            : "text-brand-dark/50 hover:text-brand-dark"
                        } cursor-pointer`}
                      >
                        Highlights
                      </button>
                    </div>

                    <div className="pt-1.5 min-h-[96px] flex flex-col justify-center">
                      {tab === "taste" && (
                        <p className="text-[11px] text-brand-dark/80 italic leading-relaxed font-light">
                          "Taste & Use Just Like Sugar. Measures 1:1 exactly. Perfect for making traditional Indian sweets, keto bakes, daily teas and hot coffee. No metallic cooling sensation."
                        </p>
                      )}

                      {tab === "nutrition" && (
                        <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[10px]">
                          <div className="flex justify-between border-b border-gray-100 pb-0.5">
                            <span className="text-brand-dark/50">Serve Size</span>
                            <span className="font-semibold">{product.nutritionFacts.servingSize}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5">
                            <span className="text-brand-dark/50">Added sugar</span>
                            <span className="font-semibold text-brand-green">{product.nutritionFacts.addedSugar}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5">
                            <span className="text-brand-dark/50">Total Fat</span>
                            <span className="font-semibold">{product.nutritionFacts.totalFat}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5">
                            <span className="text-brand-dark/50">Total Carbs</span>
                            <span className="font-semibold">{product.nutritionFacts.totalCarb}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5">
                            <span className="text-brand-dark/50">Energy</span>
                            <span className="font-semibold text-brand-green">{product.nutritionFacts.energy}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-100 pb-0.5">
                            <span className="text-brand-dark/50">Net Carbs</span>
                            <span className="font-semibold text-brand-green">0g</span>
                          </div>
                        </div>
                      )}

                      {tab === "features" && (
                        <div className="space-y-1.5">
                          {product.features.map((feat, i) => (
                            <div key={i} className="text-[10px] leading-tight">
                              <span className="font-semibold text-brand-green">{feat.title}: </span>
                              <span className="text-brand-dark/70">{feat.description}</span>
                            </div>
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="p-6 pt-4 border-t border-gray-50 bg-brand-cream-light/30 mt-4">
=======

                {/* Pricing and Action panel */}
                <div className="p-6 pt-4 border-t border-gray-50 bg-brand-cream-light/30">
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-brand-dark">₹{product.price}</span>
                      <span className="text-sm text-brand-dark/40 line-through">₹{product.originalPrice}</span>
<<<<<<< HEAD
                      <span className="text-xs text-brand-orange font-bold bg-brand-orange/10 px-2 py-0.5 rounded">Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
                    </div>
                    <span className="text-xs text-brand-dark/60 font-medium">{product.weight}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded-xl bg-white h-12 shrink-0">
                        <button onClick={() => handleQty(product.id, "dec")} className="px-3 h-full cursor-pointer" disabled={qty <= 1}><Minus size={14} /></button>
                        <span className="px-3 font-semibold text-sm">{qty}</span>
                        <button onClick={() => handleQty(product.id, "inc")} className="px-3 h-full cursor-pointer"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => handleAdd(product)} className={`flex-1 h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer ${added[product.id] ? "bg-brand-green text-white" : "bg-brand-mint-light text-brand-green border border-brand-green/20"}`}>
                        {added[product.id] ? <><Check size={16} /><span>Added!</span></> : <><ShoppingCart size={16} /><span>Try Monkaura</span></>}
                      </button>
                    </div>
                    <button onClick={() => { setBuyNowProduct(product); setBuyNowQty(qty); }} className="w-full h-12 bg-brand-orange text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md">Try Monkaura — Buy Now (₹{product.price * qty})</button>
=======
                      <span className="text-xs text-brand-orange font-bold bg-brand-orange/10 px-2 py-0.5 rounded ml-1">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </div>
                    <span className="text-xs text-brand-dark/60 font-medium">{product.weight} Net Weight</span>
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
                          We are crafting more premium glass jars. Drop a line to our Concierge to get notified!
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          {/* Quantity selectors */}
                          <div className="flex items-center border border-gray-200 rounded-xl bg-white h-12 shrink-0">
                            <button
                              onClick={() => handleQtyChange(product.id, "dec")}
                              className="px-3 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-l-xl cursor-pointer"
                              disabled={qty <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 font-semibold text-brand-dark text-sm select-none">{qty}</span>
                            <button
                              onClick={() => handleQtyChange(product.id, "inc")}
                              className="px-3 h-full text-brand-dark hover:text-brand-green hover:bg-brand-mint-light transition-colors rounded-r-xl cursor-pointer"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Add to Cart CTA */}
                          <button
                            onClick={() => handleAddToCartClick(product)}
                            className={`flex-1 h-12 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                              addedAlert[product.id]
                                ? "bg-brand-green text-white"
                                : "bg-brand-mint-light hover:bg-brand-mint text-brand-green border border-brand-green/20 shadow-xs hover:shadow-sm"
                            }`}
                          >
                            {addedAlert[product.id] ? (
                              <>
                                <Check size={16} className="text-brand-green animate-bounce" />
                                <span>Added!</span>
                              </>
                            ) : (
                              <>
                                <ShoppingCart size={16} />
                                <span>Add To Cart</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Buy Now Button */}
                        <button
                          onClick={() => {
                            setBuyNowProduct(product);
                            setBuyNowQty(qty);
                          }}
                          className="w-full h-12 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <span>Buy Now (₹{product.price * qty})</span>
                        </button>
                      </>
                    )}
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
<<<<<<< HEAD
      <ProductDetailsModal product={selectedProduct} isOpen={selectedProduct !== null} onClose={() => setSelectedProduct(null)} onAddToCart={onAddToCart} onBuyNow={(prod, qty) => { setSelectedProduct(null); setBuyNowProduct(prod); setBuyNowQty(qty); }} />
      <BuyNowModal product={buyNowProduct} initialQuantity={buyNowQty} isOpen={buyNowProduct !== null} onClose={() => setBuyNowProduct(null)} />
=======

      {/* Immersive Product Details Overlay Page */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
        onBuyNow={(prod, qty) => {
          setSelectedProduct(null);
          setBuyNowProduct(prod);
          setBuyNowQty(qty);
        }}
      />

      {/* Immersive Buy Now Billing and Direct Checkout Portal */}
      <BuyNowModal
        product={buyNowProduct}
        initialQuantity={buyNowQty}
        isOpen={buyNowProduct !== null}
        onClose={() => setBuyNowProduct(null)}
      />
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
    </section>
  );
}
