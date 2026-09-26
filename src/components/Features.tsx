import React from "react";

export default function Features() {
  const highlights = [
    {
      metric: "0 kcal",
      label: "Per 4g serving",
      detail: "Clean caloric deficit"
    },
    {
      metric: "0g",
      label: "Added Sugar",
      detail: "Zero glycemic impact"
    },
    {
      metric: "1:1",
      label: "Direct Measure",
      detail: "Exact spoon for spoon"
    },
    {
      metric: "200°C",
      label: "Heat Stability",
      detail: "Boil, simmer, or bake"
    },
    {
      metric: "Only 2",
      label: "Ingredients",
      detail: "Monk Fruit, Erythritol"
    },
    {
      metric: "FSSAI",
      label: "Food Standards",
      detail: "Lic. 13624999000449"
    }
  ];

  return (
    <section className="bg-brand-green text-white py-8 border-y border-brand-green-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-start">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col text-center sm:text-left space-y-1 lg:border-r last:border-r-0 border-white/10 lg:pr-6"
            >
              <span className="font-serif text-2xl sm:text-3xl text-brand-mint font-bold tracking-tight">
                {item.metric}
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                {item.label}
              </span>
              <span className="text-[11px] text-brand-mint/60 font-light">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
