'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';

export default function WhatsAppCtaBar() {
  const handleWhatsAppChat = () => {
    const phoneNumber = '1234567890'; // Replace with client's WhatsApp number
    const message = encodeURIComponent(
      'Hello 92degree! I am ready to order/consult regarding your leather puffer collection.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#1A1A1A] text-[#FAFAF8] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A9744F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
        
        

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white max-w-3xl mx-auto">
          READY TO ELEVATE YOUR OUTERWEAR? ORDER DIRECTLY VIA WHATSAPP.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#FAFAF8]/80 max-w-xl mx-auto leading-relaxed">
          Get personal sizing consultation, check real-time stock availability, and complete your order seamlessly with our team.
        </p>

        {/* WhatsApp Button */}
        <div className="pt-2">
          <button
            onClick={handleWhatsAppChat}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#A9744F] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8F5F3E] transition-all duration-300 shadow-lg group"
          >
            <MessageCircle className="w-5 h-5" />
            <span>START WHATSAPP CHAT NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}