import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <>
      {/* Top progress bar with a pulse-glow effect */}
      <div 
        id="top-progress-bar-container"
        className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none"
      >
        <motion.div
          id="top-progress-bar"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-green shadow-[0_2px_8px_rgba(197,160,89,0.4)]"
        />
      </div>

      {/* Subtle modern spinner/badge in the top-right corner */}
      <div 
        id="top-right-spinner-container"
        className="fixed top-4 right-4 z-[99999] pointer-events-none"
      >
        <motion.div
          id="top-right-spinner-card"
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-brand-mint text-brand-green text-xs font-semibold select-none"
        >
          {/* Elegant custom spinning ring */}
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-brand-green border-t-brand-gold animate-spin"></span>
          </span>
          <span className="flex items-center gap-1 font-sans text-[11px] tracking-wide uppercase">
            <span>Loading</span>
            <Sparkles size={10} className="text-brand-gold animate-pulse shrink-0" />
          </span>
        </motion.div>
      </div>
    </>
  );
};
