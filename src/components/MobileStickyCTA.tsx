"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-50"
        >
          <Link
            href="/#lead-form"
            className="flex items-center justify-center w-full bg-primary-accent text-white font-bold text-lg py-4 rounded-xl shadow-[0_10px_30px_rgba(194,65,12,0.6)] border border-white/10"
          >
            לשיחת אבחון והתאמה
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
