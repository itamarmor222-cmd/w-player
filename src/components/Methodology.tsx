"use client";

import { contentData } from "@/data/contentData";
import { motion } from "framer-motion";

export default function Methodology() {
  return (
    <section className="py-24 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white">
            {contentData.methodology.heading}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Mobile Mockup Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-64 h-[500px] border-[8px] border-stone-800 rounded-[3rem] bg-stone-900 relative shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 bg-stone-800 rounded-b-3xl w-1/2 mx-auto" />
              <span className="text-stone-500 font-bold text-center px-4">
                [תמונת מסך של האפליקציה]
              </span>
            </div>
          </motion.div>

          {/* Vertical Stepper */}
          <div className="w-full md:w-1/2 relative border-r-2 border-stone-800 pr-8">
            <div className="flex flex-col gap-10 relative">
              {contentData.methodology.steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute top-1 -right-[41px] w-5 h-5 rounded-full bg-primary-accent border-4 border-[#16120E]" />
                  
                  <div className="glass-card p-6 rounded-2xl relative z-20">
                    <div className="text-primary-accent font-black text-4xl opacity-20 absolute top-4 left-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
