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
      {/* Subtle Court Key Graphic Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] pointer-events-none opacity-20 -z-10">
        <div className="w-full h-full rounded-full border border-primary-accent/40 dashed" />
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-primary-accent/30" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Athletic Brand Slogan Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-accent/50 bg-primary-accent/15 text-secondary-glow font-black text-xs md:text-sm tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(234,88,12,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-glow animate-ping" />
          <span>{contentData.brand.slogan}</span>
          <span className="text-white/40">•</span>
          <span className="text-white/90">פיתוח שחקנים ומעטפת ליווי</span>
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

        {/* Subtitle speaking to teens and parents */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed font-normal"
        >
          {contentData.hero.subheading}
        </motion.p>

        {/* High-Energy Video Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="w-full max-w-3xl aspect-video relative rounded-2xl md:rounded-3xl overflow-hidden glass-card mb-8 group cursor-pointer border border-primary-accent/30 shadow-[0_15px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-secondary-glow to-primary-accent flex items-center justify-center shadow-[0_0_35px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-transform pl-1 mb-3">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" />
            </div>
            <span className="text-white font-bold text-sm md:text-base tracking-wide bg-black/50 px-3 py-1 rounded-full border border-white/10">
              צפה בסרטון: איך נראה הליווי בפועל (1:30 דק')
            </span>
          </div>
          {/* Court dark backdrop */}
          <div className="absolute inset-0 bg-stone-900 group-hover:scale-105 transition-transform duration-700" />
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
