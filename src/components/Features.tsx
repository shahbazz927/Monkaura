import React from "react";
import { Activity, Flame, ShieldAlert, Leaf, HeartPulse, Sparkles, Smile } from "lucide-react";

export default function Features() {
  const benefits = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex flex-col justify-center items-center font-serif text-[11px] font-bold text-brand-mint bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green transition-all duration-300">
          <span>0</span>
          <span className="text-[7px] tracking-tighter leading-none -mt-0.5">kcal</span>
        </div>
      ),
      title: "Zero",
      subtitle: "Calories"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex justify-center items-center bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green text-brand-mint transition-all duration-300">
          <Flame size={20} />
        </div>
      ),
      title: "Zero",
      subtitle: "Sugar"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex justify-center items-center bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green text-brand-mint transition-all duration-300">
<<<<<<< HEAD
          <Activity size={20} />
        </div>
      ),
      title: "1:1",
      subtitle: "Replacement"
=======
          <HeartPulse size={20} />
        </div>
      ),
      title: "Diabetic",
      subtitle: "Friendly"
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex justify-center items-center bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green text-brand-mint transition-all duration-300">
          <Leaf size={20} />
        </div>
      ),
<<<<<<< HEAD
      title: "Bakes &",
      subtitle: "Browns"
=======
      title: "Keto",
      subtitle: "Friendly"
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex justify-center items-center bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green text-brand-mint transition-all duration-300">
<<<<<<< HEAD
          <HeartPulse size={20} />
        </div>
      ),
      title: "Allulose +",
      subtitle: "Monk Fruit"
=======
          <Activity size={20} />
        </div>
      ),
      title: "Zero Glycemic",
      subtitle: "Index"
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex justify-center items-center bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green text-brand-mint transition-all duration-300">
          <Smile size={20} />
        </div>
      ),
      title: "Tooth",
      subtitle: "Friendly"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full border border-brand-mint/40 flex justify-center items-center bg-brand-green-dark group-hover:bg-brand-mint group-hover:text-brand-green text-brand-mint transition-all duration-300">
          <ShieldAlert size={20} />
        </div>
      ),
      title: "No Artificial",
      subtitle: "Sweeteners"
    }
  ];

  return (
    <section className="bg-brand-green text-white py-8 border-t border-b border-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Scroll wrapper for smaller screens, Grid on larger screens */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-7 gap-6 justify-between items-center no-scrollbar py-2">
          {benefits.map((b, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center min-w-[100px] flex-1 group cursor-pointer">
                <div className="mb-3 transform group-hover:scale-110 transition-all duration-300">
                  {b.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand-mint/60 leading-none block mb-1">
                  {b.title}
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white font-sans whitespace-nowrap">
                  {b.subtitle}
                </span>
              </div>
              {index < benefits.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-brand-mint/20 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
