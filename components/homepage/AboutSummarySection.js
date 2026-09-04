'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Award, Compass, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSummarySection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const elements = textRef.current?.querySelectorAll('.animate-gsap');
      if (!elements) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E0]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Image & Prestige Stat Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#E5E5E0] shadow-sm">
              <Image
                src="/banner1.webp" // High-impact editorial photo
                alt="92degree Craftsmanship Studio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />

              {/* Floating Stat Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#FAFAF8]/95 backdrop-blur-md rounded-2xl border border-[#E5E5E0] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-[#1A1A1A]">92°</span>
                  <span className="text-xs font-bold text-[#A9744F] uppercase block">THERMAL COUTURE</span>
                </div>
                <div className="h-8 w-px bg-[#E5E5E0]" />
                <div>
                  <span className="text-xl font-black text-[#1A1A1A]">100%</span>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase block">FULL-GRAIN HIDE</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story Content */}
          <div ref={textRef} className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="animate-gsap inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
              <span className="w-2 h-2 rounded-full bg-[#A9744F]" />
              <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                OUR HERITAGE // ABOUT 92DEGREE
              </span>
            </div>

            {/* Headline */}
            <h2 className="animate-gsap text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.1]">
              ENGINEERED FOR HEAT. TAILORED FOR PRESTIGE.
            </h2>

            {/* Paragraphs */}
            <p className="animate-gsap text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              Founded on the belief that outerwear should make a bold statement without sacrificing warmth, <strong className="text-[#1A1A1A]">92degree</strong> fuses industrial-grade thermal insulation with minimalist European street couture.
            </p>

            <p className="animate-gsap text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              We operate on a limited-drop model—every batch of leather puffers, tracksuits, and heavyweight fleece is produced in small, numbered quantities to ensure uncompromising quality control and exclusivity.
            </p>

            {/* 3 Pillar Features */}
            <div className="animate-gsap grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0]">
                <Award className="w-5 h-5 text-[#A9744F] mb-2" />
                <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">SMALL-BATCH DROPS</h4>
                <p className="text-[11px] text-[#6B6B6B] mt-0.5">Numbered limited releases</p>
              </div>

              <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0]">
                <Layers className="w-5 h-5 text-[#A9744F] mb-2" />
                <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">32-STEP PROCESS</h4>
                <p className="text-[11px] text-[#6B6B6B] mt-0.5">Hand-inspected finishing</p>
              </div>

              <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0]">
                <Compass className="w-5 h-5 text-[#A9744F] mb-2" />
                <h4 className="text-xs font-bold uppercase text-[#1A1A1A]">GLOBAL SHIPPING</h4>
                <p className="text-[11px] text-[#6B6B6B] mt-0.5">Express insured delivery</p>
              </div>
            </div>

            {/* Link to Full About Page */}
            <div className="animate-gsap pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#1A1A1A] text-white font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#A9744F] transition-all duration-300 shadow-sm group"
              >
                <span>READ FULL BRAND STORY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}