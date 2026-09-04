'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, RefreshCw, Home } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Error Boundary caught:', error);
  }, [error]);

  const handleWhatsAppSupport = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || STORE_WHATSAPP_NUMBER || '923001234567';
    const message = encodeURIComponent(
      'Hello 92degree support! I encountered an error while browsing your website.'
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-[85vh] bg-[#FAFAF8] text-[#1A1A1A] flex items-center justify-center p-6 select-none">
      <div className="max-w-md w-full text-center space-y-6 bg-[#F5F4F0] p-8 sm:p-12 rounded-[2rem] border border-[#E5E5E0] shadow-sm">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E5E5E0]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
            500 // SYSTEM ERROR
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1A1A1A]">
          SOMETHING WENT WRONG
        </h1>

        <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
          An unexpected system error occurred while processing your request. Please try refreshing.
        </p>

        <div className="space-y-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#A9744F] text-white font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-xs"
          >
            <RefreshCw className="w-4 h-4" />
            <span>TRY AGAIN</span>
          </button>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#FAFAF8] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            <Home className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>

          <button
            onClick={handleWhatsAppSupport}
            className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#A9744F] uppercase tracking-wider hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>REPORT ISSUE ON WHATSAPP</span>
          </button>
        </div>

      </div>
    </div>
  );
}