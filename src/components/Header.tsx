import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
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
  };

  return (
    <>
      <div 
        id="reading-progress-container"
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green/10 z-[100] pointer-events-none"
      >
        <div 
          id="reading-progress-bar"
          className="h-full bg-brand-green transition-all duration-75 ease-out rounded-r-full shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs">
      <PromoMarquee />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link to="/" className="cursor-pointer select-none" onClick={handleNavClick}>
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:flex" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-brand-dark text-sm">
          <Link 
            to="/" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/" || currentPage === "/home"
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            Home
          </Link>
          
          <Link 
            to="/products" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/products" 
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            Products
          </Link>

          <Link 
            to="/zero-sugar-recipes" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/zero-sugar-recipes" 
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            Zero-Sugar Recipes
          </Link>

          <Link 
            to="/allulose-story" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/allulose-story" 
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            Allulose Story
          </Link>

          <Link 
<<<<<<< HEAD
            to="/reviews" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/reviews" 
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            Reviews
          </Link>

          <Link 
=======
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
            to="/about" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/about" 
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            About
          </Link>

          <Link 
            to="/contact" 
            className={`transition-all duration-200 cursor-pointer py-1 ${
              currentPage === "/contact" 
                ? "text-brand-green border-b-2 border-brand-green font-bold" 
                : "text-brand-dark/80 hover:text-brand-green"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            id="cart-toggle-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-green hover:bg-brand-mint-light transition-all duration-300 text-sm font-semibold text-brand-dark cursor-pointer relative"
          >
            <ShoppingBag size={16} className="text-brand-green" />
            <span className="hidden sm:inline">CART</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-green transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-3 animate-fadeIn shadow-inner">
          <Link 
            to="/" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/" || currentPage === "/home"
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/products" 
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            Products
          </Link>
          <Link 
            to="/zero-sugar-recipes" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/zero-sugar-recipes" 
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            Zero-Sugar Recipes
          </Link>
          <Link 
            to="/allulose-story" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/allulose-story" 
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            Allulose Story
          </Link>
          <Link 
<<<<<<< HEAD
            to="/reviews" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/reviews" 
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            Reviews
          </Link>
          <Link 
=======
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
            to="/about" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/about" 
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={handleNavClick}
            className={`text-left py-2 px-3 rounded-lg font-medium transition-colors text-sm ${
              currentPage === "/contact" 
                ? "bg-brand-mint-light text-brand-green font-semibold" 
                : "text-brand-dark hover:bg-gray-50 hover:text-brand-green"
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
    </>
  );
}
