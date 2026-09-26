import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Plus, Minus, ShoppingBag, ShieldCheck, Truck, RefreshCw, Star, Info, HelpCircle } from "lucide-react";
import SEOBreadcrumb from "../components/SEOBreadcrumb";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import BuyNowModal from "../components/BuyNowModal";
import { trackViewItem, trackAddToCart, trackBuyNowClick } from "../utils/analytics";

interface ProductPageProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function Product100gPage({ onAddToCart }: ProductPageProps) {
  const product = PRODUCTS.find(p => p.id === "pouch-100g") || PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);
  const images = product.images || [product.image];

  useEffect(() => {
    trackViewItem(product);
  }, [product]);

  const handleAdd = () => {
    trackAddToCart(product, qty);
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    trackBuyNowClick(product, qty);
    setIsBuyNowOpen(true);
  };

  return (
    <div className="bg-brand-cream min-h-screen pb-16">
      <Helmet>
        <title>Buy Monk Fruit Sweetener 100g Online India — Monkaura 1:1 Sugar Substitute (₹149)</title>
        <meta
          name="description"
          content="Buy Monkaura 100g Trial Pack online in India: Premium Monk Fruit, Erythritol extract blend. Exact 1:1 sugar replacement for tea, coffee, cooking, and baking. ₹149."
        />
        <meta
          name="keywords"
          content="buy monk fruit sweetener online, monk fruit sweetener 100g, monkaura 100g, erythritol monk fruit india, 1:1 sugar substitute india"
        />
        <link rel="canonical" href="https://monkaura.in/products/monkaura-100g" />
        <meta property="og:title" content="Buy Monk Fruit Sweetener 100g Online India — Monkaura 1:1 (₹149)" />
        <meta
          property="og:description"
          content="100g Trial Pack of Monkaura Erythritol & Monk Fruit blend. Zero added sugar, 1:1 sugar replacement. Available now across India."
        />
        <meta property="og:url" content="https://monkaura.in/products/monkaura-100g" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={images[0]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Monkaura 100g Monk Fruit Sweetener (₹149)" />
        <meta name="twitter:description" content="100g Trial Pack — Monk Fruit, Erythritol. 1:1 sugar replacement." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Monkaura 100g Trial Pack - Monk Fruit, Erythritol",
            "image": images,
            "description": "Monkaura 100g Trial Pack: Table-top natural sweetener blend of non-GMO Erythritol and Monk Fruit extract (Siraitia grosvenorii). 1:1 sugar replacement ratio for tea, coffee, cooking and baking.",
            "sku": "MONKAURA-100G",
            "mpn": "MK-100G-ERY-MF",
            "brand": {
              "@type": "Brand",
              "name": "MONKAURA"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://monkaura.in/products/monkaura-100g",
              "priceCurrency": "INR",
              "price": 149,
              "priceValidUntil": "2027-12-31",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "MONKAURA",
                "url": "https://monkaura.in"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monkaura.in/" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://monkaura.in/products" },
              { "@type": "ListItem", "position": 3, "name": "Monkaura 100g Trial Pack", "item": "https://monkaura.in/products/monkaura-100g" }
            ]
          })}
        </script>
      </Helmet>

      <SEOBreadcrumb
        items={[
          { name: "Products", url: "/products" },
          { name: "Monkaura 100g Trial Pack", url: "/products/monkaura-100g" }
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Product Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-square bg-white rounded-3xl p-4 border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center">
              <img
                src={images[activeImgIdx]}
                alt={`Monkaura 100g Trial Pack monk fruit sweetener pouch view ${activeImgIdx + 1}`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIdx(i)}
                    className={`w-20 h-20 rounded-xl bg-white border-2 p-1 overflow-hidden shrink-0 cursor-pointer transition-all ${
                      activeImgIdx === i ? "border-brand-green shadow-sm" : "border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Monkaura 100g Trial Pack thumbnail view ${i + 1}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            <div className="bg-brand-mint-light/60 border border-brand-green/15 rounded-2xl p-4 text-xs space-y-2 text-brand-dark/80">
              <div className="flex items-center gap-2 font-bold text-brand-green">
                <Info size={16} />
                <span>Why Start with the 100g Trial Pack?</span>
              </div>
              <p>
                Perfect for first-time customers who want to test the taste in their daily morning tea, coffee, and evening cooking before switching their pantry to larger packs.
              </p>
            </div>
          </div>

          {/* Product Information & Purchase */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-2">
                Monk Fruit, Erythritol • 100g Trial Size
              </span>
              <h1 className="font-serif font-black text-3xl sm:text-4xl text-brand-dark">
                Monkaura 100g Trial Pack
              </h1>
              <p className="text-sm font-semibold text-brand-gold uppercase tracking-wide mt-1">
                Monk Fruit, Erythritol Sweetener Blend — 1:1 Sugar Replacement
              </p>
            </div>

            {/* Price section */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-baseline gap-3">
              <span className="text-3xl font-black text-brand-dark">₹149</span>
              <span className="text-lg text-brand-dark/40 line-through">₹189</span>
              <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full">
                Save ₹40 (21% OFF)
              </span>
              <span className="text-xs text-brand-dark/50 ml-auto">Inclusive of all taxes</span>
            </div>

            <p className="text-sm text-brand-dark/80 leading-relaxed font-light">
              Experience the clean, natural sweetness of monk fruit combined with non-GMO erythritol. Formulated for everyday tea, filter coffee, cooking, and home baking with zero sugar aftertaste and zero added calories.
            </p>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-xl bg-white h-12 shrink-0">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    disabled={qty <= 1}
                    className="px-3.5 h-full text-brand-dark/60 hover:text-brand-dark disabled:opacity-30 cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 font-bold text-sm min-w-[32px] text-center">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3.5 h-full text-brand-dark/60 hover:text-brand-dark cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    added
                      ? "bg-brand-green text-white"
                      : "bg-brand-mint-light text-brand-green border-2 border-brand-green hover:bg-brand-mint"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      <span>Add to Cart (₹{149 * qty})</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full h-12 bg-brand-green hover:bg-brand-green-light text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Buy Now via Instant Checkout (₹{149 * qty})</span>
              </button>
            </div>

            {/* Key Delivery & Trust Guarantees */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 text-center">
              <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs">
                <Truck size={18} className="mx-auto text-brand-green mb-1" />
                <span className="font-bold block text-brand-dark">Fast Shipping</span>
                <span className="text-[10px] text-brand-dark/60">Pan-India delivery</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs">
                <ShieldCheck size={18} className="mx-auto text-brand-green mb-1" />
                <span className="font-bold block text-brand-dark">100% Genuine</span>
                <span className="text-[10px] text-brand-dark/60">Direct from Monkaura</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-100 text-xs">
                <RefreshCw size={18} className="mx-auto text-brand-green mb-1" />
                <span className="font-bold block text-brand-dark">Sealed Pack</span>
                <span className="text-[10px] text-brand-dark/60">Zip-lock barrier pouch</span>
              </div>
            </div>

            {/* Detailed Product Specifications */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4 text-xs sm:text-sm">
              <h2 className="font-serif font-bold text-lg text-brand-dark">Product Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 border-t border-gray-100 pt-3 text-xs">
                <div><span className="text-brand-dark/60">Exact Ingredients:</span> <strong className="font-semibold text-brand-dark">Monk Fruit, Erythritol Extract (Siraitia grosvenorii)</strong></div>
                <div><span className="text-brand-dark/60">Net Quantity:</span> <strong className="font-semibold text-brand-dark">100g</strong></div>
                <div><span className="text-brand-dark/60">Replacement Ratio:</span> <strong className="font-semibold text-brand-dark">1:1 like table sugar</strong></div>
                <div><span className="text-brand-dark/60">Calorie Content:</span> <strong className="font-semibold text-brand-dark">0 kcal per serving</strong></div>
                <div><span className="text-brand-dark/60">Shelf Life:</span> <strong className="font-semibold text-brand-dark">24 Months from packaging</strong></div>
                <div><span className="text-brand-dark/60">Storage:</span> <strong className="font-semibold text-brand-dark">Store in a cool, dry place. Reseal zip-lock tightly.</strong></div>
                <div><span className="text-brand-dark/60">Allergens:</span> <strong className="font-semibold text-brand-dark">Contains no gluten, soy, nuts, dairy, or artificial sweeteners.</strong></div>
                <div><span className="text-brand-dark/60">Country of Origin:</span> <strong className="font-semibold text-brand-dark">India (Packed in Hyderabad)</strong></div>
              </div>
            </div>

            {/* Nutrition Table */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-3">
              <h2 className="font-serif font-bold text-lg text-brand-dark">Nutrition Facts (Per 4g Serving / 1 tsp)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-brand-cream/60 p-2.5 rounded-lg border border-gray-100"><span className="text-brand-dark/60 block">Energy</span><span className="font-bold text-brand-green text-sm">0 kcal</span></div>
                <div className="bg-brand-cream/60 p-2.5 rounded-lg border border-gray-100"><span className="text-brand-dark/60 block">Added Sugar</span><span className="font-bold text-brand-green text-sm">0 g</span></div>
                <div className="bg-brand-cream/60 p-2.5 rounded-lg border border-gray-100"><span className="text-brand-dark/60 block">Total Fat</span><span className="font-bold text-brand-dark text-sm">0 g</span></div>
                <div className="bg-brand-cream/60 p-2.5 rounded-lg border border-gray-100"><span className="text-brand-dark/60 block">Total Carbs</span><span className="font-bold text-brand-dark text-sm">4 g*</span></div>
                <div className="bg-brand-cream/60 p-2.5 rounded-lg border border-gray-100"><span className="text-brand-dark/60 block">Sodium</span><span className="font-bold text-brand-dark text-sm">0 mg</span></div>
                <div className="bg-brand-cream/60 p-2.5 rounded-lg border border-gray-100"><span className="text-brand-dark/60 block">Protein</span><span className="font-bold text-brand-dark text-sm">0 g</span></div>
              </div>
              <p className="text-[10px] text-brand-dark/50 italic">* Non-glycemic polyols from erythritol that pass through the body without converting to glucose.</p>
            </div>
          </div>
        </div>

        {/* Link to 200g Pack */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Looking for daily use?</span>
            <h3 className="font-serif font-bold text-2xl text-brand-dark mt-1">Monkaura 200g Everyday Pack</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 mt-1">Stock your kitchen for daily tea, coffee, and family cooking at ₹298.</p>
          </div>
          <Link
            to="/products/monkaura-200g"
            className="px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-brand-green-light transition-colors whitespace-nowrap"
          >
            Explore 200g Pack →
          </Link>
        </div>
      </main>

      <BuyNowModal
        product={product}
        initialQuantity={qty}
        isOpen={isBuyNowOpen}
        onClose={() => setIsBuyNowOpen(false)}
      />
    </div>
  );
}
