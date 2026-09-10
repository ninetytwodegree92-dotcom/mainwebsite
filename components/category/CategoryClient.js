'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/cartStore';
import { client } from '@/sanity/client';
import {
  PRODUCTS_PAGINATED_QUERY,
} from '@/sanity/queries';
import {
  ChevronRight,
  ShoppingBag,
  Eye,
  ChevronDown,
  Loader2,
} from 'lucide-react';

const PAGE_SIZE = 9;

export default function CategoryClient({
  category,
  initialProducts,
  initialTotal,
  allCategories,
}) {
  const [products, setProducts] = useState(initialProducts);
  const [total] = useState(initialTotal);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [selectedSizes, setSelectedSizes] = useState({});
  const [hoveredImageMap, setHoveredImageMap] = useState({});

  const addItem = useCartStore((state) => state.addItem);

  // ---- Hero data comes from Sanity category ----
  const banner = category.banner;
  const heroImage = banner?.url || '/banner1.webp';
  const heroAlt = banner?.alt || category.label;
  const tagline =
    category.tagline ||
    `Explore our official ${category.label} collection.`;

  // ---- Load More ----
  const loadMore = async () => {
    if (loading) return;
    setLoading(true);

    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    try {
      const items = await client.fetch(PRODUCTS_PAGINATED_QUERY, {
        category: category.slug,
        search: '',
        start,
        end,
      });
      setProducts((prev) => [...prev, ...items]);
      setPage((p) => p + 1);
    } catch (err) {
      console.error('Load more error:', err);
    } finally {
      setLoading(false);
    }
  };

  const hasMore = products.length < total;

  // ---- Size helpers ----
  const getSelectedSize = (product) => {
    if (selectedSizes[product._id]) return selectedSizes[product._id];
    return product.sizes?.length > 0 ? product.sizes[0] : 'M';
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const size = getSelectedSize(product);
    addItem({ ...product, id: product._id }, size, 1);
  };

  return (
    <section className="select-none">

      {/* ===================== HERO ===================== */}
      <div className="relative w-full bg-[#FAFAF8] border-b border-[#E5E5E0] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[420px] sm:min-h-[480px] flex items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.96]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/95 via-[#FAFAF8]/80 to-transparent w-full md:w-3/4 lg:w-3/5" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase">
            <Link href="/" className="hover:text-[#1A1A1A]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
            <Link href="/shop" className="hover:text-[#1A1A1A]">SHOP</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
            <span className="text-[#A9744F]">{category.label}</span>
          </nav>

          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
              <span className="w-2 h-2 rounded-full bg-[#A9744F] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
                {total} ITEMS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.05]">
              {category.label}
            </h1>

            <p className="text-xs sm:text-sm text-black leading-relaxed">
              {tagline}
            </p>
          </div>
        </div>
      </div>

      {/* ===================== CATEGORY SWITCHER ===================== */}
      <div className="bg-[#F5F4F0] border-b border-[#E5E5E0] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-widest mr-2 shrink-0">
            SWITCH CATEGORY:
          </span>
          {allCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all shrink-0 ${
                cat.slug === category.slug
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-[#FAFAF8] text-[#6B6B6B] border-[#E5E5E0] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ===================== PRODUCTS GRID ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
        {products.length === 0 ? (
          <div className="text-center py-20 bg-[#F5F4F0] rounded-2xl border border-[#E5E5E0] space-y-3">
            <p className="text-base font-bold text-[#1A1A1A] uppercase">
              NO PRODUCTS IN THIS CATEGORY
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product) => {
                const currentSize = getSelectedSize(product);
                const first = product.images?.[0];
                const hover = product.images?.[2] || product.images?.[1] || first;
                const displayImg = hoveredImageMap[product._id] ? hover : first;

                return (
                  <div
                    key={product._id}
                    className="group bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#A9744F] hover:shadow-md"
                  >
                    <Link
                      href={`/product/${product.slug}`}
                      onMouseEnter={() =>
                        setHoveredImageMap((prev) => ({ ...prev, [product._id]: true }))
                      }
                      onMouseLeave={() =>
                        setHoveredImageMap((prev) => ({ ...prev, [product._id]: false }))
                      }
                      className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAFAF8] block"
                    >
                      {displayImg?.url && (
                        <Image
                          src={displayImg.url}
                          alt={displayImg.alt || product.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                        />
                      )}

                      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-[#FAFAF8]/95 backdrop-blur-sm rounded-full border border-[#E5E5E0]">
                          IN STOCK
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest mb-1">
                          <span>COLOR: {product.colors?.join(', ')}</span>
                          <span>{product.images?.length || 0} SHOTS</span>
                        </div>

                        <Link href={`/product/${product.slug}`}>
                          <h3 className="text-base sm:text-lg font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-[#A9744F] transition-colors">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="text-xs text-[#6B6B6B] leading-relaxed mt-1.5 line-clamp-2">
                          {product.shortDescription || product.description}
                        </p>
                      </div>

                      {product.sizes?.length > 0 && (
                        <div className="pt-2 border-t border-[#E5E5E0] space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                            <span className="text-[#6B6B6B]">SELECT SIZE:</span>
                            <span className="text-[#A9744F]">
                              {currentSize} SELECTED
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {product.sizes.map((size) => (
                              <button
                                key={size}
                                onClick={() => handleSizeSelect(product._id, size)}
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
                      )}

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E5E5E0]">
                        <Link
                          href={`/product/${product.slug}`}
                          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 bg-[#FAFAF8] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-[11px] tracking-wider uppercase rounded-xl hover:bg-[#1A1A1A] hover:text-white transition-all text-center"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#A9744F]" />
                          <span>VIEW</span>
                        </Link>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 bg-[#A9744F] text-white font-bold text-[11px] tracking-wider uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-xs text-center"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>ADD TO BAG</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===================== LOAD MORE ===================== */}
            {hasMore && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F5F4F0] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>LOADING…</span>
                    </>
                  ) : (
                    <>
                      <span>LOAD MORE</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}