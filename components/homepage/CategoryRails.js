'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const FALLBACK_BLUR =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPScjRjVGNEYwJy8+PC9zdmc+';

/* ─── Fade-in wrapper — uses IntersectionObserver, never misses ─── */
function FadeIn({ children, delay = 0, y = 30, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already visible on mount — show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      const t = setTimeout(() => setShown(true), delay);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: shown ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default function CategoryRails({ categories = [] }) {
  const visible = (categories || []).filter(
    (c) => c && c.products && c.products.length > 0
  );

  if (!visible.length) return null;

  return (
    <section className="relative bg-[#FAFAF8] py-16 sm:py-24 select-none overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#A9744F]/[0.04] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#A9744F]/[0.03] rounded-full blur-3xl" />

      {/* Header */}
      <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E0] bg-white/60 backdrop-blur-sm mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A9744F] animate-pulse" />
          <span className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.3em]">
            Shop By Category
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.02]">
          Built For
          <span className="relative inline-block ml-2 sm:ml-3">
            <span className="relative z-10">Every Layer</span>
            <span className="absolute bottom-1 left-0 right-0 h-2 sm:h-3 bg-[#A9744F]/20 -z-0" />
          </span>
        </h2>

        <p className="text-sm text-[#6B6B6B] mt-4 max-w-md mx-auto leading-relaxed">
          Swipe each rail to explore the full range.
        </p>
      </FadeIn>

      {/* Rails */}
      <div className="relative space-y-16 sm:space-y-24">
        {visible.map((category, idx) => (
          <CategoryRail
            key={category._id}
            category={category}
            index={idx}
            isFirstRow={idx === 0}
          />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Single Category Rail
   ═══════════════════════════════════════════════════════════ */
function CategoryRail({ category, index, isFirstRow }) {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({
      left: dir === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="relative group/rail">
      {/* Header */}
      <FadeIn
        y={20}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-7 flex items-end justify-between gap-4"
      >
        <div className="flex items-end gap-4 sm:gap-5">
          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl border border-[#E5E5E0] bg-white text-[#A9744F] font-mono text-xs font-bold shrink-0">
            {formattedIndex}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-px bg-[#A9744F]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A9744F]">
                Collection
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight leading-none">
              {category.label}
            </h3>
            {category.tagline && (
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6B6B6B] mt-2">
                {category.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Scroll ${category.label} left`}
              onClick={() => scrollBy('prev')}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E5E5E0] text-[#1A1A1A] bg-white transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              aria-label={`Scroll ${category.label} right`}
              onClick={() => scrollBy('next')}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E5E5E0] text-[#1A1A1A] bg-white transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            href={`/category/${category.slug}`}
            className="group/btn inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-full border border-[#E5E5E0] bg-white text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:border-[#A9744F] transition-all duration-300"
          >
            <span>View All</span>
            <span className="w-6 h-6 rounded-full bg-[#F5F4F0] group-hover/btn:bg-[#A9744F] flex items-center justify-center transition-colors duration-300">
              <ArrowUpRight className="w-3 h-3 text-[#A9744F] group-hover/btn:text-white transition-all duration-300 group-hover/btn:rotate-45" />
            </span>
          </Link>
        </div>

        <Link
          href={`/category/${category.slug}`}
          className="md:hidden inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B] shrink-0"
        >
          View All
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </FadeIn>

      {/* Rail */}
      <FadeIn y={40} delay={80}>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/60 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#FAFAF8] via-[#FAFAF8]/60 to-transparent z-10" />

          <div
            ref={scrollRef}
            className="
              flex gap-3 sm:gap-4 lg:gap-5
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              px-4 sm:px-6 lg:px-8
              pt-2 pb-4
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {category.products.map((product, idx) => (
              <ProductCard
                key={product._id}
                product={product}
                index={idx}
                isPriority={isFirstRow && idx < 4}
              />
            ))}

            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Product Card
   ═══════════════════════════════════════════════════════════ */
function ProductCard({ product, index, isPriority = false }) {
  const primary = product.images?.[0];
  const hover = product.images?.[1] || null;
  const blur = primary?.lqip || FALLBACK_BLUR;
  const hasBlur = blur && blur.startsWith('data:');
  const num = String(index + 1).padStart(2, '0');

  const sizesStr =
    '(max-width: 640px) 68vw, (max-width: 768px) 42vw, (max-width: 1024px) 30vw, (max-width: 1280px) 23vw, 20vw';

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group/card relative shrink-0 snap-start w-[68vw] sm:w-[42vw] md:w-[30vw] lg:w-[23vw] xl:w-[20vw] aspect-[3/4] rounded-3xl overflow-hidden bg-[#F5F4F0] border border-[#E5E5E0] hover:border-[#A9744F]/40 transition-all duration-500 ease-out hover:shadow-[0_20px_60px_-20px_rgba(169,116,79,0.25)] hover:-translate-y-1"
    >
      {/* Image stack */}
      <div className="absolute inset-0">
        {primary?.url ? (
          <Image
            src={primary.url}
            alt={primary.alt || product.name}
            fill
            priority={isPriority}
            loading={isPriority ? 'eager' : 'lazy'}
            sizes={sizesStr}
            placeholder={hasBlur ? 'blur' : 'empty'}
            blurDataURL={hasBlur ? blur : undefined}
            className={`object-cover object-center transition-all duration-[900ms] ease-out group-hover/card:scale-[1.08] ${
              hover?.url ? 'group-hover/card:opacity-0' : ''
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] text-[#6B6B6B] uppercase tracking-widest">
            No Image
          </div>
        )}

        {hover?.url && (
          <Image
            src={hover.url}
            alt={hover.alt || `${product.name} — alternate view`}
            fill
            loading="lazy"
            sizes={sizesStr}
            className="object-cover object-center opacity-0 group-hover/card:opacity-100 group-hover/card:scale-[1.08] transition-all duration-[900ms] ease-out"
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Index chip */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-mono font-bold text-[#1A1A1A] border border-white/40">
          {num}
        </span>
      </div>

      {/* Featured badge */}
      {product.featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A9744F] text-white text-[9px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
            Featured
          </span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-10">
        <h4 className="text-sm sm:text-[15px] font-black text-white uppercase tracking-tight leading-tight line-clamp-1 group-hover/card:text-[#F5D4B8] transition-colors duration-300">
          {product.name}
        </h4>

        <div className="flex items-center justify-between mt-2">
          {product.price > 0 ? (
            <p className="text-[11px] font-mono text-white/90 tracking-wide">
              {product.currency || 'PKR'} {product.price.toLocaleString()}
            </p>
          ) : (
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
              Inquire
            </span>
          )}

          <span className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
          </span>
        </div>
      </div>

      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
        <div className="absolute -top-1/2 -left-full w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover/card:translate-x-[300%] transition-transform duration-[1200ms] ease-out" />
      </div>
    </Link>
  );
}