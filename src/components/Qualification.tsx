"use client";

import { contentData } from "@/data/contentData";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Qualification() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl border-t-4 border-t-green-500/50"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </span>
              למי זה מתאים?
            </h3>
            <ul className="space-y-6">
              {contentData.qualification.fits.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <Check className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-lg text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl border-t-4 border-t-red-500/50"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                <X className="w-5 h-5" />
              </span>
              למי זה אינו מתאים?
            </h3>
            <ul className="space-y-6">
              {contentData.qualification.notFits.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-lg text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
