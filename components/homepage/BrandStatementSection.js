'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ShieldCheck, Flame, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatementSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

  useGSAP(
    () => {
      // 1. 视差效果（仅桌面）
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      });

      // 2. 标题和副标题淡入 + 上浮（使用动画类）
      const textElements = textRef.current?.querySelectorAll('.animate-gsap');
      if (textElements) {
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello 92degree! I would like to learn more about your brand philosophy, custom tailoring, and small-batch craftsmanship.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
  };

  // 换行辅助
  const renderLines = (text) =>
    text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));

  const headline = 'CRAFTED AT THE INTERSECTION\nOF INDUSTRIAL WARMTH &\nMINIMALIST COUTURE.';
  const description =
    'We build thermal leather outerwear engineered to withstand extreme elements\nwithout compromising on silhouette precision, hand-selected lambskin grains,\nor bespoke tailoring.';

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#1A1A1A] text-[#FAFAF8] overflow-hidden my-8 md:my-16"
    >
      {/* 视口容器 —— 固定高度，确保图片和内容占满 */}
      <div className="relative w-full h-[80vh] min-h-[550px] md:min-h-[700px] max-h-[1000px] bg-[#1A1A1A]">
        
        {/* 图片层（带视差） */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        >
          <Image
            src="/banner3.png"
            alt="92degree brand statement"
            fill
            priority
            className="object-cover object-center brightness-[0.6]"
            sizes="100vw"
            onError={(e) => {
              // 若图片加载失败，隐藏 img，显示纯色背景
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* 半透明叠加层，增强文字可读性 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
        </div>

        {/* 内容层 —— 高 z-index 确保在上层 */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col justify-between py-8 md:py-14">
          
          {/* 主要文本区域 */}
          <div ref={textRef} className="max-w-3xl space-y-4 md:space-y-6 my-auto">
            {/* 标签（无动画，始终可见） */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAF8]/10 border border-[#FAFAF8]/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#FAFAF8] uppercase">
                BRAND PHILOSOPHY // 92DEGREE
              </span>
            </div>

            {/* 标题（入场动画） */}
            <h2 className="animate-gsap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white">
              {renderLines(headline)}
            </h2>

            {/* 副标题（入场动画） */}
            <p className="animate-gsap text-sm sm:text-base md:text-lg text-[#FAFAF8]/80 leading-relaxed max-w-2xl font-light">
              {renderLines(description)}
            </p>

            {/* 按钮组 —— 无动画，默认可见，且 z-index 高于图片 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4 relative z-30">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-4 bg-[#A9744F] text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase rounded-lg hover:bg-[#8F5F3E] transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONSULT VIA WHATSAPP</span>
              </button>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-6 sm:py-4 bg-[#FAFAF8]/10 backdrop-blur-md border border-[#FAFAF8]/20 text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase rounded-lg hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
              >
                <span>READ FULL STORY</span>
              </Link>
            </div>
          </div>

          {/* 底部亮点卡片 —— 无动画，始终可见，z-index 也足够 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-[#FAFAF8]/15 mt-4 sm:mt-6 relative z-30">
            <div className="flex items-center gap-3 bg-[#FAFAF8]/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-[#FAFAF8]/10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#A9744F]/20 border border-[#A9744F]/40 flex items-center justify-center text-[#A9744F] shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase text-white tracking-wider">100% GENUINE GRAIN</h4>
                <p className="text-[10px] sm:text-[11px] text-[#FAFAF8]/60">Ethically sourced hides.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#FAFAF8]/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-[#FAFAF8]/10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#A9744F]/20 border border-[#A9744F]/40 flex items-center justify-center text-[#A9744F] shrink-0">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase text-white tracking-wider">THERMAL MATRIX</h4>
                <p className="text-[10px] sm:text-[11px] text-[#FAFAF8]/60">Sub-zero comfort.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#FAFAF8]/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-[#FAFAF8]/10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#A9744F]/20 border border-[#A9744F]/40 flex items-center justify-center text-[#A9744F] shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase text-white tracking-wider">LIMITED DROP</h4>
                <p className="text-[10px] sm:text-[11px] text-[#FAFAF8]/60">Numbered collections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}