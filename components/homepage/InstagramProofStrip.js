'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const instagramPhotos = [
  { id: 'ig1', image: '/banner1.webp', tag: '@92degree.official' },
  { id: 'ig2', image: '/banner2.webp', tag: '@92degree.official' },
  { id: 'ig3', image: '/banner3.webp', tag: '@92degree.official' },
  { id: 'ig4', image: '/banner4.webp', tag: '@92degree.official' },
  { id: 'ig5', image: '/banner1.webp', tag: '@92degree.official' },
  { id: 'ig6', image: '/banner3.webp', tag: '@92degree.official' },
];

export default function InstagramProofStrip() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll('.ig-card');
      if (!items) return;

      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
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

  const handleInstagramClick = () => {
    window.open('https://instagram.com', '_blank'); // Replace with client's Instagram URL
  };

  return (
    <section ref={containerRef} className="bg-[#F5F4F0] py-16 sm:py-20 border-t border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase flex items-center gap-2">
               <span>COMMUNITY & LOOKBOOK</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
              FOLLOW THE MOVEMENT
            </h2>
          </div>

          <button
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAFAF8] border border-[#E5E5E0] text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            <span>@92DEGREE.OFFICIAL</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 PHOTO GRID WITH HOVER STATES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={handleInstagramClick}
              className="ig-card group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-[#E5E5E0] bg-[#FAFAF8]"
            >
              <Image
                src={photo.image}
                alt="92degree Instagram Lookbook"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110 filter brightness-[0.98]"
              />

              {/* Hover Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                 <span className="text-[10px] font-bold tracking-wider uppercase">VIEW ON IG</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}