import React, { useState } from "react";
import { Check, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import ProductDetailsModal from "./ProductDetailsModal";
import BuyNowModal from "./BuyNowModal";
import { Helmet } from "react-helmet-async";
import { trackAddToCart, trackBuyNowClick } from "../utils/analytics";

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
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
    trackAddToCart(p, q);
    onAddToCart(p, q);
    setAdded(prev => ({ ...prev, [p.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [p.id]: false })), 2000);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-brand-cream relative">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/products" />
        <title>Buy Monk Fruit Sweetener Online India (100g & 200g) | MÕNKAURA</title>
        <meta name="description" content="Buy natural monk fruit sweetener online in India. MÕNKAURA 100g Trial and 200g Everyday packs — 1:1 sugar replacement with Non-GMO Erythritol & pure Monk Fruit. Fast pan-India delivery." />
        <meta name="keywords" content="monk fruit sweetener India, buy monk fruit sweetener online, monk fruit sweetener 100g, monk fruit sweetener 200g, erythritol monk fruit blend India" />
        <meta property="og:title" content="Buy Monk Fruit Sweetener Online India (100g & 200g) | MÕNKAURA" />
        <meta property="og:description" content="100% Natural Monk Fruit & Erythritol sweetener in 100g and 200g packs. 1:1 sugar replacement for tea, coffee, cooking and baking." />
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
              name: `${p.name} - MÕNKAURA 1:1 Monk Fruit & Erythritol Sweetener (${p.weight})`,
              image: p.image,
              description: p.description,
              sku: `MONKAURA-${p.id.toUpperCase()}`,
              brand: { "@type": "Brand", name: "MÕNKAURA" },
              offers: {
                "@type": "Offer",
                url: "https://monkaura.in/products",
                priceCurrency: "INR",
                price: p.price,
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                seller: { "@type": "Organization", name: "MÕNKAURA" }
              }
            }))
          ])}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase tracking-widest text-brand-green font-semibold">
            Packs & Pricing · Monk Fruit, Erythritol
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight font-bold">
            Choose Your MONKAURA Pack
          </h1>
          <p className="text-brand-dark/70 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Formulated for everyday Indian beverages, cooking, and traditional sweets. Start with 100g or stock your kitchen with 200g.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRODUCTS.map(product => {
            const qty = getQty(product.id);
            const tab = activeTabs[product.id] || "taste";
            const imgIdx = activeImageIdx[product.id] || 0;
            const images = product.images || [product.image];
            const curImg = images[imgIdx];
            return (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-2xs overflow-hidden flex flex-col justify-between">
                <div className="p-6 pb-2">
                  <div onClick={() => setSelectedProduct(product)} className="relative aspect-square w-full rounded-xl bg-brand-cream/40 overflow-hidden flex justify-center items-center cursor-pointer group/img">
                    <img src={curImg} alt={product.name} className="w-full h-full object-contain p-4" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">{product.weight} Pack</div>
                    {images.length > 1 && (
                      <>
                        <button onClick={e => { e.stopPropagation(); setActiveImageIdx(prev => ({ ...prev, [product.id]: (imgIdx - 1 + images.length) % images.length })); }} className="absolute left-2 w-8 h-8 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-xs opacity-0 group-hover/img:opacity-100 cursor-pointer" aria-label="Previous image"><ChevronLeft size={16} /></button>
                        <button onClick={e => { e.stopPropagation(); setActiveImageIdx(prev => ({ ...prev, [product.id]: (imgIdx + 1) % images.length })); }} className="absolute right-2 w-8 h-8 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-xs opacity-0 group-hover/img:opacity-100 cursor-pointer" aria-label="Next image"><ChevronRight size={16} /></button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
                          {images.map((_, idx) => (
                            <button key={idx} onClick={e => { e.stopPropagation(); setActiveImageIdx(prev => ({ ...prev, [product.id]: idx })); }} className={`w-1.5 h-1.5 rounded-full ${imgIdx === idx ? "bg-white w-3" : "bg-white/50"}`} aria-label={`View image ${idx + 1}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="px-6 space-y-3 flex-1">
                  <div className="flex justify-between items-start gap-2 pt-2">
                    <div className="flex-1">
                      <a href={`/products/monkaura-${product.weight.toLowerCase()}`} className="hover:text-brand-green transition-colors">
                        <h2 className="font-serif font-bold text-xl text-brand-dark leading-tight">{product.name}</h2>
                      </a>
                      <p className="text-xs font-semibold text-brand-green uppercase tracking-wide mt-1">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed font-light">{product.description}</p>
                  
                  <div className="grid grid-cols-1 gap-1.5 py-2.5 border-y border-gray-100 text-xs font-light text-brand-dark/80">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check size={13} className="text-brand-green shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-cream/40 rounded-xl p-3.5 text-xs space-y-2 border border-gray-100">
                    <div className="flex border-b border-gray-200/80 gap-3 pb-1">
                      <button onClick={() => setActiveTabs(prev => ({ ...prev, [product.id]: "taste" }))} className={`pb-1 font-semibold text-xs transition-colors cursor-pointer ${tab === "taste" ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark/50"}`}>Taste & Use</button>
                      <button onClick={() => setActiveTabs(prev => ({ ...prev, [product.id]: "nutrition" }))} className={`pb-1 font-semibold text-xs transition-colors cursor-pointer ${tab === "nutrition" ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark/50"}`}>Nutrition</button>
                      <button onClick={() => setActiveTabs(prev => ({ ...prev, [product.id]: "features" }))} className={`pb-1 font-semibold text-xs transition-colors cursor-pointer ${tab === "features" ? "text-brand-green border-b-2 border-brand-green" : "text-brand-dark/50"}`}>Highlights</button>
                    </div>
                    <div className="pt-1 min-h-[80px] flex flex-col justify-center">
                      {tab === "taste" && <p className="text-xs text-brand-dark/80 italic font-light leading-relaxed">Formulated with Non-GMO Monk Fruit, Erythritol. Delivers smooth, sugar-like sweetness for daily tea, coffee, cooking and baking. Use 1:1 spoon for spoon.</p>}
                      {tab === "nutrition" && (
                        <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs">
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
                            <div key={i} className="text-xs leading-relaxed"><span className="font-semibold text-brand-green">{feat.title}: </span><span className="text-brand-dark/70 font-light">{feat.description}</span></div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-gray-100 bg-brand-cream/30 mt-4">
                  <div className="flex justify-between items-baseline mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-serif font-bold text-brand-dark">₹{product.price}</span>
                      <span className="text-sm text-brand-dark/40 line-through">₹{product.originalPrice}</span>
                      <span className="text-xs font-semibold text-brand-green bg-brand-mint/60 px-2 py-0.5 rounded">Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
                    </div>
                    <span className="text-xs text-brand-dark/60 font-medium">{product.weight} Net Wt.</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-white h-11 shrink-0">
                        <button onClick={() => handleQty(product.id, "dec")} className="px-3 h-full cursor-pointer" disabled={qty <= 1} aria-label="Decrease quantity"><Minus size={14} /></button>
                        <span className="px-3 font-semibold text-xs select-none">{qty}</span>
                        <button onClick={() => handleQty(product.id, "inc")} className="px-3 h-full cursor-pointer" aria-label="Increase quantity"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => handleAdd(product)} className={`flex-1 h-11 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${added[product.id] ? "bg-brand-green text-white" : "border border-brand-green/30 bg-white text-brand-green hover:bg-brand-mint-light/40"}`}>
                        {added[product.id] ? <><Check size={15} /><span>Added!</span></> : <><ShoppingCart size={14} /><span>Add to Cart · ₹{product.price * qty}</span></>}
                      </button>
                    </div>
                    <button onClick={() => { trackBuyNowClick(product, qty); setBuyNowProduct(product); setBuyNowQty(qty); }} className="w-full h-11 bg-brand-green hover:bg-brand-green-light text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs">Buy Now · ₹{product.price * qty}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ProductDetailsModal product={selectedProduct} isOpen={selectedProduct !== null} onClose={() => setSelectedProduct(null)} onAddToCart={onAddToCart} onBuyNow={(prod, qty) => { setSelectedProduct(null); setBuyNowProduct(prod); setBuyNowQty(qty); }} />
      <BuyNowModal product={buyNowProduct} initialQuantity={buyNowQty} isOpen={buyNowProduct !== null} onClose={() => setBuyNowProduct(null)} />
    </section>
  );
}
