'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, MessageCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Data updated with your exact titles, line-breaks, and image paths
const bannerSlides = [
  {
    id: 1,
    tag: 'COLLECTION 01 // DROP',
    title: 'PUFFER JACKET',
    subtitle: 'Tailored with low-profile ribbing and matte full-grain finish.',
    image: '/banner1.webp',
    align: 'left',
  },
  {
    id: 2,
    tag: 'FUTURE DROP // TEASER',
    title: 'LEATHER PUFFER',
    subtitle: 'Heavyweight fleece & technical streetwear tailored for utility.',
    image: '/banner2.webp',
    align: 'left',
  },
  {
    id: 3,
    tag: 'SIGNATURE PIECE',
    title: 'LEATHER',
    subtitle: 'High-density thermal insulation encased in rich cognac leather.',
    image: '/banner3.webp',
    align: 'left',
  },
  {
    id: 4,
    tag: 'THERMAL SHIELD',
    title: 'HOODIES & TRACKSUITS',
    subtitle: 'Engineered high collar protection against extreme cold.',
    image: '/banner4.webp',
    align: 'left',
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const textContentRef = useRef(null);

  // GSAP animation triggered on slide change
  useGSAP(
    () => {
      if (!textContentRef.current) return;
      const elements = textContentRef.current.querySelectorAll('.animate-gsap');

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );
    },
    { scope: containerRef, dependencies: [activeIndex] }
  );

  const handleWhatsAppClick = (productTitle) => {
    const phoneNumber = '1234567890'; // Replace with client's WhatsApp number
    const message = encodeURIComponent(
      `Hello 92degree! I am interested in booking/ordering: "${productTitle}". Please send me pricing and size chart.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[650px] bg-[#FAFAF8] overflow-hidden"
    >
      {/* Full Screen Swiper Banner */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1400}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {bannerSlides.map((slide, index) => {
          const isRightAligned = slide.align === 'right';

          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">

              {/* Full Viewport 100vw / 100vh Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center filter brightness-[0.98]"
                  sizes="100vw"
                />

                {/* Soft Gradient Overlay so text is readable over any image background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${isRightAligned
                    ? 'from-transparent via-[#FAFAF8]/30 to-[#FAFAF8]/90'
                    : 'from-[#FAFAF8]/90 via-[#FAFAF8]/50 to-transparent'
                    } w-full md:w-2/3 lg:w-1/2`}
                />
              </div>

              {/* Full Screen Floating Text Content Overlay */}
              <div
                className={`relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center ${isRightAligned ? 'justify-end text-left' : 'justify-start text-left'
                  }`}
              >
                <div
                  ref={index === activeIndex ? textContentRef : null}
                  className="max-w-xl space-y-5 sm:space-y-6 pt-12"
                >
                  {/* Tag Badge */}
                  <div className="animate-gsap inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0]/90 border border-[#E5E5E0] backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Headline with your custom <br /> splitting logic */}
                  <h1 className="animate-gsap text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] uppercase leading-[1.05]">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i}>
                        {word}
                        {i < slide.title.split(' ').length - 1 && <br />}
                      </span>
                    ))}
                  </h1>

                  {/* Subtitle */}
                  <p className="animate-gsap text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-md">
                    {slide.subtitle
                      .split(/(?<=[.!?])\s+/)   // 按句子结束符分割，保留标点
                      .map((sentence, index) => (
                        <span key={index}>
                          {sentence}
                          {index < slide.subtitle.split(/(?<=[.!?])\s+/).length - 1 && <br />}
                        </span>
                      ))}
                  </p>

                  {/* Action Buttons */}
                  <div className="animate-gsap flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                    {/* Primary Cognac Tan Button */}
                    <a
                      href="#shop"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#A9744F] text-white font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#8F5F3E] transition-all duration-300 shadow-md group"
                    >
                      <span>EXPLORE PIECE</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Secondary WhatsApp Button */}
                    <button
                      onClick={() => handleWhatsAppClick(slide.title)}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FAFAF8]/90 backdrop-blur-sm border border-[#E5E5E0] text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-white hover:border-[#A9744F] transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 text-[#A9744F]" />
                      <span>ORDER VIA WHATSAPP</span>
                    </button>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Floating Bottom Navigation Bar over Full-Screen Banner */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between pointer-events-none">

        {/* Slide Counter Box */}
        <div className="pointer-events-auto flex items-center gap-3 bg-[#FAFAF8]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5E5E0]">
          <span className="text-sm font-bold text-[#A9744F]">0{activeIndex + 1}</span>
          <span className="text-xs text-[#6B6B6B]">/ 0{bannerSlides.length}</span>
        </div>

        {/* Minimalist Progress Indicators */}
        <div className="pointer-events-auto flex items-center gap-2">
          {bannerSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-10 bg-[#A9744F]' : 'w-3 bg-[#E5E5E0]'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}