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
import Reviews from "./components/Reviews";
import { Product, CartItem } from "./types";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Helmet } from "react-helmet-async";

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
        <title>Monkaura | Erythritol + Monk Fruit — 100g Trial & 200g Everyday</title>
        <meta name="description" content="Monkaura Erythritol + Monk Fruit — 100g Trial Pack & 200g Everyday Pack for everyday tea, coffee, cooking and baking. 1:1 sugar replacement." />
        <meta name="keywords" content="Monkaura, monk fruit sweetener India, erythritol monk fruit, 100g 200g, 1:1 sugar replacement" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Monkaura | Erythritol + Monk Fruit — 100g & 200g" />
        <meta property="og:description" content="Erythritol + Monk Fruit in 100g Trial & 200g Everyday packs. 1:1 sugar replacement for everyday tea, coffee, cooking and baking." />
        <meta property="og:url" content="https://monkaura.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta property="og:site_name" content="Monkaura" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monkaura | Erythritol + Monk Fruit — 100g & 200g" />
        <meta name="twitter:description" content="Erythritol + Monk Fruit — 100g & 200g. 1:1 sugar replacement for everyday use." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw" />
        <meta name="twitter:site" content="@monkaura" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MONKAURA",
            "description": "Monkaura Erythritol + Monk Fruit for everyday sweetness.",
            "slogan": "Pure Natural Sweetness",
            "url": "https://monkaura.in",
            "logo": "https://monkaura.in/logo.png",
            "foundingLocation": {
              "@type": "Place",
              "name": "Hyderabad, India"
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
            "name": "MONKAURA",
            "alternateName": "Monkaura Sweeteners",
            "url": "https://monkaura.in/",
            "description": "Monkaura Erythritol + Monk Fruit — 100g Trial & 200g Everyday for everyday beverages, cooking and baking."
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
          <Routes location={location} key={location.pathname}>
            {["/", "/home"].map((path) => (
              <Route
                key={path}
                path={path}
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <Hero
                      onShopClick={() => navigate("/products")}
                      onStoryClick={() => navigate("/allulose-story")}
                    />
                    <Features />
                    <AlluloseVsErythritol />
                    <ProductSpotlight
                      onAddToCart={handleAddToCart}
                      onExploreAll={() => navigate("/products")}
                    />
                    <NewToAllulose />
                    <HomepageReviews />
                    <FAQ />
                  </motion.div>
                }
              />
            ))}
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
            <Route path="/zero-sugar-recipes" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeCalculator />
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
