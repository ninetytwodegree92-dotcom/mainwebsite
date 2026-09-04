'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';
import { 
  MessageCircle, 
  Lock, 
  Wind, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Scissors
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutRemainingSections() {
  const containerRef = useRef(null);
  const anatomyRef = useRef(null);
  const ethosRef = useRef(null);

  // GSAP Animations
  useGSAP(
    () => {
      // Anatomy cards stagger
      const anatomyCards = anatomyRef.current?.querySelectorAll('.anatomy-card');
      if (anatomyCards) {
        gsap.fromTo(
          anatomyCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: anatomyRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Ethos section reveal
      const ethosElements = ethosRef.current?.querySelectorAll('.animate-ethos');
      if (ethosElements) {
        gsap.fromTo(
          ethosElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ethosRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent(
      'Hello 92degree! I am reading about your small-batch ethos and would like to consult on upcoming drops.'
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div ref={containerRef} className="select-none">
      
      {/* ===================================================
          SECTION 4: ANATOMY OF A 92DEGREE JACKET (Blueprint)
         =================================================== */}
      <section ref={anatomyRef} className="bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5E5E0]">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase">
            ARCHITECTURAL BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
            ANATOMY OF A 92DEGREE PIECE
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-md mx-auto">
            Every component is engineered for utility, extreme warmth, and longevity.
          </p>
        </div>

        {/* Blueprint Grid: Image Center + 4 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Feature Column (2 Cards) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="anatomy-card bg-[#F5F4F0] p-6 rounded-2xl border border-[#E5E5E0] space-y-2.5 hover:border-[#A9744F] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-[#1A1A1A] uppercase">
                CUSTOM MATTE HARDWARE
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Heavy-duty YKK zips and custom-molded matte black brass snaps engineered for zero snagging under extreme weather.
              </p>
            </div>

            <div className="anatomy-card bg-[#F5F4F0] p-6 rounded-2xl border border-[#E5E5E0] space-y-2.5 hover:border-[#A9744F] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-[#1A1A1A] uppercase">
                SECRET ZIP SECURITY POCKET
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Concealed internal chest pocket lined with ultra-soft microfiber to protect smartphones and luxury valuables.
              </p>
            </div>

          </div>

          {/* Center Image Display */}
          <div className="lg:col-span-4 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#E5E5E0] bg-[#F5F4F0] shadow-sm group">
              <Image
                src="/about-2.webp"
                alt="92degree Jacket Anatomy Blueprint"
                fill
                className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-center text-white">
                <span className="text-[10px] font-bold tracking-widest text-[#A9744F] uppercase block">
                  MODEL 92D-PUFF
                </span>
                <span className="text-xs font-black uppercase">THERMAL SHIELD SYSTEM</span>
              </div>
            </div>
          </div>

          {/* Right Feature Column (2 Cards) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="anatomy-card bg-[#F5F4F0] p-6 rounded-2xl border border-[#E5E5E0] space-y-2.5 hover:border-[#A9744F] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-[#1A1A1A] uppercase">
                HIGH-COLLAR STORM SHIELD
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Engineered collar height reinforced with thermal fill to block cold wind drafts without requiring a scarf.
              </p>
            </div>

            <div className="anatomy-card bg-[#F5F4F0] p-6 rounded-2xl border border-[#E5E5E0] space-y-2.5 hover:border-[#A9744F] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-[#1A1A1A] uppercase">
                REINFORCED DOUBLE SEAMS
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Double-stitched stress points using high-tensile bonded thread designed for maximum durability over decades.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 5: SMALL-BATCH & SLOW FASHION ETHOS
         =================================================== */}
      <section ref={ethosRef} className="bg-[#F5F4F0] py-16 sm:py-24 border-t border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="animate-ethos inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E5E5E0]">
                <Sparkles className="w-3.5 h-3.5 text-[#A9744F]" />
                <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                  LIMITED RELEASE MODEL
                </span>
              </div>

              <h2 className="animate-ethos text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.08]">
                WE DON'T MASS-PRODUCE.<br />
                WE DROP IN NUMBERED BATCHES.
              </h2>

              <p className="animate-ethos text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
                Mass production creates compromise—rushed stitching, diluted hide quality, and excess waste. At 92DEGREE, every drop is limited to a small, hand-numbered batch. Once a drop sells out, it enters our archives.
              </p>

              {/* Stats Box */}
              <div className="animate-ethos grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E5E0]">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#1A1A1A] block">0%</span>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">MASS PRODUCTION</span>
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#A9744F] block">32</span>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">QUALITY CHECKS</span>
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#1A1A1A] block">100%</span>
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">LIMITED DROPS</span>
                </div>
              </div>

            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAFAF8] p-8 rounded-[2rem] border border-[#E5E5E0] shadow-xs space-y-6">
                
                <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                  <Layers className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#1A1A1A] uppercase">
                    THE ARCHIVAL PROMISE
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    By keeping our collections small, we guarantee direct quality control and maintain true exclusivity for our collectors.
                  </p>
                </div>

                <div className="space-y-2 text-xs font-bold text-[#1A1A1A] uppercase pt-2 border-t border-[#E5E5E0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A9744F]" />
                    <span>Zero Overproduction Waste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A9744F]" />
                    <span>Inspected & Packaged Individually</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A9744F]" />
                    <span>Direct WhatsApp Founder Support</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 6: VIP CONCIERGE WHATSAPP CTA BAR
         =================================================== */}
      <section className="bg-[#1A1A1A] text-[#FAFAF8] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Soft Accent Radial Gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A9744F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAF8]/10 border border-[#FAFAF8]/20">
            <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-[#FAFAF8] uppercase">
              VIP CONCIERGE DESK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white max-w-2xl mx-auto">
            HAVE QUESTIONS ABOUT OUR CRAFTSMANSHIP OR NEXT DROP?
          </h2>

          <p className="text-xs sm:text-base text-[#FAFAF8]/80 max-w-lg mx-auto leading-relaxed">
            Speak directly with our concierge team on WhatsApp for size advice, bespoke tailoring requests, and early drop notifications.
          </p>

          <div className="pt-2">
            <button
              onClick={handleWhatsAppConsultation}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#A9744F] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8F5F3E] transition-all duration-300 shadow-lg group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT WITH OUR TEAM ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}