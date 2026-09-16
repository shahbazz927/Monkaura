import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

export default function Hero({ onShopClick, onStoryClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint-light via-white to-white py-12 md:py-20 lg:py-28">
      {/* Decorative background vectors */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-brand-mint/30 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Main Editorial Header */}
            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-dark tracking-tight leading-[1.1]">
              The Only Monk Fruit <br className="hidden sm:inline" />
              Sweetener That{" "}
              <span className="text-brand-green italic font-semibold">
                Bakes
              </span>
              ,{" "}
              <span className="text-brand-green italic font-semibold">
                Browns & Caramelizes
              </span>{" "}
              Like Real Sugar.
            </h1>

            {/* Paragraph Description */}
            <p className="font-sans text-brand-dark/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
<<<<<<< HEAD
              Made with premium Allulose and Monk Fruit, Monkaura delivers a smooth, sugar-like sweetness designed for everyday use in tea, coffee, cooking and baking.
=======
              Introducing Monkaura. A new standard of sweetness, thoughtfully crafted for modern wellness. Made with premium erythritol, Monkaura delivers a smooth and satisfying sweetness experience with a clean-label philosophy at its core. Every detail is designed to bring together exceptional taste, quality, and mindful living, so you can enjoy sweetness in a way that feels lighter, cleaner, and beautifully balanced.
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
              <Link
                to="/products"
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Shop Best Sellers</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/allulose-story"
                onClick={onStoryClick}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-brand-mint-light border-2 border-brand-green/20 hover:border-brand-green text-brand-green font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Allulose Story</span>
              </Link>
            </div>

            {/* Core Trust Seals */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-green/10 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-brand-green font-bold text-sm">
                  <ShieldCheck size={16} />
                  <span>100% Raw</span>
                </div>
                <span className="text-xs text-brand-dark/60 mt-0.5">Monk Fruit</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-brand-green font-bold text-sm">
                  <Leaf size={16} />
<<<<<<< HEAD
                  <span>Allulose +</span>
                </div>
                <span className="text-xs text-brand-dark/60 mt-0.5">Monk Fruit</span>
=======
                  <span>0 Glycemic</span>
                </div>
                <span className="text-xs text-brand-dark/60 mt-0.5">Keto Approved</span>
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-brand-green font-bold text-sm">
                  <CheckCircle size={16} />
                  <span>Premium Quality</span>
                </div>
                <span className="text-xs text-brand-dark/60 mt-0.5">Mindfully Sourced</span>
              </div>
            </div>
          </div>

          {/* Right Product Mockup Column */}
          <Link 
            to="/products"
            onClick={onShopClick}
            className="lg:col-span-5 relative flex justify-center items-center cursor-pointer group/hero-wedge"
          >
            {/* Image Frame replicating the Device Frame */}
            <div className="relative w-full max-w-[420px] aspect-[9/10] bg-white rounded-3xl p-3 shadow-2xl border-4 border-gray-100 transform hover:scale-102 transition-transform duration-500 overflow-hidden group">
               <img
                 src="https://lh3.googleusercontent.com/d/1zmMde7Iqqf35tqNasnoR0Fl_uv-5v5iw"
                 alt="Monkaura Baking Blend Mockup"
                 className="w-full h-full object-contain rounded-2xl"
                 referrerPolicy="no-referrer"
               />
              
              {/* Floating feature highlights */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-green/95 backdrop-blur-md rounded-2xl p-4 text-white border border-brand-mint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
<<<<<<< HEAD
                <p className="text-xs font-brand tracking-widest text-brand-gold font-bold mb-1 uppercase">Allulose + Monk Fruit</p>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="border-r border-white/20 py-1">
                    <span className="block font-bold text-brand-mint">1:1</span>
                    <span className="text-[8px] text-white/70">REPLACEMENT</span>
                  </div>
                  <div className="border-r border-white/20 py-1">
                    <span className="block font-bold text-brand-mint">100g & 200g</span>
                    <span className="text-[8px] text-white/70">PACKS</span>
                  </div>
                  <div className="py-1">
                    <span className="block font-bold text-brand-mint">Sugar-like</span>
                    <span className="text-[8px] text-white/70">TASTE</span>
=======
                <p className="text-xs font-brand tracking-widest text-brand-gold font-bold mb-1 uppercase">Allulose Baking Blend</p>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="border-r border-white/20 py-1">
                    <span className="block font-bold text-brand-mint">0</span>
                    <span className="text-[8px] text-white/70">CALORIES</span>
                  </div>
                  <div className="border-r border-white/20 py-1">
                    <span className="block font-bold text-brand-mint">Flat</span>
                    <span className="text-[8px] text-white/70">GLYCEMIC</span>
                  </div>
                  <div className="py-1">
                    <span className="block font-bold text-brand-mint">100%</span>
                    <span className="text-[8px] text-white/70">NATURAL</span>
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
