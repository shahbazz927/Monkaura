import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onShopClick: () => void;
  onStoryClick?: () => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  const scrollToProducts = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const elem = document.getElementById("products-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      onShopClick();
    }
  };

  return (
    <section className="relative w-full border-b border-gray-100/80 bg-[#FAF8F5]">
      {/* ================= DESKTOP & TABLET VIEW (md and up) ================= */}
      <div className="hidden md:flex relative w-full min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] items-center overflow-hidden pb-12">
        {/* Full-bleed background image, anchored left for sharp product display */}
        <img
          src="https://lh3.googleusercontent.com/d/1kpWhNnk5l_NgNZpwBaikUrqR0EzmhHvQ"
          alt="Choose Your Perfect MÕNKAURA Natural Monk Fruit Sweetener — 500g Glass Jar, 100g Stand-up Pouch, 1kg Value Pack Retail Box"
          className="absolute inset-0 w-full h-full object-cover object-left select-none"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Hero Content — Plain text with no background color */}
        <div className="relative z-10 w-full max-w-[95%] xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-16 flex justify-end items-center">
          <div className="w-full max-w-[330px] lg:max-w-[375px] xl:max-w-[415px] text-left space-y-3.5 pt-14 lg:pt-18 xl:pt-22 mr-0 sm:mr-2 lg:mr-4 xl:mr-6">
            <h1 className="font-serif text-lg lg:text-[22px] xl:text-[25px] text-brand-dark tracking-tight leading-[1.24] font-bold">
              Monk Fruit Sweetener in India. <br />
              <span className="text-brand-green italic font-medium text-base lg:text-[18px] xl:text-[20px]">
                Sweetness without the added sugar.
              </span>
            </h1>

            <p className="text-xs lg:text-[13px] text-brand-dark/80 font-light leading-relaxed">
              Meet MÕNKAURA, your everyday sugar alternative made with monk fruit extract and erythritol. Enjoy sweetness in your daily chai, filter coffee and favourite recipes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              <Link
                to="/products"
                className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-light text-white text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <span>Shop MÕNKAURA →</span>
              </Link>
              
              <Link
                to="/monk-fruit-sweetener-india"
                className="text-xs font-bold text-brand-dark hover:text-brand-green underline underline-offset-4 transition-colors py-2 text-center"
              >
                Learn About Monk Fruit in India →
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Down Indicator (Desktop) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
          <button
            onClick={(e) => scrollToProducts(e)}
            className="group flex flex-col items-center gap-1 text-brand-dark hover:text-brand-green transition-all cursor-pointer focus:outline-none"
            aria-label="Scroll down to explore products"
          >
            <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-brand-dark/90 group-hover:text-brand-green transition-colors">
              Explore
            </span>
            <div className="w-7 h-7 rounded-full bg-white/95 border border-brand-green/30 shadow-md flex items-center justify-center animate-bounce group-hover:bg-white group-hover:border-brand-green/60 transition-all">
              <ChevronDown size={16} className="text-brand-green transition-transform group-hover:translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>

      {/* ================= MOBILE VIEW (< md) ================= */}
      <div className="md:hidden flex flex-col w-full">
        {/* Full Uncropped Banner Showcase */}
        <div className="w-full bg-[#FAF8F5] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/d/1kpWhNnk5l_NgNZpwBaikUrqR0EzmhHvQ"
            alt="Choose Your Perfect MÕNKAURA Natural Monk Fruit Sweetener — 500g Glass Jar, 100g Stand-up Pouch, 1kg Value Pack Retail Box"
            className="w-full h-auto object-contain block select-none"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Mobile Content Card */}
        <div className="px-5 pt-4 pb-8 text-center space-y-3.5 bg-gradient-to-b from-[#FAF8F5] to-brand-cream/40">
          <h1 className="font-serif text-xl text-brand-dark tracking-tight leading-[1.25] font-bold">
            Monk Fruit Sweetener in India. <br />
            <span className="text-brand-green italic font-medium text-base">
              Sweetness without the added sugar.
            </span>
          </h1>

          <p className="text-xs text-brand-dark/75 font-light leading-relaxed max-w-sm mx-auto">
            Meet MÕNKAURA, your everyday sugar alternative made with monk fruit extract and erythritol. Enjoy sweetness in your daily chai, filter coffee and favourite recipes.
          </p>

          <div className="flex flex-col gap-2.5 pt-1 max-w-xs mx-auto">
            <Link
              to="/products"
              className="w-full py-3 bg-brand-green hover:bg-brand-green-light text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
            >
              <span>Shop MÕNKAURA →</span>
            </Link>
            
            <Link
              to="/monk-fruit-sweetener-india"
              className="text-xs font-bold text-brand-dark hover:text-brand-green underline underline-offset-4 transition-colors py-1.5"
            >
              Learn About Monk Fruit in India →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}









