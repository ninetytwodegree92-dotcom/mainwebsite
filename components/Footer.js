'use client';

import Link from 'next/link';
import { categories } from '@/data/products';
import { 
  MessageCircle, 
  ArrowUp, 
  ArrowUpRight, 
  ShieldCheck, 
  Truck, 
  Ruler 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567';
    const message = encodeURIComponent(
      'Hello 92degree! I have a general customer inquiry regarding your products, stock, or sizing.'
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="relative bg-[#FAFAF8] border-t border-[#E5E5E0] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#1A1A1A] overflow-hidden select-none">
      
      {/* Subtle Background Watermark Logo */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.03] text-[18vw] font-black tracking-tighter text-[#1A1A1A] whitespace-nowrap leading-none z-0">
        92DEGREE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Perks Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 border-b border-[#E5E5E0]">
          <div className="flex items-center gap-3.5 p-4 bg-[#F5F4F0] rounded-2xl border border-[#E5E5E0]">
            <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A] tracking-wider">WHATSAPP VIP CONCIERGE</h4>
              <p className="text-[11px] text-[#6B6B6B]">Instant sizing advice & live support</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#F5F4F0] rounded-2xl border border-[#E5E5E0]">
            <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">100% GENUINE LEATHER</h4>
              <p className="text-[11px] text-[#6B6B6B]">Handcrafted small-batch drops</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#F5F4F0] rounded-2xl border border-[#E5E5E0]">
            <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">EXPRESS GLOBAL SHIPPING</h4>
              <p className="text-[11px] text-[#6B6B6B]">Insured door-to-door delivery</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-[#E5E5E0]">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-1 group">
              <span className="text-3xl font-black tracking-tighter text-[#1A1A1A]">
                92DEGREE
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#A9744F]" />
            </Link>

            <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-sm">
              Crafted at the intersection of industrial warmth and minimalist street couture. Small-batch leather outerwear, heavyweight fleece, and technical streetwear engineered for prestige.
            </p>

            {/* Direct WhatsApp Concierge Card */}
            <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0] inline-block w-full max-w-sm space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#A9744F] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
                <span>ONLINE NOW ON WHATSAPP</span>
              </div>
              <button
                onClick={handleWhatsAppContact}
                className="w-full flex items-center justify-between p-2.5 bg-[#FAFAF8] border border-[#E5E5E0] rounded-lg text-xs font-bold text-[#1A1A1A] hover:border-[#A9744F] hover:text-[#A9744F] transition-all group/btn"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#A9744F]" />
                  <span>CHAT WITH CONCIERGE</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] group-hover/btn:text-[#A9744F] transition-colors" />
              </button>
            </div>
          </div>

          {/* Navigation Links (Cols 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#A9744F] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#A9744F] transition-colors">
                  SHOP ALL CATALOG
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A9744F] transition-colors">
                  OUR STORY & HERITAGE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#A9744F] transition-colors">
                  CONTACT & SUPPORT
                </Link>
              </li>
            </ul>
          </div>

          {/* Active Collections Column (Cols 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase">
              ACTIVE COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-[#A9744F] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.label}</span>
                    <span className="text-[9px] bg-[#A9744F] text-white px-2 py-0.5 rounded font-bold group-hover:bg-[#1A1A1A] transition-colors">
                      IN STOCK
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B6B6B] uppercase tracking-wider font-semibold">
          <p>© {new Date().getFullYear()} 92DEGREE. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#1A1A1A] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-[#1A1A1A] transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/contact" className="hover:text-[#1A1A1A] transition-colors flex items-center gap-1">
              <Ruler className="w-3.5 h-3.5 text-[#A9744F]" />
              <span>SIZE GUIDE</span>
            </Link>
          </div>

          {/* Smooth Back To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] hover:text-[#A9744F] transition-colors"
          >
            <span>TOP</span>
            <div className="w-8 h-8 rounded-full bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center shadow-xs">
              <ArrowUp className="w-3.5 h-3.5 text-[#A9744F]" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}