"use client";

import { contentData } from "@/data/contentData";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-nav w-full">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            {/* Blended Logo Icon */}
            <div 
              className="relative w-12 h-12 pointer-events-none select-none mix-blend-screen"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 70%)',
                maskImage: 'radial-gradient(circle at center, black 45%, transparent 70%)'
              }}
            >
              <Image 
                src="/logo.jpg" 
                alt={contentData.brand.name}
                fill
                className="object-contain scale-[1.3]"
              />
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-xl tracking-wider text-white group-hover:text-primary-accent transition-colors leading-none mb-1">
                {contentData.brand.name}
              </span>
              <span className="text-[9px] md:text-[10px] tracking-widest text-primary-accent opacity-80 uppercase leading-none">
                {contentData.brand.slogan}
              </span>
            </div>
          </Link>
        </div>
        
        <Link 
          href="/#lead-form"
          className="bg-card-surface border border-primary-accent/30 hover:bg-primary-accent/10 transition-colors text-text-primary px-4 py-2 rounded-full text-sm font-bold"
        >
          שיחת אבחון והתאמה
        </Link>
      </div>
    </header>
  );
}
