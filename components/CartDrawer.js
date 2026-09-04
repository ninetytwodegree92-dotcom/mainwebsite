'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/lib/cartStore';
import { STORE_WHATSAPP_NUMBER } from '@/data/products'; // adjust path if needed
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function CartDrawer() {
  const [isMounted, setIsMounted] = useState(false);

  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalCount,
    getTotalPrice,
  } = useCartStore();

  // Prevent SSR Hydration Mismatch for LocalStorage values
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const totalCount = getTotalCount();
  const totalPrice = getTotalPrice();

  // --- Build WhatsApp message with all cart details ---
  const buildWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = 'Hello 92DEGREE! I would like to place an order for the following items:\n\n';
    
    items.forEach((item, index) => {
      const product = item.product;
      const size = item.selectedSize;
      const qty = item.quantity;
      const price = product.price || 0;
      const subtotal = price * qty;
      message += `${index + 1}. ${product.name} (Size: ${size}) × ${qty} = ${product.currency || 'USD'} ${subtotal.toFixed(2)}\n`;
    });

    message += `\nTotal: ${items[0]?.product?.currency || 'USD'} ${totalPrice.toFixed(2)}`;
    message += '\n\nPlease confirm availability and provide payment details. Thank you!';

    return encodeURIComponent(message);
  };

  const handleCheckoutClick = () => {
    if (items.length === 0) return;
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#1A1A1A]/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* 2. Slide-Over Cart Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-[#FAFAF8] flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-[#E5E5E0] shadow-xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E5E5E0] flex items-center justify-between bg-[#FAFAF8]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#A9744F]" />
            <h2 className="text-sm font-extrabold text-[#1A1A1A] uppercase tracking-wider">
              YOUR BAG ({totalCount})
            </h2>
          </div>

          <button
            onClick={closeCart}
            className="p-1 text-[#1A1A1A] hover:text-[#A9744F] transition-colors"
            aria-label="Close Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-none">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center text-[#A9744F]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#1A1A1A] uppercase tracking-wider">
                  YOUR BAG IS EMPTY
                </h3>
                <p className="text-xs text-[#6B6B6B] mt-1 max-w-xs">
                  Explore our leather puffer collection and add pieces to your cart.
                </p>
              </div>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 bg-[#A9744F] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#8F5F3E] transition-all"
              >
                EXPLORE CATALOG
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartItemId}
                className="flex gap-4 p-3.5 bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl relative group"
              >
                {/* Thumbnail Image */}
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#FAFAF8] border border-[#E5E5E0] shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Info & Quantity Actions */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div className="pr-6">
                    <h4 className="text-xs font-extrabold text-[#1A1A1A] uppercase tracking-tight line-clamp-1">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] font-bold text-[#A9744F] uppercase tracking-wider block mt-0.5">
                      SIZE: {item.selectedSize}
                    </span>
                  </div>

                  {/* Quantity Counter Row */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center bg-[#FAFAF8] border border-[#E5E5E0] rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1 hover:text-[#A9744F] transition-colors"
                        aria-label="Decrease Quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#1A1A1A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1 hover:text-[#A9744F] transition-colors"
                        aria-label="Increase Quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.cartItemId)}
                      className="p-1 text-[#6B6B6B] hover:text-red-600 transition-colors"
                      aria-label="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E0] bg-[#FAFAF8] space-y-4">
            
            {/* Price Subtotal */}
            <div className="space-y-1">
              <p className="text-[10px] text-[#6B6B6B]">
                Free express global shipping & size confirmation via WhatsApp.
              </p>
            </div>

            {/* Primary WhatsApp Checkout CTA */}
            <button
              onClick={handleCheckoutClick}
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-[#A9744F] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-md group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHECKOUT VIA WHATSAPP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Clear Cart Link */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={clearCart}
                className="text-[10px] font-bold text-[#6B6B6B] hover:text-red-600 uppercase tracking-wider underline"
              >
                CLEAR BAG
              </button>
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#A9744F] uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% GENUINE LEATHER GUARANTEED</span>
              </div>
            </div>

          </div>
        )}

      </aside>
    </>
  );
}