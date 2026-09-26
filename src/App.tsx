/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductCatalog from "./components/ProductCatalog";
import AlluloseStory from "./components/AlluloseStory";
import RecipeCalculator from "./components/RecipeCalculator";
import About from "./components/About";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Privacy from "./components/Privacy";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import Footer from "./components/Footer";
import { PageLoader } from "./components/PageLoader";
import ProductSpotlight from "./components/ProductSpotlight";
import AlluloseVsErythritol from "./components/AlluloseVsErythritol";
import NewToAllulose from "./components/NewToAllulose";
import HomepageReviews from "./components/HomepageReviews";
import HomepageSections from "./components/HomepageSections";
import Reviews from "./components/Reviews";
import { Product, CartItem } from "./types";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Helmet } from "react-helmet-async";
import { trackAddToCart, trackBeginCheckout } from "./utils/analytics";

// Dedicated Pages
import MonkFruitIndia from "./pages/MonkFruitIndia";
import Product100gPage from "./pages/Product100gPage";
import Product200gPage from "./pages/Product200gPage";
import MonkFruitGuide from "./pages/MonkFruitGuide";
import WhatIsMonkFruit from "./pages/WhatIsMonkFruit";
import HowMonkFruitWorks from "./pages/HowMonkFruitWorks";
import HowToUseMonkFruit from "./pages/HowToUseMonkFruit";
import MonkFruitVsStevia from "./pages/MonkFruitVsStevia";
import MonkFruitVsErythritol from "./pages/MonkFruitVsErythritol";
import MonkFruitVsSugar from "./pages/MonkFruitVsSugar";
import MonkFruitVsAllulose from "./pages/MonkFruitVsAllulose";
import MonkFruitBaking from "./pages/MonkFruitBaking";
import MonkFruitTeaCoffee from "./pages/MonkFruitTeaCoffee";
import MonkFruitFAQPage from "./pages/MonkFruitFAQPage";
import QualityTesting from "./pages/QualityTesting";
import MonkFruitBenefits from "./pages/MonkFruitBenefits";
import Ingredients from "./pages/Ingredients";
import Nutrition from "./pages/Nutrition";
import FssaiCompliance from "./pages/FssaiCompliance";
import RecipeDetailPage from "./pages/RecipeDetailPage";

