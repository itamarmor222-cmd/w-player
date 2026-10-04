"use client";

import { contentData } from "@/data/contentData";
import { motion } from "framer-motion";
import { Brain, Target, LineChart } from "lucide-react";

export default function CorePhilosophy() {
  const icons = [Brain, Target, LineChart];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white">
            {contentData.corePhilosophy.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contentData.corePhilosophy.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center mb-6 group-hover:bg-primary-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-secondary-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
