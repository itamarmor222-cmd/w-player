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
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border-t-4 border-t-primary-accent/50"
            >
              <div className="w-10 h-10 rounded-full bg-red-950/50 flex items-center justify-center mb-6 text-red-500">
                <XCircle className="w-5 h-5" />
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
