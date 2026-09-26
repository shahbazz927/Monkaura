import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, ChevronDown, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CartItem } from "../types";
import Logo from "./Logo";
import { PromoMarquee } from "./PromoMarquee";

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export default function Header({ cart, onOpenCart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [learnMenuOpen, setLearnMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setLearnMenuOpen(false);
  };

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100/80 transition-shadow">
        <PromoMarquee />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link to="/" className="cursor-pointer select-none flex items-center" onClick={handleNavClick}>
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation: Home | Shop | Sweetener Guide | Recipes | About | Contact */}
          <nav className="hidden lg:flex items-center gap-7 font-sans text-[13px] tracking-wide text-brand-dark/90 font-medium">
            <Link 
              to="/" 
              className={`transition-colors py-1 ${
                currentPage === "/" || currentPage === "/home"
                  ? "text-brand-green font-bold border-b border-brand-green" 
                  : "hover:text-brand-green"
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/products" 
              className={`transition-colors py-1 ${
                currentPage.startsWith("/products") 
                  ? "text-brand-green font-bold border-b border-brand-green" 
                  : "hover:text-brand-green"
              }`}
            >
              Shop
            </Link>

            <Link 
              to="/allulose-story" 
              className={`transition-colors py-1 ${
                currentPage === "/allulose-story" 
                  ? "text-brand-green font-bold border-b border-brand-green" 
                  : "hover:text-brand-green"
              }`}
            >
              Sweetener Guide
            </Link>

            <Link 
              to="/recipes" 
              className={`transition-colors py-1 ${
                currentPage === "/recipes" || currentPage === "/zero-sugar-recipes" || currentPage.startsWith("/recipes")
                  ? "text-brand-green font-bold border-b border-brand-green" 
                  : "hover:text-brand-green"
              }`}
            >
              Recipes
            </Link>

            <Link 
              to="/about" 
              className={`transition-colors py-1 ${
                currentPage === "/about" 
                  ? "text-brand-green font-bold border-b border-brand-green" 
                  : "hover:text-brand-green"
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`transition-colors py-1 ${
                currentPage === "/contact" 
                  ? "text-brand-green font-bold border-b border-brand-green" 
                  : "hover:text-brand-green"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              id="cart-toggle-btn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-gray-200/90 hover:border-brand-green hover:bg-brand-mint-light/50 transition-colors text-xs font-semibold text-brand-dark cursor-pointer relative"
              aria-label="View shopping cart"
            >
              <ShoppingBag size={15} className="text-brand-green" />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="w-5 h-5 bg-brand-green text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-dark hover:text-brand-green transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden w-full bg-white border-t border-gray-150 py-4 px-6 flex flex-col gap-2 max-h-[85vh] overflow-y-auto shadow-inner">
            <Link to="/" onClick={handleNavClick} className="py-2.5 px-3 rounded-xl font-bold text-sm text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              Home
            </Link>
            
            <Link to="/products" onClick={handleNavClick} className="py-2.5 px-3 rounded-xl font-medium text-sm text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              Shop
            </Link>

            <Link to="/allulose-story" onClick={handleNavClick} className="py-2.5 px-3 rounded-xl font-medium text-sm text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              Sweetener Guide
            </Link>

            <Link to="/recipes" onClick={handleNavClick} className="py-2.5 px-3 rounded-xl font-medium text-sm text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              Recipes
            </Link>

            <Link to="/about" onClick={handleNavClick} className="py-2.5 px-3 rounded-xl font-medium text-sm text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              About
            </Link>

            <Link to="/contact" onClick={handleNavClick} className="py-2.5 px-3 rounded-xl font-medium text-sm text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              Contact
            </Link>

            <div className="pt-2 pb-1 border-t border-gray-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block px-3">Quick Links</span>
            </div>
            <Link to="/monk-fruit-sweetener-india" onClick={handleNavClick} className="py-2 px-3 rounded-xl font-medium text-xs text-brand-dark hover:bg-brand-mint-light hover:text-brand-green">
              Monk Fruit in India →
            </Link>
            <Link to="/products/monkaura-100g" onClick={handleNavClick} className="py-2 px-3 rounded-xl font-medium text-xs text-brand-dark hover:bg-brand-mint-light hover:text-brand-green flex justify-between">
              <span>100g Trial Pack</span>
              <span className="font-bold text-brand-green">₹149</span>
            </Link>
            <Link to="/products/monkaura-200g" onClick={handleNavClick} className="py-2 px-3 rounded-xl font-medium text-xs text-brand-dark hover:bg-brand-mint-light hover:text-brand-green flex justify-between">
              <span>200g Everyday Pack</span>
              <span className="font-bold text-brand-green">₹298</span>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
