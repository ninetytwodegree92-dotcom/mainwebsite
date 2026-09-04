'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Plus, ShoppingCart, ArrowUpRight } from 'lucide-react';

export default function CategoriesBentoGrid() {
  const handleWhatsAppClick = (categoryName) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER; // Replace with client's real number
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
          Handcrafted genuine leather outerwear and modern streetwear essentials.
        </p>
      </div>

      {/* 5-ITEM BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 relative">

        {/* 1. TOP-LEFT CARD: LEATHER PUFFER (Large Main Card) */}
        <Link href="/category/puffer-jackets" className="md:col-span-8 block">
          <div className="bg-[#1A1A1A] border-3 sm:border-4 border-[#1A1A1A] rounded-[2rem] p-6 sm:p-8 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden group shadow-sm">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/puffer.webp"
                alt="Leather Puffer Jacket"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase leading-none max-w-[200px]">
                LEATHER<br />PUFFER
              </h3>
              <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase bg-[#FAFAF8] px-3.5 py-1.5 rounded-full border border-[#E5E5E0]">
                FLAGSHIP 01
              </span>
            </div>

            <div className="relative z-10 flex items-end justify-between mt-auto">
              <button
                onClick={(e) => { e.preventDefault(); handleWhatsAppClick('Leather Puffers'); }}
                className="w-12 h-12 rounded-full bg-[#FAFAF8] text-[#1A1A1A] flex items-center justify-center hover:bg-[#A9744F] hover:text-white transition-colors shadow-md"
                aria-label="Inquire Leather Puffer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="text-right">
                <span className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight block">
                  JACKETS //
                </span>
                <span className="text-xs font-bold text-[#FAFAF8]/80 uppercase tracking-wider">
                  100% Genuine Thermal Leather
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* 2. RIGHT TALL CARD: SIGNATURE LEATHER (Spans 2 Rows) */}
        <Link href="/category/leather-jackets" className="md:col-span-4 md:row-span-2 block">
          <div className="bg-[#1A1A1A] border-3 sm:border-4 border-[#1A1A1A] rounded-[2rem] relative min-h-[500px] md:min-h-full overflow-hidden group shadow-sm flex flex-col justify-between p-6 sm:p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/leather-grid.webp"
                alt="Signature Leather Collection"
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
                SIGNATURE<br />LEATHER
              </h3>
              <p className="text-xs text-[#FAFAF8]/80 max-w-xs">
                Handcrafted, heavyweight leather built for comfort and thermal protection.
              </p>
              <button
                onClick={(e) => { e.preventDefault(); handleWhatsAppClick('Signature Leather Collection'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A9744F] text-white font-bold text-xs uppercase rounded-lg hover:bg-[#8F5F3E] transition-all"
              >
                <span>EXPLORE ALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Link>

        {/* 3. BOTTOM CARD A: HOODIES */}
        <Link href="/category/hoodies" className="md:col-span-3 block">
          <div className="bg-[#1A1A1A] border-3 sm:border-4 border-[#1A1A1A] rounded-[2rem] p-5 relative overflow-hidden shadow-sm min-h-[220px] flex flex-col justify-between group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/hoodie-grid.webp"
                alt="Hoodies"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-start">
              <span className="bg-[#A9744F] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                HOODIES
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h4 className="text-lg font-black uppercase leading-tight tracking-tight">
                HEAVYWEIGHT<br />HOODIES
              </h4>
              <span className="text-[10px] font-bold text-[#E5E5E0] uppercase tracking-wider block mt-1">
                SHOP NOW →
              </span>
            </div>
          </div>
        </Link>

        {/* 4. BOTTOM CARD B: POLOS & T-SHIRTS */}
        <Link href="/category/polo" className="md:col-span-2 block">
          <div className="bg-[#1A1A1A] border-3 sm:border-4 border-[#1A1A1A] rounded-[2rem] p-5 relative overflow-hidden shadow-sm min-h-[220px] flex flex-col justify-between group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/category/t-shirt.webp"
                alt="Polos and T-Shirts"
                fill
                sizes="(max-width: 768px) 100vw, 16vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-start">
              <span className="bg-[#FAFAF8] text-[#1A1A1A] text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                ESSENTIALS
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h4 className="text-base font-black uppercase leading-tight tracking-tight">
                POLOS &<br />TEES
              </h4>
              <span className="text-[9px] font-bold text-[#E5E5E0] uppercase tracking-wider block mt-1">
                COMING SOON
              </span>
            </div>
          </div>
        </Link>

        {/* 5. BOTTOM CARD C: SPECIAL OFFER / SHOP ALL */}
        <div className="md:col-span-3 bg-[#F5F4F0] border-3 sm:border-4 border-[#1A1A1A] rounded-[2rem] p-5 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[220px] group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] to-[#F5F4F0] z-0" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] leading-none uppercase tracking-tight">
              15% OFF
            </h3>
            <p className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider mt-1.5">
              First Drop WhatsApp Orders
            </p>
          </div>

          <div className="relative z-10 mt-4 flex justify-start">
            <button
              onClick={() => handleWhatsAppClick('15% Off Discount Offer')}
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#A9744F] transition-all group/btn w-full justify-between"
            >
              <div className="text-left">
                <span className="text-[8px] font-semibold tracking-widest text-[#E5E5E0] uppercase block">
                  SHOP
                </span>
                <span className="text-xs font-bold tracking-wider uppercase block">
                  ALL PRODUCTS
                </span>
              </div>
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20">
                <ShoppingCart className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* TRACKSUITS – 16:9 full-width row */}
      <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        <Link href="/category/tracksuits" className="md:col-span-12 block">
          <div className="bg-[#1A1A1A] border-3 sm:border-4 border-[#1A1A1A] rounded-[2rem] relative overflow-hidden shadow-sm group aspect-video">
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
                  onClick={(e) => { e.preventDefault(); handleWhatsAppClick('Tracksuits'); }}
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
