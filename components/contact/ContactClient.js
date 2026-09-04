'use client';

import { useState } from 'react';
import Link from 'next/link';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';
import Image from 'next/image';
import { 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronRight, 
  Send, 
  Check, 
  Ruler, 
  HelpCircle, 
  MapPin, 
  Mail, 
  Phone,
  Sparkles,
  Truck
} from 'lucide-react';

const faqItems = [
  {
    q: 'How do I place an order via WhatsApp?',
    a: 'Simply click any "Order on WhatsApp" button on our product pages. It automatically pre-fills a message containing the jacket title, size, and price. Our concierge team will confirm stock and guide you through payment and shipping.',
  },
  {
    q: 'How do I know my correct jacket size?',
    a: 'You can provide your height and weight measurements in the contact form or directly in our WhatsApp chat. Our tailoring specialists review your specs before dispatching to ensure a perfect drop-shoulder fit.',
  },
  {
    q: 'What materials are used in 92DEGREE jackets?',
    a: 'We use 100% genuine full-grain lambskin leather paired with a 700-fill power thermal insulation matrix, custom matte black YKK hardware, and double-stitched reinforced seams.',
  },
  {
    q: 'What are the delivery timeframes?',
    a: 'Orders are processed within 24-48 hours. Express global shipping takes 3-7 business days depending on your destination. Direct tracking links are sent straight to your WhatsApp.',
  },
  {
    q: 'What is your return & exchange policy?',
    a: 'We offer hassle-free size exchanges within 7 days of receiving your item. Contact our WhatsApp concierge desk to initiate an exchange.',
  },
];

