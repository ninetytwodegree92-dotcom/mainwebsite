'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LifestyleStoryBlock({
  label = 'CRAFTSMANSHIP',
  heading = 'PERFECTION IN EVERY STITCH',
  paragraph = 'Every 92DEGREE garment undergoes rigorous manual quality inspections. From hand-selected hides to heavy-duty custom brass hardware, we engineer pieces designed to outlast seasonal trends.',
  imageSrc = '/products/jackets/cognac-puffer-1.jpg',
  imageAlt = '92DEGREE leather craftsmanship editorial story',
  reverse = false,
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger safely inside useEffect
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const imageEl = imageRef.current;
      const textEl = textRef.current;

      // Determine horizontal slide direction based on layout flip
      const imageSlideOffset = reverse ? 30 : -30;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Image fades and slides in from its side
      timeline.fromTo(
        imageEl,
        { opacity: 0, x: imageSlideOffset },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power2.out',
        }
      );

      // Text block fades and slides up, staggered ~0.15s after image starts
      timeline.fromTo(
        textEl,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.75'
      );
    }, sectionRef);

    return () => ctx.revert(); // GSAP Context Cleanup on Unmount
  }, [reverse]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAFAF8] overflow-hidden select-none border-t border-[#E5E5E0]"
    >
      {/* 50/50 Desktop Split Layout / Stacked Mobile Layout */}
      <div
        className={`w-full flex flex-col md:flex-row items-stretch min-h-[500px] md:min-h-[600px] ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        {/* IMAGE SIDE */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 relative min-h-[380px] sm:min-h-[480px] md:min-h-full aspect-[4/5] md:aspect-auto overflow-hidden bg-[#F5F4F0]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center filter brightness-[0.98]"
            priority={false}
          />
        </div>

        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 bg-[#FAFAF8] flex items-center justify-center px-8 py-16 sm:px-12 sm:py-20 md:px-20 md:py-24">
          <div ref={textRef} className="max-w-xl space-y-4 md:space-y-6">
            
            {/* Upper Category Label */}
            <span className="text-xs font-bold tracking-[0.25em] text-[#A9744F] uppercase block">
              {label}
            </span>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] leading-[1.08]">
              {heading}
            </h2>

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed font-normal">
              {paragraph}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}