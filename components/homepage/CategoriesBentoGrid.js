'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function CategoriesBentoGrid() {
  const handleWhatsAppClick = (categoryName) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER;
    const message = encodeURIComponent(
      `Hello 92degree! I am browsing the categories grid and interested in: "${categoryName}". Please share details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#FAFAF8] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase">
            EXPLORE CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
            COLLECTION MATRIX
          </h2>
        </div>
        <p className="text-sm text-[#6B6B6B] max-w-xs">
          Premium down jackets and modern streetwear essentials, made to last.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 relative">

        {/* 1. TOP-LEFT: DOWN JACKETS */}
        <Link href="/category/down-jackets" className="md:col-span-8 block">
          <div className="bg-[#1A1A1A] border-[3px] sm:border-4 border-[#1A1A1A] rounded-[2rem] p-6 sm:p-8 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden group shadow-sm">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/puffer.webp"
                alt="Down Jacket"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase leading-none max-w-[200px]">
                Down<br />JACKETS
              </h3>
              <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase bg-[#FAFAF8] px-3.5 py-1.5 rounded-full border border-[#E5E5E0]">
                FLAGSHIP 01
              </span>
            </div>

            <div className="relative z-10 flex items-end justify-between mt-auto">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleWhatsAppClick('Down Jackets');
                }}
                className="w-12 h-12 rounded-full bg-[#FAFAF8] text-[#1A1A1A] flex items-center justify-center hover:bg-[#A9744F] hover:text-white transition-colors shadow-md"
                aria-label="Inquire Down Jackets"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="text-right">
                <span className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight block">
                  OUTERWEAR //
                </span>
                <span className="text-xs font-bold text-[#FAFAF8]/80 uppercase tracking-wider">
                  100% Premium Down Fill
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* 2. RIGHT TALL CARD: SIGNATURE */}
        <Link href="/category/signature" className="md:col-span-4 md:row-span-2 block">
          <div className="bg-[#1A1A1A] border-[3px] sm:border-4 border-[#1A1A1A] rounded-[2rem] relative min-h-[500px] md:min-h-full overflow-hidden group shadow-sm flex flex-col justify-between p-6 sm:p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/leather-grid.webp"
                alt="Signature Collection"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/30 to-[#1A1A1A]/30" />
            </div>

            <div className="relative z-10 flex justify-end">
              <span className="bg-[#A9744F] text-white text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                OUTERWEAR
              </span>
            </div>

            <div className="relative z-10 text-white space-y-3">
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                SIGNATURE<br />COLLECTION
              </h3>
              <p className="text-xs text-[#FAFAF8]/80 max-w-xs">
                Heavyweight outerwear built for warmth, comfort, and everyday wear.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleWhatsAppClick('Signature Collection');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A9744F] text-white font-bold text-xs uppercase rounded-lg hover:bg-[#8F5F3E] transition-all"
              >
                <span>EXPLORE ALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Link>

        {/* 3. BOTTOM LEFT: HOODIES (widened 3 → 4) */}
        <Link href="/category/hoodies" className="md:col-span-4 block">
          <div className="bg-[#1A1A1A] border-[3px] sm:border-4 border-[#1A1A1A] rounded-[2rem] p-6 sm:p-7 relative overflow-hidden shadow-sm min-h-[280px] sm:min-h-[320px] flex flex-col justify-between group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/hoodie-grid.webp"
                alt="Heavyweight Hoodies"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-start">
              <span className="bg-[#A9744F] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                HOODIES
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h4 className="text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight">
                HEAVYWEIGHT<br />HOODIES
              </h4>
              <p className="text-xs text-[#FAFAF8]/70 mt-2 max-w-[220px]">
                380 GSM fleece. Built for daily wear.
              </p>
              <span className="text-[11px] font-bold text-[#E5E5E0] uppercase tracking-wider block mt-3">
                SHOP NOW →
              </span>
            </div>
          </div>
        </Link>

        {/* 4. BOTTOM RIGHT: T-SHIRTS (widened 2 → 4) */}
        <Link href="/category/polo" className="md:col-span-4 block">
          <div className="bg-[#1A1A1A] border-[3px] sm:border-4 border-[#1A1A1A] rounded-[2rem] p-6 sm:p-7 relative overflow-hidden shadow-sm min-h-[280px] sm:min-h-[320px] flex flex-col justify-between group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/t-shirt.webp"
                alt="T-Shirts"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-start">
              <span className="bg-[#FAFAF8] text-[#1A1A1A] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                ESSENTIALS
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h4 className="text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight">
                PREMIUM<br />T-SHIRTS
              </h4>
              <p className="text-xs text-[#FAFAF8]/70 mt-2 max-w-[220px]">
                Heavy cotton, clean cuts, everyday basics.
              </p>
              <span className="text-[11px] font-bold text-[#E5E5E0] uppercase tracking-wider block mt-3">
                SHOP NOW →
              </span>
            </div>
          </div>
        </Link>

      </div>

      {/* TRACKSUITS — 16:9 full-width row */}
      <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        <Link href="/category/tracksuits" className="md:col-span-12 block">
          <div className="bg-[#1A1A1A] border-[3px] sm:border-4 border-[#1A1A1A] rounded-[2rem] relative overflow-hidden shadow-sm group aspect-video">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/tracksuits.webp"
                alt="Tracksuits Collection"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
            </div>

            <div className="absolute inset-0 z-10 p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex justify-start">
                <span className="bg-[#A9744F] text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                  NEW DROP
                </span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-white">
                    TRACKSUITS
                  </h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#E5E5E0] uppercase tracking-wider block mt-1">
                    URBAN SETS →
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleWhatsAppClick('Tracksuits');
                  }}
                  className="w-10 h-10 rounded-full bg-[#FAFAF8] text-[#1A1A1A] flex items-center justify-center hover:bg-[#A9744F] hover:text-white transition-colors shadow-md"
                  aria-label="Inquire Tracksuits"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </section>
  );
}
