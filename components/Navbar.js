'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products, categories } from '@/data/products';
import { useCartStore } from '@/lib/cartStore';
import { 
  ShoppingBag, 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  const searchInputRef = useRef(null);

  // Zustand Cart Store Actions
  const { openCart, getTotalCount } = useCartStore();
  const cartCount = isMounted ? getTotalCount() : 0;

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-focus search input when search overlay opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Live Filtered Search Results (Top 5 Matches)
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleWhatsAppClick = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567';
    const message = encodeURIComponent('Hello 92degree! I have an inquiry regarding your products.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#1A1A1A] text-[#FAFAF8] text-[11px] font-medium tracking-widest uppercase py-2 px-4 text-center border-b border-[#E5E5E0]/10 flex items-center justify-center gap-2 select-none">
        <span>FREE EXPRESS SHIPPING ON ORDERS OVER 20,000 PKR</span>
        <span className="hidden sm:inline-block text-[#A9744F]">•</span>
        <button 
          onClick={handleWhatsAppClick}
          className="hidden sm:inline-flex items-center gap-1 text-[#A9744F] hover:underline"
        >
          <MessageCircle className="w-3 h-3" />
          <span>ORDER DIRECTLY ON WHATSAPP</span>
        </button>
      </div>

      {/* 2. Sticky Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E5E5E0] shadow-xs py-3'
            : 'bg-[#FAFAF8] border-b border-[#E5E5E0] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT: Logo Image & Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                <Image
                  src="/logo.png"
                  alt="92DEGREE Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#1A1A1A]">
                  92DEGREES
                </span>
                <span className="w-2 h-2 rounded-full bg-[#A9744F]" />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
              <Link href="/" className="hover:text-[#A9744F] transition-colors">
                HOME
              </Link>

              <Link href="/shop" className="hover:text-[#A9744F] transition-colors">
                SHOP ALL
              </Link>

              {/* Categories Dropdown Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-[#A9744F] transition-colors py-2 uppercase"
                >
                  <span>CATEGORIES</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#A9744F] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Panel */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#FAFAF8] border border-[#E5E5E0] rounded-2xl shadow-lg p-3 space-y-1 z-50">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F5F4F0] hover:text-[#A9744F] transition-colors group"
                      >
                        <span className="text-xs font-bold uppercase">{cat.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#A9744F]" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="hover:text-[#A9744F] transition-colors">
                OUR STORY
              </Link>

              <Link href="/contact" className="hover:text-[#A9744F] transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* RIGHT: Actions (Search Toggle, WhatsApp Button & Cart) */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
              className={`p-2 rounded-xl transition-colors ${
                searchOpen ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:text-[#A9744F]'
              }`}
            >
              {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>

            {/* WhatsApp Quick Inquiry Button */}
            <button
              onClick={handleWhatsAppClick}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#F5F4F0] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-xs tracking-wider uppercase rounded-lg hover:border-[#A9744F] hover:text-[#A9744F] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#A9744F]" />
              <span>WHATSAPP INQUIRY</span>
            </button>

            {/* Cart Button (Triggers Zustand CartDrawer) */}
            <button
              onClick={openCart}
              aria-label="View Cart Bag"
              className="relative p-2.5 text-[#1A1A1A] hover:text-[#A9744F] transition-colors group bg-[#F5F4F0] border border-[#E5E5E0] rounded-xl"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#A9744F] text-white text-[10px] font-bold flex items-center justify-center shadow-xs animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="p-2 text-[#1A1A1A] hover:text-[#A9744F] transition-colors lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* 3. INTERACTIVE LIVE SEARCH OVERLAY PANEL */}
        {searchOpen && (
          <div className="w-full bg-[#FAFAF8] border-t border-[#E5E5E0] py-4 px-4 sm:px-6 lg:px-8 shadow-xl animate-in fade-in slide-in-from-top duration-300">
            <div className="max-w-3xl mx-auto space-y-4">
              
              {/* Search Form Input */}
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-5 h-5 text-[#A9744F] absolute left-4" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search leather puffers, bombers, hoodies, tracksuits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 text-xs sm:text-sm bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl text-[#1A1A1A] placeholder-[#6B6B6B] font-medium focus:outline-none focus:border-[#A9744F] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-[#6B6B6B] hover:text-[#1A1A1A]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>

              {/* Real-time Filtered Search Results Dropdown */}
              {searchQuery.trim() !== '' && (
                <div className="bg-[#FAFAF8] border border-[#E5E5E0] rounded-2xl p-3 shadow-md space-y-2">
                  <div className="text-[10px] font-bold text-[#A9744F] uppercase tracking-widest px-3 py-1">
                    MATCHING PRODUCTS ({searchResults.length})
                  </div>

                  {searchResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-[#6B6B6B]">
                      No matching products found for "{searchQuery}".
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F5F4F0] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            {/* Product Thumbnail */}
                            <div className="relative w-10 h-12 rounded-lg overflow-hidden bg-[#F5F4F0] border border-[#E5E5E0] shrink-0">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            {/* Product Name & Category */}
                            <div>
                              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase group-hover:text-[#A9744F] transition-colors">
                                {product.name}
                              </h4>
                              <span className="text-[10px] text-[#6B6B6B] uppercase block">
                                {product.category.replace('-', ' ')}
                              </span>
                            </div>
                          </div>
 
                        </Link>
                      ))}

                      {/* View All Matches Link */}
                      <button
                        onClick={handleSearchSubmit}
                        className="w-full text-center py-2.5 text-xs font-bold text-[#1A1A1A] hover:text-[#A9744F] uppercase tracking-wider border-t border-[#E5E5E0] mt-2 flex items-center justify-center gap-1"
                      >
                        <span>VIEW ALL RESULTS IN SHOP</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A9744F]" />
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        )}
      </header>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAFAF8] flex flex-col justify-between p-6 overflow-y-auto lg:hidden">
          <div className="space-y-6">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E0]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1">
                <span className="text-2xl font-black text-[#1A1A1A]">92DEGREE</span>
                <span className="w-2 h-2 rounded-full bg-[#A9744F]" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-[#1A1A1A]" />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col space-y-4 text-sm font-black text-[#1A1A1A] uppercase tracking-wider">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>SHOP ALL</Link>

              {/* Expandable Category List */}
              <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
                <span className="text-xs font-bold text-[#A9744F]">CATEGORIES</span>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-[#6B6B6B] hover:text-[#1A1A1A] py-1 pl-2 border-l-2 border-[#E5E5E0]"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>

              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="pt-2 border-t border-[#E5E5E0]">OUR STORY</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            </nav>

          </div>

          {/* Bottom Mobile Actions */}
          <div className="space-y-3 pt-6 border-t border-[#E5E5E0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full py-3.5 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#A9744F]" />
              <span>VIEW BAG ({cartCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full py-3.5 bg-[#A9744F] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ORDER VIA WHATSAPP</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
}