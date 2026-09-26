import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, Heart, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-green-dark text-white border-t border-white/10">
      {/* Upper Footer - Side-by-Side Brand & Links Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Brand, Story & Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <Logo size="md" light={true} />
              <p className="text-brand-mint/80 text-xs leading-relaxed font-light max-w-sm">
                MONKAURA is a zero-glycemic, table-top natural sweetener crafted in Hyderabad, India. Formulated with Non-GMO Fermented Erythritol and pure Monk Fruit extract for 1:1 sugar replacement.
              </p>
            </div>

            {/* Direct Contact Information */}
            <div className="space-y-2.5 text-xs text-brand-mint/85 font-light border-y border-white/10 py-4">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-brand-mint shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-mint shrink-0" />
                <a href="mailto:monkaura9.co@gmail.com" className="hover:text-white transition-colors">
                  monkaura9.co@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-mint shrink-0" />
                <a href="tel:+919391774374" className="hover:text-white transition-colors">
                  +91 9391774374
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-brand-mint/70 font-light">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-mint" /> UPI / Cards / COD
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-brand-mint" /> FSSAI Food Safety Standards
              </span>
            </div>
          </div>

          {/* Right Columns: Side-by-Side Links Grid (2 columns on mobile, 3 columns on tablet/desktop) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            
            {/* Col 1: Shop & Packs */}
            <div className="space-y-3.5">
              <h3 className="font-serif font-bold text-xs tracking-wider uppercase text-brand-mint pb-1.5 border-b border-white/10">
                Shop & Packs
              </h3>
              <ul className="space-y-2 text-xs text-brand-mint/80 font-light">
                <li>
                  <Link to="/products" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/products/monkaura-100g" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    100g Trial Pack <span className="text-brand-mint font-medium">(₹149)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/products/monkaura-200g" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    200g Everyday Pack <span className="text-brand-mint font-medium">(₹298)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-sweetener-india" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block font-medium text-white">
                    Monk Fruit in India
                  </Link>
                </li>
                <li>
                  <Link to="/recipes" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Indian Recipes (1:1)
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Customer Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Sweetener Guides */}
            <div className="space-y-3.5">
              <h3 className="font-serif font-bold text-xs tracking-wider uppercase text-brand-mint pb-1.5 border-b border-white/10">
                Sweetener Guides
              </h3>
              <ul className="space-y-2 text-xs text-brand-mint/80 font-light">
                <li>
                  <Link to="/monk-fruit-sweetener-guide" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Complete Monk Fruit Guide
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-benefits" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block text-brand-mint font-medium">
                    Monk Fruit Benefits &amp; Uses
                  </Link>
                </li>
                <li>
                  <Link to="/what-is-monk-fruit" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    What is Monk Fruit?
                  </Link>
                </li>
                <li>
                  <Link to="/how-monk-fruit-sweetener-works" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    How Mogrosides Work
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-use-monk-fruit-sweetener" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    1:1 Sugar Ratio Guide
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-sweetener-for-tea-and-coffee" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Chai & Coffee Guide
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-sweetener-for-baking" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Baking with Monk Fruit
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-sweetener-faq" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Sweetener FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Comparisons & Trust */}
            <div className="space-y-3.5 col-span-2 sm:col-span-1">
              <h3 className="font-serif font-bold text-xs tracking-wider uppercase text-brand-mint pb-1.5 border-b border-white/10">
                Comparisons & Info
              </h3>
              <ul className="space-y-2 text-xs text-brand-mint/80 font-light">
                <li>
                  <Link to="/monk-fruit-vs-stevia" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Monk Fruit vs Stevia
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-vs-erythritol" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Monk Fruit vs Erythritol
                  </Link>
                </li>
                <li>
                  <Link to="/monk-fruit-vs-sugar" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Monk Fruit vs Sugar
                  </Link>
                </li>
                <li>
                  <Link to="/quality-testing" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Quality & Batch Testing
                  </Link>
                </li>
                <li>
                  <Link to="/ingredients" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors block">
                    Ingredient Transparency
                  </Link>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1.5 text-brand-mint/70 border-t border-white/10">
                    <Link to="/about" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors">
                      About
                    </Link>
                    <span>·</span>
                    <Link to="/contact" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors">
                      Contact
                    </Link>
                    <span>·</span>
                    <Link to="/privacy" onClick={handleNavClick} className="hover:text-white hover:underline transition-colors">
                      Privacy
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar: Side-by-Side Copyright, Disclaimer & Attribution */}
      <div className="border-t border-white/10 bg-black/25 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-brand-mint/60 text-center sm:text-left">
          <div className="space-y-0.5 max-w-2xl">
            <p className="font-medium text-brand-mint/80">
              © {new Date().getFullYear()} MONKAURA Sweeteners. All Rights Reserved.
            </p>
            <p className="text-[10px] text-brand-mint/50 leading-tight">
              Disclaimer: MONKAURA is a table-top natural sweetener blend. Statements are based on standard nutritional evaluations.
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-brand-mint/70 font-light">
            <span>Natural sweetness for Indian homes</span>
            <Heart size={12} className="text-red-400 fill-red-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
