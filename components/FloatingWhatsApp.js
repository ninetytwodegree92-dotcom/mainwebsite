'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent SSR Hydration Mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || STORE_WHATSAPP_NUMBER || '923001234567';

  const handleStartChat = () => {
    const message = encodeURIComponent(
      'Hello 92degree VIP Concierge! I am browsing your website and would like live size/order assistance.'
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      
      {/* 1. EXPANDED VIP CONCIERGE POPUP CARD */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#FAFAF8] border border-[#E5E5E0] rounded-[2rem] p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E0]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">
                  92DEGREE CONCIERGE
                </h4>
                <p className="text-[10px] text-[#6B6B6B]">Online now • Response &lt; 5 mins</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              aria-label="Close Concierge Card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Body */}
          <div className="bg-[#F5F4F0] p-3.5 rounded-xl border border-[#E5E5E0] space-y-1">
            <p className="text-xs text-[#1A1A1A] font-semibold leading-relaxed">
              "Need help finding your exact size or checking live leather puffer stock?"
            </p>
            <span className="text-[10px] text-[#A9744F] font-bold block uppercase">
              • Tailoring & Order Support
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={handleStartChat}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#A9744F] text-white font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-md group"
          >
            <MessageCircle className="w-4 h-4" />
            <span>START WHATSAPP CHAT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Sub Guarantee */}
          <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-[#6B6B6B] uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-[#A9744F]" />
            <span>Direct 1-on-1 Sizing Assistance</span>
          </div>

        </div>
      )}

      {/* 2. MAIN FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact VIP WhatsApp Concierge"
        className={`flex items-center gap-2.5 px-4 py-3.5 rounded-full border transition-all duration-300 shadow-xl group ${
          isOpen
            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
            : 'bg-[#A9744F] text-white border-[#A9744F] hover:bg-[#8F5F3E]'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#A9744F]" />
        </div>

        <span className="hidden sm:inline-block text-xs font-bold tracking-widest uppercase">
          {isOpen ? 'CLOSE CHAT' : 'ORDER ON WHATSAPP'}
        </span>
      </button>

    </div>
  );
}