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

// Fallback slides — used only if Sanity has none
const fallbackSlides = [
  {
    _key: 'fb1',
    tag: 'COLLECTION 01 // DROP',
    title: 'PUFFER JACKET',
    subtitle: 'Tailored with low-profile ribbing and matte full-grain finish.',
    image: { url: '/banner1.webp', alt: 'Puffer Jacket' },
    align: 'left',
  },
  {
    _key: 'fb2',
    tag: 'FUTURE DROP // TEASER',
    title: 'LEATHER PUFFER',
    subtitle: 'Heavyweight fleece & technical streetwear tailored for utility.',
    image: { url: '/banner2.webp', alt: 'Leather Puffer' },
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

export default function HeroSection({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const textContentRef = useRef(null);

  // Use Sanity slides if provided, otherwise fallback
  const bannerSlides = slides.length > 0 ? slides : fallbackSlides;

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
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';
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
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1400}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={bannerSlides.length > 1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {bannerSlides.map((slide, index) => {
          const isRightAligned = slide.align === 'right';
          const imgUrl = slide.image?.url || '/banner1.webp';
          const imgAlt = slide.image?.alt || slide.title;

          return (
            <SwiperSlide
              key={slide._key || slide.id || index}
              className="relative w-full h-full overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={imgUrl}
                  alt={imgAlt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center filter brightness-[0.98]"
                  sizes="100vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    isRightAligned
                      ? 'from-transparent via-[#FAFAF8]/30 to-[#FAFAF8]/90'
                      : 'from-[#FAFAF8]/90 via-[#FAFAF8]/50 to-transparent'
                  } w-full md:w-2/3 lg:w-1/2`}
                />
              </div>

              <div
                className={`relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center ${
                  isRightAligned ? 'justify-end text-left' : 'justify-start text-left'
                }`}
              >
                <div
                  ref={index === activeIndex ? textContentRef : null}
                  className="max-w-xl space-y-5 sm:space-y-6 pt-12"
                >
                  {/* Tag */}
                  <div className="animate-gsap inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0]/90 border border-[#E5E5E0] backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="animate-gsap text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] uppercase leading-[1.05]">
                    {slide.title.split(' ').map((word, i, arr) => (
                      <span key={i}>
                        {word}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p className="animate-gsap text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-md">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="animate-gsap flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                    <a
                      href="#shop"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#A9744F] text-white font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#8F5F3E] transition-all duration-300 shadow-md group"
                    >
                      <span>EXPLORE PIECE</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

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

      {/* Bottom nav — unchanged */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 bg-[#FAFAF8]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5E5E0]">
          <span className="text-sm font-bold text-[#A9744F]">0{activeIndex + 1}</span>
          <span className="text-xs text-[#6B6B6B]">/ 0{bannerSlides.length}</span>
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          {bannerSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === i ? 'w-10 bg-[#A9744F]' : 'w-3 bg-[#E5E5E0]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}