import React from "react";
import { Award, Truck, ShieldCheck, Sparkles, Heart } from "lucide-react";

export interface MarqueeItem {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

interface PromoMarqueeProps {
  items?: MarqueeItem[];
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
}

export const PromoMarquee: React.FC<PromoMarqueeProps> = ({
  items,
  speed = "medium",
  pauseOnHover = true,
}) => {
  // High-quality default promotional items tailored for MentorBridge
  const defaultItems: MarqueeItem[] = [
    {
      id: "erythritol",
      text: "Erythritol + Monk Fruit — For Everyday Cooking",
      icon: <Sparkles size={14} className="text-brand-mint shrink-0" />,
    },
    {
      id: "fssai",
      text: "FSSAI Certified • 1:1 Sugar Replacement",
      icon: <Award size={14} className="text-brand-mint shrink-0" />,
    },
    {
      id: "shipping",
      text: "Free Shipping Above 3 Packs",
      icon: <Truck size={14} className="text-brand-mint shrink-0" />,
    },
    {
      id: "packs",
      text: "100g Trial Pack & 200g Everyday Pack",
      icon: <Heart size={14} className="text-brand-mint shrink-0" />,
    },
  ];

  const displayItems = items || defaultItems;

  // Custom speed multiplier if needed (default 30s is defined in utility)
  const speedClass = 
    speed === "slow" ? "animation-duration-[45s]" : 
    speed === "fast" ? "animation-duration-[20s]" : "";

  return (
    <div 
      id="promo-marquee-container"
      className="w-full bg-brand-green text-white py-2.5 overflow-hidden select-none border-b border-brand-green-light relative z-50"
    >
      <div 
        id="promo-marquee-wrapper"
        className={`flex w-max animate-marquee whitespace-nowrap ${speedClass} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {/* Track 1 */}
        <div className="flex items-center gap-12 px-6">
          {displayItems.map((item, index) => (
            <React.Fragment key={`t1-${item.id || index}`}>
              <span className="flex items-center gap-2 text-xs font-medium">
                {item.icon}
                <span>{item.text}</span>
              </span>
              <span className="text-brand-mint/40 select-none font-sans">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (Seamless loop replica) */}
        <div className="flex items-center gap-12 px-6" aria-hidden="true">
          {displayItems.map((item, index) => (
            <React.Fragment key={`t2-${item.id || index}`}>
              <span className="flex items-center gap-2 text-xs font-medium">
                {item.icon}
                <span>{item.text}</span>
              </span>
              <span className="text-brand-mint/40 select-none font-sans">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
