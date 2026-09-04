'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppLink } from '@/data/products';
import { 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Ruler, 
  ChevronRight, 
  ChevronDown,
  Check, 
  Bell, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ProductClient({ product, relatedProducts }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'M'
  );
  const [userFitInfo, setUserFitInfo] = useState('');
  const [openAccordion, setOpenAccordion] = useState('details');

  const isComingSoon = product.comingSoon;

  // Handles WhatsApp link generation using the central helper
  const handleWhatsAppAction = () => {
    let link = getWhatsAppLink(product, isComingSoon ? null : selectedSize);

    // If user provided height/weight fit info, append it to the message
    if (userFitInfo.trim() && !isComingSoon) {
      const extraMsg = ` (Fit Info: ${userFitInfo.trim()})`;
      link += encodeURIComponent(extraMsg);
    }

    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-8">
        <Link href="/" className="hover:text-[#1A1A1A]">HOME</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
        <Link href="/shop" className="hover:text-[#1A1A1A]">SHOP</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
        <span className="text-[#A9744F]">{product.name}</span>
      </nav>

      {/* MAIN PRODUCT DISPLAY GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT: Product Gallery (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Large Image Display */}
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#E5E5E0] bg-[#F5F4F0] shadow-xs">
            <Image
              src={product.images[activeImgIndex] || product.images[0]}
              alt={product.name}
              fill
              priority
              className={`object-cover object-center ${
                isComingSoon ? 'filter grayscale contrast-125 opacity-80' : 'filter brightness-[0.98]'
              }`}
              sizes="(max-width: 1024px) 100vw, 700px"
            />

            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              {isComingSoon ? (
                <span className="px-3.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-[#1A1A1A] rounded-full shadow-xs">
                  COMING SOON
                </span>
              ) : (
                <span className="px-3.5 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-[#FAFAF8]/95 backdrop-blur-sm rounded-full border border-[#E5E5E0]">
                  IN STOCK • READY TO SHIP
                </span>
              )}

              {product.featured && (
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-[#A9744F] rounded-full shadow-xs">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Thumbnail Image Row */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                    activeImgIndex === idx
                      ? 'border-[#A9744F] ring-2 ring-[#A9744F]/20'
                      : 'border-[#E5E5E0] opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT: Buy Box & Product Info (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Header Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#A9744F] uppercase tracking-widest">
              <span>CATEGORY: {product.category}</span>
              <span>ITEM #{product.id}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Pricing */}
            <div className="pt-1">
              {isComingSoon ? (
                <span className="text-xl font-bold text-[#6B6B6B] uppercase tracking-wider">
                  PRICE LAUNCHING SOON
                </span>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-[#A9744F]">
                    {product.currency} {product.price?.toLocaleString()}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded">
                    FREE EXPRESS SHIPPING
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            {product.description}
          </p>

          {/* Available Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-[#E5E5E0]">
              <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block">
                COLOR: <span className="text-[#6B6B6B]">{product.colors.join(', ')}</span>
              </span>
            </div>
          )}

          {/* Interactive Size Selector (Only for live items) */}
          {!isComingSoon && product.sizes && (
            <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                  SELECT SIZE:
                </span>
                <span className="text-xs font-bold text-[#A9744F] uppercase">
                  {selectedSize} SELECTED
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                      selectedSize === size
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-[#F5F4F0] text-[#1A1A1A] border-[#E5E5E0] hover:border-[#A9744F]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Optional Fit Advice Input */}
          {!isComingSoon && (
            <div className="p-4 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0] space-y-2">
              <label className="text-xs font-bold text-[#1A1A1A] uppercase flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#A9744F]" />
                <span>UNSURE OF YOUR SIZE? (OPTIONAL)</span>
              </label>
              <input
                type="text"
                placeholder="Enter Height & Weight (e.g. 5ft 11in, 75kg)"
                value={userFitInfo}
                onChange={(e) => setUserFitInfo(e.target.value)}
                className="w-full text-xs p-3 bg-[#FAFAF8] border border-[#E5E5E0] rounded-lg text-[#1A1A1A] focus:outline-none focus:border-[#A9744F]"
              />
              <p className="text-[10px] text-[#6B6B6B]">
                Our concierge team will verify your sizing via WhatsApp before dispatching.
              </p>
            </div>
          )}

          {/* Main Action Button */}
          <div>
            {isComingSoon ? (
              <button
                onClick={handleWhatsAppAction}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-[#1A1A1A] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#A9744F] transition-all shadow-sm"
              >
                <Bell className="w-4 h-4 text-[#A9744F]" />
                <span>NOTIFY ME ON WHATSAPP WHEN DROPPED</span>
              </button>
            ) : (
              <button
                onClick={handleWhatsAppAction}
                className="w-full inline-flex items-center justify-center gap-3 py-4 bg-[#A9744F] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-md group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ORDER VIA WHATSAPP ({product.currency} {product.price?.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Guarantees Box */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E5E5E0]">
            <div className="flex items-center gap-2.5 p-3 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0]">
              <ShieldCheck className="w-5 h-5 text-[#A9744F] shrink-0" />
              <div>
                <h5 className="text-[11px] font-bold text-[#1A1A1A] uppercase">100% LEATHER</h5>
                <p className="text-[9px] text-[#6B6B6B]">Full-Grain Quality</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 bg-[#F5F4F0] rounded-xl border border-[#E5E5E0]">
              <Truck className="w-5 h-5 text-[#A9744F] shrink-0" />
              <div>
                <h5 className="text-[11px] font-bold text-[#1A1A1A] uppercase">EXPRESS SHIPPING</h5>
                <p className="text-[9px] text-[#6B6B6B]">Insured Delivery</p>
              </div>
            </div>
          </div>

          {/* Accordions: Details / Care / Shipping */}
          <div className="space-y-2 pt-4 border-t border-[#E5E5E0]">
            
            {/* Accordion 1: Details */}
            <div className="bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                className="w-full p-4 flex items-center justify-between text-xs font-bold text-[#1A1A1A] uppercase tracking-wider text-left"
              >
                <span>CRAFTSMANSHIP & DETAILS</span>
                <ChevronDown className={`w-4 h-4 text-[#A9744F] transition-transform ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'details' && (
                <div className="px-4 pb-4 text-xs text-[#6B6B6B] space-y-2 border-t border-[#E5E5E0] pt-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A9744F]" />
                    <span>Full-grain leather with high-density thermal fill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A9744F]" />
                    <span>Matte finish hardware with custom 92DEGREE zippers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A9744F]" />
                    <span>Internal secret zip security pocket</span>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Care */}
            <div className="bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                className="w-full p-4 flex items-center justify-between text-xs font-bold text-[#1A1A1A] uppercase tracking-wider text-left"
              >
                <span>LEATHER CARE INSTRUCTIONS</span>
                <ChevronDown className={`w-4 h-4 text-[#A9744F] transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'care' && (
                <div className="px-4 pb-4 text-xs text-[#6B6B6B] leading-relaxed border-t border-[#E5E5E0] pt-3">
                  Do not machine wash or dry clean. Clean with specialized leather conditioner. Store in a cool, dry place using a wide padded hanger.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS SECTION */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="mt-20 pt-16 border-t border-[#E5E5E0]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#A9744F] uppercase tracking-widest">
                YOU MAY ALSO LIKE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mt-0.5">
                RELATED PIECES
              </h2>
            </div>

            <Link
              href="/shop"
              className="text-xs font-bold text-[#1A1A1A] hover:text-[#A9744F] uppercase tracking-wider flex items-center gap-1"
            >
              <span>VIEW ALL SHOP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/product/${rel.id}`}
                className="group bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl overflow-hidden p-4 flex flex-col justify-between hover:border-[#A9744F] transition-all"
              >
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-[#FAFAF8]">
                  <Image
                    src={rel.images[0]}
                    alt={rel.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A] uppercase group-hover:text-[#A9744F] transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs font-black text-[#A9744F] mt-1">
                    {rel.comingSoon ? 'COMING SOON' : `${rel.currency} ${rel.price?.toLocaleString()}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}