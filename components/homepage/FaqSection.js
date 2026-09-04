'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

const homepageFaqs = [
  {
    q: 'How do I place an order via WhatsApp?',
    a: 'Click any "Order on WhatsApp" button across our store. It automatically generates a pre-formatted message with the product name, size, and price. Our concierge team confirms stock and assists with payment and shipping.',
  },
  {
    q: 'Are 92DEGREE puffer jackets made of 100% genuine leather?',
    a: 'Yes. We use exclusively 100% full-grain lambskin leather paired with a high-density 700-fill thermal insulation matrix for extreme sub-zero weather protection.',
  },
  {
    q: 'Can I get help choosing my correct size?',
    a: 'Absolutely. You can share your height and weight measurements in your WhatsApp chat. Our tailoring team verifies your fit before dispatching your jacket.',
  },
  {
    q: 'What are the delivery timeframes?',
    a: 'Orders are processed in 24-48 hours. Express shipping takes 3-7 business days depending on your location. Tracking details are sent directly to your WhatsApp.',
  },
  {
    q: 'What is your exchange policy if the jacket does not fit?',
    a: 'We offer a seamless size exchange policy within 7 days of delivery. Simply reach out to our WhatsApp concierge desk to initiate a replacement.',
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll('.faq-card');
      if (!items) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleWhatsAppFaqInquiry = () => {
    const message = encodeURIComponent(
      'Hello 92degree! I have a question regarding sizing and order process.'
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#F5F4F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E0] select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: Sticky Title & WhatsApp Concierge Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
                EVERYTHING YOU NEED TO KNOW
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mt-3">
                Have questions before placing your order? Here are answers to common questions about our materials, sizing, and WhatsApp ordering process.
              </p>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 bg-[#FAFAF8] rounded-[2rem] border border-[#E5E5E0] space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A9744F] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
                <span>STILL HAVE QUESTIONS?</span>
              </div>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Our 24/7 VIP concierge is available on WhatsApp to answer any product or size query instantly.
              </p>
              <button
                onClick={handleWhatsAppFaqInquiry}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#A9744F] text-white font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-xs group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP NOW</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion Items */}
          <div className="lg:col-span-7 space-y-3">
            {homepageFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="faq-card bg-[#FAFAF8] border border-[#E5E5E0] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-extrabold text-xs sm:text-sm text-[#1A1A1A] uppercase tracking-wider"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E5E5E0] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] rotate-180' : 'bg-[#F5F4F0] text-[#A9744F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed border-t border-[#E5E5E0] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}