import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackWhatsAppOrderClick } from "../utils/analytics";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const autoHideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear existing auto-hide timer
  const clearAutoHideTimer = () => {
    if (autoHideTimerRef.current) {
      clearTimeout(autoHideTimerRef.current);
      autoHideTimerRef.current = null;
    }
  };

  // Start 10-second auto-hide timer
  const startAutoHideTimer = () => {
    clearAutoHideTimer();
    autoHideTimerRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 10000); // 10 seconds of inactivity
  };

  useEffect(() => {
    // Show the friendly tooltip bubble 2 seconds after page loads
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      startAutoHideTimer();
    }, 2000);

    return () => {
      clearTimeout(initialTimer);
      clearAutoHideTimer();
    };
  }, []);

  // Pause timer on hover/focus, restart on mouse leave
  const handleMouseEnter = () => {
    clearAutoHideTimer();
  };

  const handleMouseLeave = () => {
    if (showTooltip) {
      startAutoHideTimer();
    }
  };

  const handleClick = () => {
    trackWhatsAppOrderClick({ source: "floating_widget" });
    const text = encodeURIComponent("Hi! I'm visiting the Monkaura website and would like to learn more about ordering your Erythritol & Monk Fruit sweetener blend.");
    window.open(`https://api.whatsapp.com/send?phone=919391774374&text=${text}`, "_blank");
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Friendly interactive Tooltip with Auto-Hide and Smooth Transition */}
      <div
        className={`pointer-events-auto bg-white text-brand-dark px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 max-w-[250px] text-xs relative select-none transition-all duration-500 ease-out origin-bottom-right ${
          showTooltip
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex-1">
          <p className="font-extrabold text-brand-green flex items-center gap-1">
            <span>WhatsApp Order Desk</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </p>
          <p className="text-brand-dark/70 font-light mt-0.5 leading-relaxed">
            Have questions? Chat with us or order directly!
          </p>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            clearAutoHideTimer();
            setShowTooltip(false);
          }}
          className="text-brand-dark/35 hover:text-brand-dark/80 p-0.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
          aria-label="Close WhatsApp tooltip"
        >
          <X size={14} />
        </button>
        
        {/* Custom chat bubble pointer arrow */}
        <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
      </div>

      {/* Main WhatsApp Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => {
          if (!showTooltip) {
            setShowTooltip(true);
            startAutoHideTimer();
          }
        }}
        className="pointer-events-auto w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-108 active:scale-95 transition-all duration-300 relative group animate-float"
        title="Chat on WhatsApp"
        id="floating-whatsapp-widget"
        aria-label="Chat with Monkaura on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10 opacity-75 group-hover:opacity-100" />
        
        {/* Official high-fidelity WhatsApp SVG logo */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
}
