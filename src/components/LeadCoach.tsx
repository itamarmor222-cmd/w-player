"use client";

import { motion } from "framer-motion";
import { contentData } from "@/data/contentData";

export default function LeadCoach() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          {/* Wider Placeholder for Team Photo */}
          <div className="aspect-[4/3] w-full mx-auto rounded-3xl overflow-hidden glass-card relative p-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-stone-800 rounded-2xl flex items-center justify-center">
               <span className="text-stone-600 font-bold text-xl text-center px-4">[תמונה קבוצתית / 2 אנשים]</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-stone-800 text-text-secondary text-sm font-medium mb-2">
            {contentData.originStory.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-right">
            {contentData.originStory.heading}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-right">
            {contentData.originStory.text}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