export default function ContactClient() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Size & Tailoring Guidance',
    message: '',
  });

  // Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Quick Action Chat Trigger
  const handleQuickChat = (topic) => {
    const msg = encodeURIComponent(`Hello 92degree support! I need assistance regarding: "${topic}".`);
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  // Form Submission -> Dynamic WhatsApp Generator
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fullMessage = encodeURIComponent(
      `Hello 92degree Concierge!\n\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Subject: ${formData.subject}\n\n` +
      `• Inquiry / Message:\n"${formData.message || 'No additional message.'}"`
    );

    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${fullMessage}`, '_blank');
  };

  return (
    <div className="select-none">
      
      {/* ===================================================
          SECTION 1: HERO HEADER
         =================================================== */}
      <section className="relative w-full bg-[#FAFAF8] border-b border-[#E5E5E0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* --- Background Image (Modern full-bleed) --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-hero.webp"          // Replace with your actual image path
          alt="92degree contact background"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.05]"
          sizes="100vw"
         
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#FAFAF8]/70 backdrop-blur-[2px]" />
      </div>

      {/* --- Subtle watermark (kept for texture) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035] text-[22vw] font-black tracking-tighter text-[#1A1A1A] whitespace-nowrap leading-none z-0">
        92DEGREE
      </div>

      {/* --- Content (on top of everything) --- */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase mb-4">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">HOME</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
          <span className="text-[#A9744F]">CONTACT & SUPPORT</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0]/80 backdrop-blur-sm border border-[#E5E5E0]/60">
          <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
          <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
            24/7 VIP CONCIERGE DESK
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-tight">
          CONTACT 92DEGREE
        </h1>

        <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
          Have questions about sizing, stock availability, or bespoke drops? Connect directly with our team on WhatsApp.
        </p>

      </div>
    </section>

      {/* ===================================================
          SECTION 2: 3 QUICK WHATSAPP ACTION CARDS
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          
          <div
            onClick={() => handleQuickChat('Size & Fit Consultation')}
            className="group bg-[#FAFAF8] p-6 rounded-2xl border border-[#E5E5E0] shadow-sm cursor-pointer hover:border-[#A9744F] transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase group-hover:text-[#A9744F] transition-colors">
                SIZING & FIT ADVICE
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Consult with our tailors on height/weight measurements before ordering.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#A9744F] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>START FIT CHAT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => handleQuickChat('Order Tracking & Dispatch')}
            className="group bg-[#FAFAF8] p-6 rounded-2xl border border-[#E5E5E0] shadow-sm cursor-pointer hover:border-[#A9744F] transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase group-hover:text-[#A9744F] transition-colors">
                ORDER TRACKING
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Check real-time dispatch status and courier tracking numbers.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#A9744F] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>CHECK DISPATCH</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => handleQuickChat('General & Bespoke Inquiries')}
            className="group bg-[#FAFAF8] p-6 rounded-2xl border border-[#E5E5E0] shadow-sm cursor-pointer hover:border-[#A9744F] transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] uppercase group-hover:text-[#A9744F] transition-colors">
                GENERAL CONCIERGE
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Questions regarding upcoming drops, materials, or custom tailoring.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#A9744F] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>CHAT WITH CONCIERGE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 3: HYBRID FORM & DIRECT DETAILS
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT: Interactive Form (Cols 1-7) */}
          <div className="lg:col-span-7 bg-[#F5F4F0] p-6 sm:p-10 rounded-[2rem] border border-[#E5E5E0] shadow-xs space-y-6">
            
            <div>
              <span className="text-xs font-bold text-[#A9744F] uppercase tracking-widest">
                DIRECT INQUIRY FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
                SEND MESSAGE TO WHATSAPP
              </h2>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Fill in your details below. Submitting will open WhatsApp with your pre-formatted inquiry.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-3.5 bg-[#FAFAF8] border border-[#E5E5E0] rounded-xl text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#A9744F] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                    WHATSAPP PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-3.5 bg-[#FAFAF8] border border-[#E5E5E0] rounded-xl text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#A9744F] transition-colors"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                  INQUIRY SUBJECT
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full text-xs p-3.5 bg-[#FAFAF8] border border-[#E5E5E0] rounded-xl text-[#1A1A1A] focus:outline-none focus:border-[#A9744F] cursor-pointer"
                >
                  <option value="Size & Tailoring Guidance">Size & Tailoring Guidance</option>
                  <option value="Leather Puffer Availability">Leather Puffer Stock Inquiry</option>
                  <option value="Order Tracking & Shipping Status">Order Tracking & Shipping</option>
                  <option value="Bespoke & Custom Drop Request">Bespoke / Custom Request</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                  MESSAGE / FIT DETAILS *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what product you're interested in, or enter your height & weight for sizing advice..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-3.5 bg-[#FAFAF8] border border-[#E5E5E0] rounded-xl text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#A9744F] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-[#A9744F] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-sm group"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT & CHAT ON WHATSAPP</span>
              </button>

            </form>

          </div>

          {/* RIGHT: Direct Contact Info & Guarantees (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#A9744F] uppercase tracking-widest">
                DIRECT CONTACT CHANNELS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">
                VIP CONCIERGE INFORMATION
              </h2>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                We prioritize WhatsApp for immediate response, personalized sizing, and real-time inventory updates.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              
              <div 
                onClick={() => handleQuickChat('Direct Phone Link')}
                className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0] flex items-center gap-3.5 cursor-pointer hover:border-[#A9744F] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase block">WHATSAPP LINE</span>
                  <span className="text-xs font-bold text-[#1A1A1A]">+92 300 1234567</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase block">SUPPORT HOURS</span>
                  <span className="text-xs font-bold text-[#1A1A1A]">24/7 VIP CONCIERGE COVERAGE</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase block">EMAIL INQUIRIES</span>
                  <span className="text-xs font-bold text-[#1A1A1A]">VIP@92DEGREE.COM</span>
                </div>
              </div>

            </div>

            {/* Guarantees Box */}
            <div className="p-6 bg-[#FAFAF8] rounded-2xl border border-[#E5E5E0] space-y-3">
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                OUR RESPONSE COMMITMENT
              </h4>
              <div className="space-y-2 text-xs text-[#6B6B6B]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A9744F]" />
                  <span>Average response time: &lt; 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A9744F]" />
                  <span>Free tailoring measurement verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A9744F]" />
                  <span>Direct tracking details sent on dispatch</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 4: ACCORDION FAQ SECTION
         =================================================== */}
      <section className="bg-[#F5F4F0] py-16 sm:py-24 border-t border-[#E5E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>CLEAR ANSWERS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs text-[#6B6B6B] max-w-md mx-auto">
              Everything you need to know about ordering, sizing, shipping, and materials.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAF8] border border-[#E5E5E0] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#1A1A1A] uppercase tracking-wider"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A9744F] shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 text-xs text-[#6B6B6B] leading-relaxed border-t border-[#E5E5E0] pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}