import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", light = false, size = "md" }: LogoProps) {
  // Color configuration based on background (light/dark theme)
  const monTextColor = light ? "text-white" : "text-brand-green";
  const kauraTextColor = light ? "text-brand-mint" : "text-brand-gold";
  const subTextColor = light ? "text-brand-mint/85" : "text-brand-green";
  const waveColor = light ? "#ffffff" : "#c5a059"; // Brand Warm Gold (#c5a059) for the tilde accent

  // Size configurations
  const sizes = {
    sm: {
      container: "gap-1",
      mainText: "text-lg tracking-[0.06em]",
      subText: "text-[8px] tracking-[0.25em] mt-0.5",
      waveWidth: "w-4",
      waveHeight: "h-2",
    },
    md: {
      container: "gap-1.5",
      mainText: "text-2xl sm:text-3xl tracking-[0.08em]",
      subText: "text-[10px] sm:text-[11px] tracking-[0.28em] mt-1",
      waveWidth: "w-6 sm:w-7",
      waveHeight: "h-2.5",
    },
    lg: {
      container: "gap-2",
      mainText: "text-4xl sm:text-5xl tracking-[0.1em]",
      subText: "text-[13px] sm:text-[14px] tracking-[0.3em] mt-1.5",
      waveWidth: "w-9 sm:w-10",
      waveHeight: "h-3.5",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex flex-col items-center select-none font-brand ${currentSize.container} ${className}`}>
      {/* Upper part: MÕNKAURA with custom wavy accent */}
      <div className="relative flex items-center">
        {/* Text "MÕNKAURA" - using custom spacing and font */}
        <div className={`font-brand font-bold uppercase ${currentSize.mainText} leading-none flex items-center`}>
          <span className={monTextColor}>M</span>
          <span className="relative inline-flex flex-col items-center">
            {/* Custom Wavy Accent perfectly centered above the 'O' */}
            <span className={`absolute -top-[0.25em] sm:-top-[0.28em] left-1/2 -translate-x-1/2 ${currentSize.waveWidth} h-auto pointer-events-none`}>
              <svg
                viewBox="0 0 100 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-sm"
              >
                {/* Beautiful calligraphic single tilde curve matching the brand logo exactly */}
                <path
                  d="M10,24 C 22,8 35,10 48,18 C 62,26 75,24 88,14"
                  stroke={waveColor}
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
            <span className={monTextColor}>O</span>
          </span>
          <span className={monTextColor}>N</span>
          <span className={kauraTextColor}>KAURA</span>
        </div>
      </div>

      {/* Lower part: Natural Sweetener */}
      <span
        className={`font-sans font-semibold uppercase text-center ${subTextColor} ${currentSize.subText} leading-none`}
      >
        Natural Sweetener
      </span>
    </div>
  );
}