export default function App() {
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on page transition & trigger beautiful loading bar
  useEffect(() => {
    setIsPageLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Cart state with standard localStorage sync
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("monkaura_cart");
      if (cached) {
        setCart(JSON.parse(cached));
      }
      setIsCartLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isCartLoaded && typeof window !== "undefined") {
      localStorage.setItem("monkaura_cart", JSON.stringify(cart));
    }
  }, [cart, isCartLoaded]);

  // Handler: Add item to cart
  const handleAddToCart = (product: Product, quantity: number) => {
    trackAddToCart(product, quantity);
    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
  };

  // Handler: Update quantity of a item in cart
  const handleUpdateCartQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Handler: Remove item from cart
  const handleRemoveCartItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Handler: Clear all cart items
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col justify-between selection:bg-brand-mint selection:text-brand-green relative antialiased">
      <Helmet>
        <link rel="canonical" href="https://monkaura.in/" />
        <title>Monk Fruit Sweetener in India | MÕNKAURA</title>
        <meta name="description" content="Discover MÕNKAURA — India's natural 1:1 monk fruit sweetener crafted with non-GMO fermented erythritol and pure monk fruit extract. Zero added sugar and 0 calories for daily tea, coffee, cooking, and home baking." />
        <meta name="keywords" content="monk fruit sweetener in India, monk fruit sweetener India, buy monk fruit sweetener online, monk fruit erythritol blend, natural sugar substitute India, monkaura" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Monk Fruit Sweetener in India | MÕNKAURA" />
        <meta property="og:description" content="India's clean 1:1 table-top monk fruit sweetener. Non-GMO erythritol + pure monk fruit extract in 100g & 200g packs." />
        <meta property="og:url" content="https://monkaura.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1kpWhNnk5l_NgNZpwBaikUrqR0EzmhHvQ" />
        <meta property="og:site_name" content="MÕNKAURA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monk Fruit Sweetener in India | MÕNKAURA" />
        <meta name="twitter:description" content="Monk Fruit, Erythritol — 100g & 200g packs. 1:1 sugar replacement for everyday chai, coffee, and cooking." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1kpWhNnk5l_NgNZpwBaikUrqR0EzmhHvQ" />
        <meta name="twitter:site" content="@monkaura" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MÕNKAURA",
            "description": "MÕNKAURA is an Indian food brand crafting premium table-top Monk Fruit, Erythritol sweeteners for everyday tea, coffee, and cooking.",
            "slogan": "Pure Natural Sweetness",
            "url": "https://monkaura.in",
            "logo": "https://monkaura.in/favicon.svg",
            "foundingLocation": {
              "@type": "Place",
              "name": "Hyderabad, India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "telephone": "+91-9391774374",
              "email": "monkaura9.co@gmail.com",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Telugu"]
            },
            "sameAs": [
              "https://instagram.com/monkaura",
              "https://facebook.com/monkaura"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MÕNKAURA",
            "alternateName": "Monkaura Sweeteners",
            "url": "https://monkaura.in/",
            "description": "MÕNKAURA Monk Fruit Sweetener in India — 100g Trial & 200g Everyday packs for tea, coffee, and traditional Indian cooking."
          })}
        </script>
      </Helmet>

      {/* 0. Top Page Loader */}
      <PageLoader isLoading={isPageLoading} />

      {/* 1. Header */}
      <Header 
        cart={cart} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Page Segments */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* 1. Hero */}
                  <Hero
                    onShopClick={() => {
                      const elem = document.getElementById("products-section");
                      if (elem) {
                        elem.scrollIntoView({ behavior: "smooth" });
                      } else {
                        navigate("/products");
                      }
                    }}
                    onStoryClick={() => navigate("/monk-fruit-sweetener-india")}
                  />
                  {/* Zero section metrics bar (0 kcal, 0g sugar, 1:1, etc.) */}
                  <Features />
                  {/* Both products (100g Trial Pack & 200g Everyday Pack) immediately after zero section */}
                  <ProductSpotlight
                    onAddToCart={handleAddToCart}
                    onExploreAll={() => navigate("/products")}
                  />
                  {/* 2-8, 10, 13. Product Explanation, Ingredients, Mechanism, 1:1, Uses, Quality & CTA */}
                  <HomepageSections />
                  {/* 11. Real Customer Reviews */}
                  <HomepageReviews />
                  {/* 12. FAQ */}
                  <FAQ />
                </motion.div>
              }
            />
            <Route
              path="/home"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* 1. Hero */}
                  <Hero
                    onShopClick={() => {
                      const elem = document.getElementById("products-section");
                      if (elem) {
                        elem.scrollIntoView({ behavior: "smooth" });
                      } else {
                        navigate("/products");
                      }
                    }}
                    onStoryClick={() => navigate("/monk-fruit-sweetener-india")}
                  />
                  {/* Zero section metrics bar (0 kcal, 0g sugar, 1:1, etc.) */}
                  <Features />
                  {/* Both products (100g Trial Pack & 200g Everyday Pack) immediately after zero section */}
                  <ProductSpotlight
                    onAddToCart={handleAddToCart}
                    onExploreAll={() => navigate("/products")}
                  />
                  {/* 2-8, 10, 13. Product Explanation, Ingredients, Mechanism, 1:1, Uses, Quality & CTA */}
                  <HomepageSections />
                  {/* 11. Real Customer Reviews */}
                  <HomepageReviews />
                  {/* 12. FAQ */}
                  <FAQ />
                </motion.div>
              }
            />
            <Route path="/products" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCatalog onAddToCart={handleAddToCart} />
              </motion.div>
            } />
            <Route
              path="/products/monkaura-100g"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Product100gPage onAddToCart={handleAddToCart} />
                </motion.div>
              }
            />
            <Route
              path="/products/100g"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Product100gPage onAddToCart={handleAddToCart} />
                </motion.div>
              }
            />
            <Route
              path="/products/monkaura-200g"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Product200gPage onAddToCart={handleAddToCart} />
                </motion.div>
              }
            />
            <Route
              path="/products/200g"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Product200gPage onAddToCart={handleAddToCart} />
                </motion.div>
              }
            />

            {/* Primary Authority */}
            <Route path="/monk-fruit-sweetener-india" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitIndia onAddToCart={handleAddToCart} />
              </motion.div>
            } />

            {/* Education Cluster */}
            <Route path="/monk-fruit-benefits" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitBenefits />
              </motion.div>
            } />
            <Route path="/monk-fruit-benefits/" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitBenefits />
              </motion.div>
            } />
            <Route path="/monk-fruit-sweetener-guide" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitGuide />
              </motion.div>
            } />
            <Route path="/what-is-monk-fruit" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <WhatIsMonkFruit />
              </motion.div>
            } />
            <Route path="/how-monk-fruit-sweetener-works" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <HowMonkFruitWorks />
              </motion.div>
            } />
            <Route path="/how-to-use-monk-fruit-sweetener" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <HowToUseMonkFruit />
              </motion.div>
            } />
            <Route path="/monk-fruit-vs-stevia" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitVsStevia />
              </motion.div>
            } />
            <Route path="/monk-fruit-vs-erythritol" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitVsErythritol />
              </motion.div>
            } />
            <Route path="/monk-fruit-vs-sugar" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitVsSugar />
              </motion.div>
            } />
            <Route path="/monk-fruit-vs-allulose" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitVsAllulose />
              </motion.div>
            } />
            <Route path="/monk-fruit-sweetener-for-baking" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitBaking />
              </motion.div>
            } />
            <Route path="/monk-fruit-sweetener-for-tea-and-coffee" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitTeaCoffee />
              </motion.div>
            } />
            <Route path="/monk-fruit-sweetener-faq" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MonkFruitFAQPage />
              </motion.div>
            } />

            {/* Trust and Compliance */}
            <Route path="/quality-testing" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <QualityTesting />
              </motion.div>
            } />
            <Route path="/ingredients" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Ingredients />
              </motion.div>
            } />
            <Route path="/nutrition" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Nutrition />
              </motion.div>
            } />
            <Route path="/fssai" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <FssaiCompliance />
              </motion.div>
            } />

            {/* Recipes */}
            <Route
              path="/recipes"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <RecipeCalculator />
                </motion.div>
              }
            />
            <Route
              path="/zero-sugar-recipes"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <RecipeCalculator />
                </motion.div>
              }
            />
            <Route path="/recipes/:slug" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeDetailPage onAddToCart={handleAddToCart} />
              </motion.div>
            } />

            <Route path="/allulose-story" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <AlluloseStory />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ContactForm />
              </motion.div>
            } />
            <Route path="/reviews" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Reviews />
              </motion.div>
            } />
            <Route path="/privacy" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Privacy />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* 11. Sliding shopping cart drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
          trackBeginCheckout(cart, subtotal);
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* 12. Complete WhatsApp Checkout portal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
      />

      {/* 13. Floating WhatsApp quick connection */}
      <FloatingWhatsApp />
    </div>
  );
}
