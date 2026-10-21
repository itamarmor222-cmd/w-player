"use client";

import { contentData, cohortConfig } from "@/data/contentData";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToForm = () => {
    const formEl = document.getElementById("lead-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 overflow-hidden">
      {/* Real Basketball Arena Background with Stadium Lighting & Hardwood Court */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <Image
          src="/arena-bg.jpg"
          alt="Basketball Arena Atmosphere"
          fill
          priority
          className="object-cover object-top opacity-55 mix-blend-screen scale-105"
        />
        {/* Cinematic Vignette & Bottom Floor Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/75 via-[#080706]/45 to-[#080706]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#080706_85%)]" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* High-Contrast Cream & Burnt Orange Slogan Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FBF7EE] text-[#14100C] font-black text-xs md:text-sm tracking-wider uppercase mb-6 shadow-[0_6px_30px_rgba(251,247,238,0.22)] border border-[#EDE4D3]"
        >
          <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
          <span className="tracking-widest font-black text-[#C2410C]">{contentData.brand.slogan}</span>
          <span className="text-stone-400">•</span>
          <span className="text-stone-800 font-bold">מעטפת פיתוח שחקנים</span>
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
