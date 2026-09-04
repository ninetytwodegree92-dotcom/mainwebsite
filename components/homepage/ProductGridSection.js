'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products, getWhatsAppLink } from '@/data/products';
import { useCartStore } from '@/lib/cartStore';
import { MessageCircle, ShoppingBag, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Pick the exact 6 products requested for the Homepage
const homepageProductIds = [1, 2, 3, 7, 10, 16];
const homepageProducts = products.filter((p) => homepageProductIds.includes(p.id));

export default function ProductGridSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState({});

  // Access Zustand Cart Store Action
  const addItem = useCartStore((state) => state.addItem);

  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Filter items dynamically
  const filteredProducts = activeFilter === 'all'
    ? homepageProducts
    : homepageProducts.filter((p) => p.category === activeFilter);

  // GSAP Entrance Scroll Trigger
  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll('.product-card');
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [activeFilter] }
  );

  const getSelectedSize = (product) => {
    if (selectedSizes[product.id]) return selectedSizes[product.id];
    return product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'M';
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const size = getSelectedSize(product);
    addItem(product, size, 1);
  };

  const handleWhatsAppOrder = (product) => {
    const size = getSelectedSize(product);
    const link = getWhatsAppLink(product, size);
    window.open(link, '_blank');
  };

  return (
    <section ref={sectionRef} id="shop" className="bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E0] select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#A9744F] uppercase">
              SEASON 01 FEATURED DROPS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mt-1">
              BEST SELLERS & ESSENTIALS
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'ALL FEATURED' },
              { id: 'puffer-jackets', label: 'PUFFER JACKETS' },
              { id: 'leather-jackets', label: 'LEATHER JACKETS' },
              { id: 'hoodies', label: 'HOODIES' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'bg-[#F5F4F0] border border-[#E5E5E0] text-[#6B6B6B] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 PRODUCT CARDS GRID */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const currentSize = getSelectedSize(product);
            const mainImg = product.images[0];

            // Custom Badge Tags for Homepage Highlights
            let tag = 'BEST SELLER';
            if (product.id === 2) tag = 'SIGNATURE PIECE';
            if (product.id === 10) tag = 'FLAGSHIP MODEL';
            if (product.id === 16) tag = 'STREETWEAR ESSENTIAL';

            return (
              <div
                key={product.id}
                className="product-card group bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#A9744F] hover:shadow-md"
              >
                {/* Product Image Frame */}
                <Link 
                  href={`/product/${product.slug}`}
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAFAF8] block"
                >
                  <Image
                    src={mainImg}
                    alt={product.name}
                    fill
                    className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-[#FAFAF8]/95 backdrop-blur-sm rounded-full border border-[#E5E5E0]">
                      {tag}
                    </span>
                  </div>

                  
                </Link>

                {/* Card Info Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest mb-1">
                      <span>CATEGORY: {product.category.replace('-', ' ')}</span>
                      <span>{product.colors.join(', ')}</span>
                    </div>

                    <Link href={`/product/${product.slug}`}>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A1A] uppercase tracking-tight leading-snug group-hover:text-[#A9744F] transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#6B6B6B] leading-relaxed mt-1.5 line-clamp-2">
                      {product.shortDescription || product.description}
                    </p>
                  </div>

                  {/* Size Selection Row */}
                  <div className="pt-2 border-t border-[#E5E5E0]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold tracking-wider text-[#6B6B6B] uppercase">
                        SELECT SIZE:
                      </span>
                      <span className="text-[10px] font-bold text-[#A9744F] uppercase">
                        {currentSize} SELECTED
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`flex-1 py-1 text-xs font-bold rounded border transition-all ${
                            currentSize === size
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                              : 'bg-[#FAFAF8] text-[#1A1A1A] border-[#E5E5E0] hover:border-[#A9744F]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 
                      MOBILE-PERFECT DUAL BUTTONS + WHATSAPP ACTION 
                  */}
                  <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
                    
                    {/* View Details & Add to Bag Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/product/${product.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#FAFAF8] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-[11px] tracking-wider uppercase rounded-xl hover:bg-[#1A1A1A] hover:text-white transition-all text-center"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#A9744F]" />
                        <span>VIEW</span>
                      </Link>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1A1A1A] text-white font-bold text-[11px] tracking-wider uppercase rounded-xl hover:bg-[#A9744F] transition-all text-center"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>ADD TO BAG</span>
                      </button>
                    </div>

                    {/* Direct WhatsApp Order Button */}
                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#A9744F] text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all duration-300 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>ORDER ON WHATSAPP  </span>
                    </button>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}