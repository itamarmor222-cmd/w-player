"use client";

import { contentData, cohortConfig } from "@/data/contentData";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToForm = () => {
    const formEl = document.getElementById("lead-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 overflow-hidden">
      {/* Subtle Half-Court Geometry in Background (Felt rather than seen) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[950px] md:h-[950px] pointer-events-none opacity-[0.04] -z-10">
        <svg viewBox="0 0 800 800" className="w-full h-full stroke-white fill-none" strokeWidth="2">
          {/* Half-court center circle */}
          <circle cx="400" cy="400" r="180" />
          <circle cx="400" cy="400" r="40" />
          {/* Key / Free throw lane */}
          <rect x="280" y="220" width="240" height="360" />
          <path d="M 120 400 L 680 400" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Brand Slogan Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-accent/40 bg-gradient-to-r from-primary-accent/10 to-transparent text-secondary-glow font-black text-xs md:text-sm tracking-wider uppercase mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-glow animate-pulse" />
          <span>{contentData.brand.slogan}</span>
          <span className="text-white/30">•</span>
          <span className="text-white/80 font-medium">פיתוח שחקנים ומעטפת ליווי</span>
        </motion.div>

        {/* Punchy H1 Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight mb-5 text-white max-w-4xl"
        >
          {contentData.hero.heading}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed font-normal"
        >
          {contentData.hero.subheading}
        </motion.p>

        {/* Cinematic Film-Room Video Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="w-full max-w-3xl relative mb-10 group cursor-pointer"
        >
          {/* Subtle Backlight Wall Reflection */}
          <div className="absolute -inset-1.5 bg-gradient-to-b from-primary-accent/25 via-primary-accent/5 to-transparent rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-[#0D0B08] border border-white/10 border-t-amber-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10 flex flex-col items-center justify-center p-6">
              
              {/* Play Button with Frosted Glass & Ambient Amber Core */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-primary-accent/60 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-all duration-300 pl-1 mb-3.5">
                <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-gradient-to-br from-secondary-glow to-primary-accent flex items-center justify-center shadow-[0_0_20px_rgba(234,88,12,0.6)]">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" />
                </div>
              </div>

              <span className="text-white/90 font-medium text-xs md:text-sm tracking-wide bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
                צפה בסרטון: איך נראה הליווי בפועל (1:30 דק')
              </span>
            </div>
            
            {/* Dark Court Placeholder Canvas */}
            <div className="absolute inset-0 bg-[#14100D] group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
        </motion.div>

        {/* High-Impact CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md flex flex-col items-center gap-3 px-2"
        >
          <button 
            onClick={scrollToForm}
            className="w-full athletic-btn text-white font-black text-lg sm:text-xl py-4 sm:py-5 px-6 rounded-2xl flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
          >
            <span>לשיחת אבחון והתאמה ללא עלות</span>
            <span className="text-xl">👈</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary font-medium">
            <span className="text-secondary-glow font-bold">⚡ ללא עלות וללא התחייבות</span>
            <span>•</span>
            <span>15 דקות בדיקת התאמה (שחקן והורה)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
