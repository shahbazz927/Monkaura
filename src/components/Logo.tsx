import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showIcon?: boolean;
  showText?: boolean;
  iconOnly?: boolean;
}

export function MonkauraIcon({
  className = "w-8 h-8",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const mColor = light ? "#FFFFFF" : "#0A3C2F";
  const leftLeafColor = light ? "#6EE7B7" : "#0A3C2F";
  const rightLeafColor = light ? "#F59E0B" : "#DE8219";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Left Botanical Leaf */}
      <path
        d="M 98 84 C 94 62 82 22 56 24 C 54 48 74 78 98 84 Z"
        fill={leftLeafColor}
      />

      {/* Right Botanical Leaf (Warm Gold / Amber) */}
      <path
        d="M 102 84 C 106 60 124 24 146 26 C 146 50 126 80 102 84 Z"
        fill={rightLeafColor}
      />

      {/* Stylized Serif Letter 'M' */}
      <path
        d="M 32 165 C 44 163 54 161 54 153 L 54 75 C 54 66 42 65 32 64 L 32 58 C 48 58 64 56 79 52 L 83 58 C 78 65 75 73 75 84 L 75 128 L 97 78 L 103 78 L 125 128 L 125 84 C 125 71 117 65 106 64 L 106 58 C 120 60 138 61 154 58 L 157 64 C 146 66 142 74 142 85 L 142 153 C 142 161 152 163 166 165 L 166 172 C 148 170 128 170 110 172 L 110 165 C 120 163 126 160 126 152 L 126 122 L 104 172 L 96 172 L 74 122 L 74 152 C 74 160 80 163 90 165 L 90 172 C 72 170 52 170 32 172 Z"
        fill={mColor}
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  light = false,
  size = "md",
  showIcon = false,
  showText = true,
  iconOnly = false,
}: LogoProps) {
  // Color configuration based on background (light/dark theme)
  const monTextColor = light ? "text-white" : "text-brand-green";
  const kauraTextColor = light ? "text-brand-mint" : "text-brand-gold";
  const subTextColor = light ? "text-brand-mint/85" : "text-brand-green";
  const waveColor = light ? "#ffffff" : "#c5a059";

  // Size configurations
  const sizes = {
    sm: {
      container: "gap-2",
      iconSize: "w-7 h-7",
      mainText: "text-lg tracking-[0.06em]",
      subText: "text-[8px] tracking-[0.22em] mt-0.5",
      waveWidth: "w-3.5",
    },
    md: {
      container: "gap-2.5",
      iconSize: "w-9 h-9 sm:w-10 sm:h-10",
      mainText: "text-2xl sm:text-[26px] tracking-[0.08em]",
      subText: "text-[9px] sm:text-[10px] tracking-[0.28em] mt-0.5",
      waveWidth: "w-5 sm:w-5.5",
    },
    lg: {
      container: "gap-3",
      iconSize: "w-12 h-12 sm:w-14 sm:h-14",
      mainText: "text-3xl sm:text-4xl tracking-[0.09em]",
      subText: "text-[11px] sm:text-[12px] tracking-[0.3em] mt-1",
      waveWidth: "w-7 sm:w-8",
    },
    xl: {
      container: "gap-4",
      iconSize: "w-16 h-16 sm:w-20 sm:h-20",
      mainText: "text-4xl sm:text-5xl tracking-[0.1em]",
      subText: "text-[13px] sm:text-[14px] tracking-[0.32em] mt-1.5",
      waveWidth: "w-9 sm:w-10",
    },
  };

  const currentSize = sizes[size];

  if (iconOnly) {
    return <MonkauraIcon className={`${currentSize.iconSize} ${className}`} light={light} />;
  }

  return (
    <div className={`inline-flex items-center select-none font-brand ${currentSize.container} ${className}`}>
      {/* Brand Icon (Botanical 'M' with duel green & gold leaves) */}
      {showIcon && (
        <MonkauraIcon className={currentSize.iconSize} light={light} />
      )}

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          {/* Upper part: MÕNKAURA with wave accent */}
          <div className="relative flex items-center">
            <div className={`font-brand font-bold uppercase ${currentSize.mainText} leading-none flex items-center`}>
              <span className={monTextColor}>M</span>
              <span className="relative inline-flex flex-col items-center">
                <span className={`absolute -top-[0.25em] sm:-top-[0.28em] left-1/2 -translate-x-1/2 ${currentSize.waveWidth} h-auto pointer-events-none`}>
                  <svg
                    viewBox="0 0 100 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-sm"
                  >
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
            className={`font-sans font-semibold uppercase ${subTextColor} ${currentSize.subText} leading-none`}
          >
            Natural Sweetener
          </span>
        </div>
      )}
    </div>
  );
}
