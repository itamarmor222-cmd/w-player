"use client";

import { motion } from "framer-motion";
import { contentData } from "@/data/contentData";

export default function ProEndorsements() {
  const placeholders = [1, 2, 3];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            {contentData.testimonials.heading}
          </h2>
          <p className="text-text-secondary">אנחנו עובדים עם השחקנים המובילים כדי לזקק את היסודות המנצחים באמת.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-stone-800/80 group-hover:bg-stone-700/80 transition-colors z-10" />
              <div className="relative z-20 text-stone-500 font-bold text-center p-4">
                [צילום מסך של וואטסאפ או המלצה]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
