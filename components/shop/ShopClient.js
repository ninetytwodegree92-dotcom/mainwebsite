'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/cartStore';
import { 
  Search, 
  X, 
  ChevronDown,
  Eye,
  ShoppingBag
} from 'lucide-react';

export default function ShopClient({ initialProducts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [hoveredImageMap, setHoveredImageMap] = useState({});
  const [visibleCount, setVisibleCount] = useState(9); // pagination

  const addItem = useCartStore((state) => state.addItem);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, searchQuery]);

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

  // Filter products by category and search only
  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchColor = product.colors.some((c) => c.toLowerCase().includes(q));
          return matchName || matchDesc || matchColor;
        }
        return true;
      });
  }, [initialProducts, selectedCategory, searchQuery]);

  // Pagination slice
  const displayProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = filteredProducts.length > visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, filteredProducts.length));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* FILTER & CONTROL TOOLBAR */}
      <div className="space-y-6 mb-10">
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, color, or material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#A9744F] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#1A1A1A]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5E5E0] scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-[#F5F4F0] border border-[#E5E5E0] text-[#6B6B6B] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
            }`}
          >
            ALL ITEMS ({initialProducts.length})
          </button>

          {categories.map((cat) => {
            const count = initialProducts.filter((p) => p.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shrink-0 ${
                  selectedCategory === cat.slug
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'bg-[#F5F4F0] border border-[#E5E5E0] text-[#6B6B6B] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    selectedCategory === cat.slug
                      ? 'bg-white/20 text-white'
                      : 'bg-[#FAFAF8] text-[#1A1A1A] border border-[#E5E5E0]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS SUMMARY */}
      <div className="flex items-center justify-between mb-8 text-xs text-[#6B6B6B] font-semibold uppercase tracking-wider">
        <span>SHOWING {displayProducts.length} OF {filteredProducts.length} PRODUCTS</span>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-[#A9744F] underline hover:text-[#1A1A1A]"
          >
            RESET FILTERS
          </button>
        )}
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#F5F4F0] rounded-2xl border border-[#E5E5E0] space-y-3">
          <p className="text-base font-bold text-[#1A1A1A] uppercase">NO PRODUCTS FOUND</p>
          <p className="text-xs text-[#6B6B6B]">Try adjusting your search or category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="inline-block px-5 py-2.5 bg-[#A9744F] text-white text-xs font-bold uppercase rounded-lg"
          >
            CLEAR ALL FILTERS
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayProducts.map((product) => {
              const currentSize = getSelectedSize(product);
              const secondaryImage = product.images.length > 1 ? product.images[1] : product.images[0];
              const activeImage = hoveredImageMap[product.id] ? secondaryImage : product.images[0];

              return (
                <div
                  key={product.id}
                  className="group bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#A9744F] hover:shadow-md"
                >
                  {/* Image Box */}
                  <div
                    onMouseEnter={() =>
                      setHoveredImageMap((prev) => ({ ...prev, [product.id]: true }))
                    }
                    onMouseLeave={() =>
                      setHoveredImageMap((prev) => ({ ...prev, [product.id]: false }))
                    }
                    className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAFAF8] cursor-pointer"
                  >
                    <Image
                      src={activeImage}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98]"
                    />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-[#FAFAF8]/90 backdrop-blur-sm rounded-full border border-[#E5E5E0]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest mb-1">
                        <span>{product.colors.join(', ')}</span>
                        <span>{product.sizes ? product.sizes.join(' · ') : 'ONE SIZE'}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-[#A9744F] transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#6B6B6B] leading-relaxed mt-1.5 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Size Selector */}
                    {product.sizes && (
                      <div className="pt-2 border-t border-[#E5E5E0] space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                          <span className="text-[#6B6B6B]">SELECT SIZE:</span>
                          <span className="text-[#A9744F]">{currentSize} SELECTED</span>
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
                    )}

                    {/* Action Buttons: View + Add to Cart */}
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

          {/* LOAD MORE BUTTON */}
          {hasMore && (
            <div className="flex justify-center pt-8">
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F5F4F0] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300"
              >
                <span>Load More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}