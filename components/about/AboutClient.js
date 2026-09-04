'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';
import { 
  ShieldCheck, 
  Flame, 
  Award, 
  MessageCircle, 
  Ruler, 
  Sparkles, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutClient() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const storyRef = useRef(null);
  const pillarsRef = useRef(null);

  // GSAP Animations for Sections 1, 2, and 3
  useGSAP(
    () => {
      // Section 1: Hero Stagger Entrance
      const heroElements = heroTextRef.current?.querySelectorAll('.animate-hero');
      if (heroElements) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          }
        );
      }

      // Section 2: Story Reveal
      const storyElements = storyRef.current?.querySelectorAll('.animate-story');
      if (storyElements) {
        gsap.fromTo(
          storyElements,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: storyRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // Section 3: 4 Pillars Stagger
      const pillarCards = pillarsRef.current?.querySelectorAll('.pillar-card');
      if (pillarCards) {
        gsap.fromTo(
          pillarCards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent(
      'Hello 92degree! I am reading your brand story and would like to consult regarding sizing and tailoring.'
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div ref={containerRef} className="select-none">
      
      {/* ===================================================
          SECTION 1: HERO BANNER (The Essence of 92DEGREE)
         =================================================== */}
      <section className="bg-[#FAFAF8] border-b border-[#E5E5E0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.025] text-[22vw] font-black tracking-tighter text-[#1A1A1A] whitespace-nowrap leading-none z-0">
          92DEGREE
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase mb-4">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
            <span className="text-[#A9744F]">OUR HERITAGE & STORY</span>
          </nav>

          <div ref={heroTextRef} className="space-y-5">
            {/* Tag Badge */}
            <div className="animate-hero inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
              <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                BRAND PHILOSOPHY // 92DEGREE
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-hero text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.05] max-w-4xl mx-auto">
              CRAFTED AT THE INTERSECTION OF INDUSTRIAL WARMTH & MINIMALIST COUTURE.
            </h1>

            {/* Subhead */}
            <p className="animate-hero text-sm sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-normal">
              Named after the optimal thermal threshold where extreme sub-zero weather protection meets lightweight, architectural street silhouettes.
            </p>

            {/* Metrics Pills Row */}
            <div className="animate-hero flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="px-3.5 py-2 bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl text-xs font-bold text-[#1A1A1A] uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A9744F]" />
                100% FULL-GRAIN LAMBSKIN
              </span>
              <span className="px-3.5 py-2 bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl text-xs font-bold text-[#1A1A1A] uppercase flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#A9744F]" />
                700-FILL THERMAL INSULATION
              </span>
              <span className="px-3.5 py-2 bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl text-xs font-bold text-[#1A1A1A] uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A9744F]" />
                HANDCRAFTED SMALL BATCHES
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 2: BRAND STORY (Two-Column Editorial)
         =================================================== */}
      <section ref={storyRef} className="bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#E5E5E0] bg-[#F5F4F0] shadow-sm group">
              <Image
                src="/about-1.webp"
                alt="92degree Craftsmanship Studio"
                fill
                priority
                className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />

              {/* Floating Stat Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#FAFAF8]/95 backdrop-blur-md rounded-2xl border border-[#E5E5E0] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-[#1A1A1A]">32-POINT</span>
                  <span className="text-[10px] font-bold text-[#A9744F] uppercase block">MANUAL INSPECTION</span>
                </div>
                <div className="h-8 w-px bg-[#E5E5E0]" />
                <div>
                  <span className="text-xl font-black text-[#1A1A1A]">100%</span>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase block">GENUINE LEATHER HIDE</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Brand Origin Story Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="animate-story inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
              <span className="w-2 h-2 rounded-full bg-[#A9744F]" />
              <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                THE ORIGIN PHILOSOPHY
              </span>
            </div>

            <h2 className="animate-story text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.08]">
              REDEFINING HEAVYWEIGHT OUTERWEAR FOR THE MODERN ERA.
            </h2>

            <p className="animate-story text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              Traditional winter outerwear forces a compromise: you either settle for synthetic mass-produced jackets that sacrifice elegance, or delicate designer coats that offer zero warmth in harsh weather.
            </p>

            <p className="animate-story text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              <strong className="text-[#1A1A1A]">92DEGREE</strong> was founded to dismantle that compromise. We combine 700-fill thermal insulation matrix encased in hand-selected full-grain lambskin hides, shaped into dropped-shoulder cuts with matte hardware.
            </p>

            <div className="animate-story space-y-2.5 pt-2 text-xs font-bold text-[#1A1A1A] uppercase">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A9744F]" />
                <span>NO MASS PRODUCTION — ONLY NUMBERED DROPS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A9744F]" />
                <span>ETHICALLY SOURCED FULL-GRAIN LAMBSKIN HIDES</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A9744F]" />
                <span>DIRECT BESPOKE FIT CONSULTATION ON WHATSAPP</span>
              </div>
            </div>

            <div className="animate-story pt-3">
              <button
                onClick={handleWhatsAppConsultation}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#A9744F] text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONSULT OUR CONCIERGE ON WHATSAPP</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 3: THE 4 PILLARS OF CRAFTSMANSHIP (2x2 Grid)
         =================================================== */}
      <section ref={pillarsRef} className="bg-[#F5F4F0] py-16 sm:py-24 border-y border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase">
              UNCOMPROMISING STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
              THE 4 PILLARS OF CRAFTSMANSHIP
            </h2>
            <p className="text-sm text-[#6B6B6B] max-w-md mx-auto">
              Every garment carrying the 92DEGREE emblem is built around these four non-negotiable principles.
            </p>
          </div>

          {/* 2x2 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Pillar 1 */}
            <div className="pillar-card bg-[#FAFAF8] p-8 rounded-2xl border border-[#E5E5E0] shadow-xs space-y-4 hover:border-[#A9744F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                1. 100% FULL-GRAIN LAMBSKIN
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                We use exclusively full-grain hides. Unlike corrected or synthetic leather, full-grain retains the complete natural fiber strength, developing a rich patina over time that gets better with every season.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card bg-[#FAFAF8] p-8 rounded-2xl border border-[#E5E5E0] shadow-xs space-y-4 hover:border-[#A9744F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                2. 700-FILL THERMAL MATRIX
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                Our internal thermal insulation matrix is engineered to trap body heat while allowing air breathability. It provides extreme sub-zero weather protection without adding excessive weight.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card bg-[#FAFAF8] p-8 rounded-2xl border border-[#E5E5E0] shadow-xs space-y-4 hover:border-[#A9744F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                3. 32-POINT MANUAL INSPECTION
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                Before any jacket is approved for dispatch, it passes through 32 individual quality checks—inspecting seam tension, hardware zipper alignment, quilt panel symmetry, and hide smoothness.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card bg-[#FAFAF8] p-8 rounded-2xl border border-[#E5E5E0] shadow-xs space-y-4 hover:border-[#A9744F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                4. BESPOKE VIP CONCIERGE
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                You never have to guess your size. Every order includes a complimentary 1-on-1 WhatsApp consultation where our specialists review your height and weight measurements before finalizing shipping.
              </p>
            </div>

          </div>

        </div>
      </section>

      

    </div>
  );
}



  