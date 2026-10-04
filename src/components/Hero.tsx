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
    <section className="relative pt-12 pb-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full border border-primary-accent/40 bg-primary-accent/10 text-primary-accent font-bold text-sm mb-8 mt-4"
        >
          {contentData.hero.badge}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
        >
          {contentData.hero.heading}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mb-12"
        >
          {contentData.hero.subheading}
        </motion.p>

        {/* Video Placeholder Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-4xl aspect-video relative rounded-2xl overflow-hidden glass-card mb-12 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary-accent flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.5)] group-hover:scale-110 transition-transform pl-1">
              <Play className="w-8 h-8 text-white" fill="currentColor" />
            </div>
          </div>
          {/* Placeholder Background (would be replaced by actual video/thumbnail) */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <button 
            onClick={scrollToForm}
            className="bg-primary-accent hover:bg-secondary-glow transition-all text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(194,65,12,0.4)] hover:shadow-[0_4px_25px_rgba(234,88,12,0.6)] transform hover:-translate-y-1"
          >
            {contentData.hero.ctaPrimary.replace("[cohortLabel]", cohortConfig.cohortLabel)}
          </button>
          <p className="text-sm text-text-secondary">
            {contentData.hero.urgencyText}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
