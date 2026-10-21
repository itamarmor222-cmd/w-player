"use client";

import { contentData } from "@/data/contentData";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function ProblemAgitation() {
  return (
    <section className="py-20 px-4 bg-stone-900/40 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            {contentData.problemAgitation.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contentData.problemAgitation.cards.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl md:rounded-3xl border-t-4 border-t-primary-accent relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FBF7EE] border border-amber-200/80 flex items-center justify-center mb-6 text-[#C2410C] font-black text-xl shadow-[0_4px_15px_rgba(251,247,238,0.15)]">
                  0{idx + 1}
                </div>
                <p className="text-base sm:text-lg text-text-primary/95 leading-relaxed font-medium">
                  {text}
                </p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary-accent/40 to-transparent mt-6 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
