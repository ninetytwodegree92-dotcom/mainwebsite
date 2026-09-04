'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  
  // getComingSoonProducts, 
  STORE_WHATSAPP_NUMBER 
} from '@/data/products';
import { MessageCircle, ArrowDown, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ShopHero() {
  const liveCount = [0]; // Placeholder for live products count 
  const comingSoonCount = [0]; // Placeholder for upcoming drops count

  const handleVIPWhatsAppChat = () => {
    const message = encodeURIComponent(
      'Hello 92degree! I am browsing your shop catalog and would like personalized sizing recommendations.'
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="relative w-full bg-[#FAFAF8] border-b border-[#E5E5E0] overflow-hidden pt-20 pb-12 sm:pb-16 select-none">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.025] text-[22vw] font-black tracking-tighter text-[#1A1A1A] whitespace-nowrap leading-none z-0">
        92DEGREE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase mb-8">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">HOME</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
          <span className="text-[#A9744F]">CATALOG & SHOP</span>
        </nav>

        {/* Hero Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Classic & Modern Headline Block (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
              <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                THE ARCHIVAL CATALOG // 2026
              </span>
            </div>

            {/* Main Title (Blending Bold Sans-Serif with Classic Editorial Line-breaks) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.05]">
              CRAFTED FOR WARMTH.<br />
              <span className="text-[#A9744F]">TAILORED</span> FOR PRESTIGE.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-xl">
              Explore our permanent collection of full-grain leather puffer jackets alongside upcoming streetwear drops in heavyweight fleece, tracksuits, and polos.
            </p>

            {/* Real-time Collection Counter Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl text-xs font-bold text-[#1A1A1A] uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{liveCount} LEATHER PUFFERS IN STOCK</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl text-xs font-bold text-[#6B6B6B] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#A9744F]" />
                <span>{comingSoonCount} UPCOMING STREETWEAR DROPS</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={handleVIPWhatsAppChat}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#A9744F] text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all duration-300 shadow-sm group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>VIP WHATSAPP FIT CONSULTATION</span>
              </button>

              <a
                href="#catalog-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F5F4F0] border border-[#E5E5E0] text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-white hover:border-[#A9744F] transition-all duration-300"
              >
                <span>BROWSE PRODUCTS</span>
                <ArrowDown className="w-4 h-4 text-[#A9744F]" />
              </a>
            </div>

          </div>

          {/* RIGHT: Classic Editorial Image Card (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#E5E5E0] bg-[#F5F4F0] shadow-sm group">
              
              <Image
                src="/shop-hero.webp" // High-res cognac puffer image
                alt="92degree Classic Cognac Leather Puffer"
                fill
                priority
                className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
              />

              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />

              {/* Floating Banner Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-[#FAFAF8]/95 backdrop-blur-md rounded-full border border-[#E5E5E0]">
                  SIGNATURE PIECE // 2026
                </span>
              </div>

              {/* Bottom Card Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-[#A9744F] uppercase block">
                  100% FULL-GRAIN LEATHER
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  COGNAC LEATHER PUFFER
                </h3>
                 
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}