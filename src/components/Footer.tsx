import React from "react";
import { Award, Mail, Phone, MapPin, ShieldCheck, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-green-dark text-white border-t border-brand-green/20">
      
      {/* Upper Footer: Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column: Brand Intro */}
        <div className="md:col-span-4 space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo size="md" light={true} />
          </div>
          <p className="text-brand-mint/60 text-xs leading-relaxed font-light">
            Monkaura is India’s premier health sweetener startup. By replacing cheap, gut-disturbing erythritol with natural rare Allulose, we deliver a 100% natural, calorie-free sweetness that behaves, bakes, and tastes exactly like sugar.
          </p>
          <div className="pt-2 flex justify-center md:justify-start gap-3">
            {/* Payment Trust Badges */}
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest uppercase text-brand-mint">
              UPI
            </span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest uppercase text-brand-mint">
              Cards
            </span>
            <span className="px-2 py-1 bg-brand-green/20 border border-brand-green/30 rounded text-[9px] font-mono tracking-widest uppercase text-brand-mint">
              WhatsApp Ordering
            </span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-3 space-y-4 text-center md:text-left">
          <h2 className="font-serif font-bold text-sm tracking-wide text-brand-mint border-b border-white/10 pb-2">
            Quick Navigation
          </h2>
          <ul className="space-y-2 text-xs text-brand-mint/70 font-light">
            <li>
              <Link to="/" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                Our Sweeteners
              </Link>
            </li>
            <li>
              <Link to="/allulose-story" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                The Allulose Science
              </Link>
            </li>
            <li>
              <Link to="/zero-sugar-recipes" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                Dessert Recipe Convertor
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                About Our Journey
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" onClick={handleNavClick} className="hover:text-white hover:underline transition-all cursor-pointer">
                Privacy Policy & Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Regulatory Trust */}
        <div className="md:col-span-3 space-y-4 text-center md:text-left">
          <h2 className="font-serif font-bold text-sm tracking-wide text-brand-mint border-b border-white/10 pb-2">
            Regulatory Compliance
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs text-brand-mint/80">
              <Award size={16} className="text-brand-gold font-bold shrink-0" />
              <span className="font-semibold text-white">FSSAI Certified Raw Materials</span>
            </div>
            <p className="text-[11px] text-brand-mint/50 leading-relaxed font-light">
              Monkaura adheres strictly to the Food Safety and Standards Authority of India (FSSAI) safety guidelines. Our pure monk fruit extracts and organic rare Allulose sugars are tested for maximum food purity.
            </p>
            <div className="inline-block bg-white/5 border border-white/10 rounded-lg p-2 text-[10px] text-brand-mint/80">
              Lic No: <span className="font-mono font-bold text-white">13624999000449</span>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Shortcuts */}
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          <h2 className="font-serif font-bold text-sm tracking-wide text-brand-mint border-b border-white/10 pb-2">
            Purity Concierge
          </h2>
          <ul className="space-y-3 text-xs text-brand-mint/70 font-light">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={13} className="text-brand-mint" />
              <span>monkaura9.co@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={13} className="text-brand-mint" />
              <span>+91 9391774374</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={13} className="text-brand-mint" />
              <span>Hyderabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Footer: Regulatory and Developer Notice */}
      <div className="border-t border-white/5 bg-black/30 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-brand-mint/40 text-center md:text-left">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Monkaura Sweeteners Private Limited. All Rights Reserved.</p>
            <p className="text-[9px] text-brand-mint/30">
              All product images provided are trademarks of Monkaura. Sweetener results may vary depending on recipe moisture and baking temperatures.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            <span>for health-conscious Indian homes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
