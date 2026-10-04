"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A0807] py-8 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-stone-500 text-sm">
          © {currentYear} כל הזכויות שמורות.
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy-policy" className="text-stone-500 hover:text-white transition-colors">מדיניות פרטיות</Link>
          <a href="#" className="text-stone-500 hover:text-white transition-colors">תקנון האתר</a>
        </div>
      </div>
    </footer>
  );
}
