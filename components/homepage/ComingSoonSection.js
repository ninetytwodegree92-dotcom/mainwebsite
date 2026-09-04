'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bell, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const upcomingCategories = [
  {
    id: 'c1',
    title: 'HEAVYWEIGHT HOODIES',
    dropDate: 'FALL / WINTER 2026',
    image: '/banner2.webp',
    description: '450GSM organic French terry cotton with oversized drop-shoulder cut.',
  },
  {
    id: 'c2',
    title: 'STREETWEAR TRACKSUITS',
    dropDate: 'FALL / WINTER 2026',
    image: '/banner2.webp',
    description: 'Technical water-resistant nylon shell with high-collar zip track tops.',
  },
  {
    id: 'c3',
    title: 'MINIMALIST POLOS',
    dropDate: 'SPRING / SUMMER 2027',
    image: '/banner4.webp',
    description: 'Pima cotton knit featuring custom matte metal buttons and subtle branding.',
  },
  {
    id: 'c4',
    title: 'CAPS & ACCESSORIES',
    dropDate: 'COMING SOON',
    image: '/banner4.webp',
    description: 'Heavy cotton twill caps with embossed leather patch detail.',
  },
];

export default function ComingSoonSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll('.teaser-card');
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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

  const handleNotifyWhatsApp = (categoryTitle) => {
    const phoneNumber = '1234567890'; // Replace with client's WhatsApp number
    const message = encodeURIComponent(
      `Hello 92degree! Please notify me on WhatsApp as soon as "${categoryTitle}" drops!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section ref={containerRef} className="bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FUTURE DROPS</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
              COMING SOON
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-xs">
            Sign up to receive early priority access on WhatsApp before official public releases.
          </p>
        </div>

        {/* 4 CARDS TEASER GRID (Muted / Monochrome aesthetic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingCategories.map((item) => (
            <div
              key={item.id}
              className="teaser-card group bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#1A1A1A]"
            >
              {/* Muted Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAFAF8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center filter grayscale contrast-125 opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Coming Soon Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-[#1A1A1A] rounded-md shadow-sm">
                    COMING SOON
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#A9744F] uppercase block mb-1">
                    {item.dropDate}
                  </span>
                  <h3 className="text-base font-extrabold text-[#1A1A1A] uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>

                {/* Notify Me Action Button */}
                <button
                  onClick={() => handleNotifyWhatsApp(item.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FAFAF8] border border-[#E5E5E0] text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#A9744F] hover:text-white hover:border-[#A9744F] transition-all duration-300 shadow-sm"
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>NOTIFY ON WHATSAPP</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}