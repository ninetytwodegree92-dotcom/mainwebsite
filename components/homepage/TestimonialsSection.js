'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Tariq K.',
    location: 'London, UK',
    product: 'Cognac Leather Puffer',
    rating: 5,
    avatar: '/products/jackets/cognac-puffer-1.jpg',
    comment:
      'The leather weight and insulation quality are unmatched. I sent my height and weight on WhatsApp, and the team picked the exact right size. Arrived in London in 4 days.',
  },
  {
    id: 2,
    name: 'Zain A.',
    location: 'Lahore, PK',
    product: 'Onyx Leather Puffer',
    rating: 5,
    avatar: '/products/jackets/onyx-puffer-1.jpg',
    comment:
      'The matte finish on the full-grain leather gives it a serious high-fashion look. Super warm without feeling uncomfortably heavy. Best jacket purchase this year.',
  },
  {
    id: 3,
    name: 'Hamza S.',
    location: 'Dubai, UAE',
    product: 'High-Collar Thermal Puffer',
    rating: 5,
    avatar: '/products/jackets/high-collar-1.jpg',
    comment:
      'I was skeptical about ordering over WhatsApp at first, but the concierge service was fast and super professional. The jacket detail and brass hardware are top tier.',
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll('.testimonial-card');
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

  const handleWhatsAppReviewInquiry = () => {
    const message = encodeURIComponent(
      'Hello 92degree! I saw customer reviews on your site and would like to ask a few questions before ordering.'
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E0] select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-[#A9744F]" />
              <span>COLLECTOR REVIEWS</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
              WHAT OUR CLIENTS SAY
            </h2>
          </div>

          <button
            onClick={handleWhatsAppReviewInquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5F4F0] border border-[#E5E5E0] text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase rounded-xl hover:border-[#A9744F] hover:text-[#A9744F] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#A9744F]" />
            <span>CHAT WITH CONCIERGE</span>
          </button>
        </div>

        {/* 3 TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="testimonial-card bg-[#F5F4F0] border border-[#E5E5E0] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-[#A9744F] transition-colors shadow-xs"
            >
              {/* Background Quote Watermark */}
              <Quote className="w-20 h-20 text-[#E5E5E0]/40 absolute -top-2 -right-2 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A9744F] text-[#A9744F]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#E5E5E0] flex items-center gap-3.5 relative z-10">
                

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">
                      {review.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A9744F]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#6B6B6B] block">
                    {review.location} • <span className="text-[#A9744F]">{review.product}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}