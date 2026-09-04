'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Truck, Ruler, Sparkles, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const lookbookPhotos = [
  { id: 'lb1', image: '/look/look-1.webp', title: 'MATRIX BOMBER', tag: 'LOOK 01' },
  { id: 'lb2', image: '/look/look-2.webp', title: 'COGNAC THERMAL', tag: 'LOOK 02' },
  { id: 'lb3', image: '/look/look-3.webp', title: 'URBAN SHELL', tag: 'LOOK 03' },
  { id: 'lb4', image: '/look/look-4.webp', title: 'HIGH-COLLAR COUTURE', tag: 'LOOK 04' },
];

export default function LookbookGallerySection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll('.lookbook-card');
      if (!items) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const handleWhatsAppLookbook = (lookTitle) => {
    const phoneNumber = '1234567890'; // Replace with client's WhatsApp number
    const message = encodeURIComponent(
      `Hello 92degree! I am looking at "${lookTitle}" in your Campaign Lookbook and would like pricing and fit details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section ref={containerRef} className="bg-[#F5F4F0] py-16 sm:py-24 border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITORIAL CAMPAIGN</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
              LOOKBOOK 01
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-xs">
            A visual exploration of structure, thermal warmth, and European streetwear couture.
          </p>
        </div>

        {/* 4-PHOTO CAMPAIGN LOOKBOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {lookbookPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => handleWhatsAppLookbook(item.title)}
              className="lookbook-card group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-[#E5E5E0] bg-[#FAFAF8] shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96]"
              />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-[#FAFAF8]/90 backdrop-blur-sm rounded-full border border-[#E5E5E0]">
                  {item.tag}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <h4 className="text-base font-black uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-[#E5E5E0] mt-0.5 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#A9744F]" />
                  <span>INQUIRE THIS LOOK ON WHATSAPP</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BRAND TRUST & GUARANTEES STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-[#E5E5E0]">
          <div className="flex items-center gap-3.5 p-4 bg-[#FAFAF8] rounded-xl border border-[#E5E5E0]">
            <Ruler className="w-6 h-6 text-[#A9744F] shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">BESPOKE FIT ADVICE</h4>
              <p className="text-[11px] text-[#6B6B6B]">Direct sizing guidance via WhatsApp</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#FAFAF8] rounded-xl border border-[#E5E5E0]">
            <ShieldCheck className="w-6 h-6 text-[#A9744F] shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">GENUINE HIDE CERTIFIED</h4>
              <p className="text-[11px] text-[#6B6B6B]">100% full-grain leather outer</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#FAFAF8] rounded-xl border border-[#E5E5E0]">
            <Truck className="w-6 h-6 text-[#A9744F] shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">EXPRESS GLOBAL SHIPPING</h4>
              <p className="text-[11px] text-[#6B6B6B]">Insured door-to-door delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#FAFAF8] rounded-xl border border-[#E5E5E0]">
            <Sparkles className="w-6 h-6 text-[#A9744F] shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">LIMITED SMALL BATCHES</h4>
              <p className="text-[11px] text-[#6B6B6B]">Hand-numbered streetwear runs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}