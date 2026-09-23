'use client';

import { useRef, useEffect, useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  Zap,
  CheckCircle2,
  XCircle,
  MessageCircle,
} from 'lucide-react';

/* ─── Fade-in on scroll ─── */
function FadeIn({ children, delay = 0, y = 30, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
}

export default function PaymentPolicySection() {
  const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567';

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hi 92DEGREES! I have a question about payment and ordering.'
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative bg-[#FAFAF8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">

      {/* Subtle brown glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#A9744F]/[0.05] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-[#A9744F]/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* ═══ Header ═══ */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E0] bg-white/70 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9744F] animate-pulse" />
            <span className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.3em]">
              Payment Policy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.02]">
            100% Advance
            <span className="block text-[#A9744F] mt-1">Payment Only</span>
          </h2>

          <p className="text-sm text-[#6B6B6B] mt-5 max-w-md mx-auto leading-relaxed">
            Every order is processed after full advance payment. We do{' '}
            <span className="text-[#1A1A1A] font-semibold">
              not offer Cash on Delivery
            </span>{' '}
            — this ensures quality, security, and commitment on both sides.
          </p>
        </FadeIn>

        {/* ═══ Big Notice Card ═══ */}
        <FadeIn delay={100} className="mb-12 sm:mb-16">
          <div className="relative max-w-3xl mx-auto">
            {/* Gradient border wrapper */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A9744F]/40 via-transparent to-[#A9744F]/20 p-[1px]">
              <div className="absolute inset-0 rounded-3xl bg-[#FAFAF8]" />
            </div>

            <div className="relative rounded-3xl bg-white border border-[#E5E5E0] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#A9744F] flex items-center justify-center shrink-0 shadow-lg shadow-[#A9744F]/20">
                  <ShieldCheck className="w-7 h-7 text-white" strokeWidth={2.2} />
                </div>

                {/* Copy */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#A9744F]/10 text-[#A9744F] text-[10px] font-mono font-bold uppercase tracking-widest">
                      Secure Policy
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] uppercase tracking-tight leading-tight">
                    Advance payment protects every order
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2 leading-relaxed">
                    Because every piece is crafted in limited batches, we operate strictly on
                    prepaid orders. No COD, no exceptions — this keeps production fast and
                    pricing fair for everyone.
                  </p>
                </div>
              </div>

              {/* Divider + stats */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#E5E5E0]">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#1A1A1A] leading-none">
                    0%
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] mt-1.5">
                    COD Allowed
                  </p>
                </div>
                <div className="text-center border-x border-[#E5E5E0]">
                  <p className="text-2xl sm:text-3xl font-black text-[#A9744F] leading-none">
                    100%
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] mt-1.5">
                    Prepaid
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#1A1A1A] leading-none">
                    24h
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] mt-1.5">
                    Order Confirm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ═══ Comparison Grid ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">

          {/* Accepted */}
          <FadeIn delay={150}>
            <div className="h-full rounded-2xl border border-[#A9744F]/30 bg-white p-6 sm:p-7 hover:border-[#A9744F]/60 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#A9744F] flex items-center justify-center shrink-0 shadow-md shadow-[#A9744F]/20">
                  <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.4} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#A9744F]">
                    Accepted
                  </p>
                  <h4 className="text-base sm:text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                    Payment Methods
                  </h4>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  { icon: CreditCard, text: 'Bank Transfer (IBFT / Wire)' },
                  { icon: Zap, text: 'Easypaisa & JazzCash' },
                  { icon: MessageCircle, text: 'WhatsApp-confirmed payment' },
                  { icon: Lock, text: 'International remittance' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-[#E5E5E0] bg-[#F5F4F0] flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-[#A9744F]" strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-sm text-[#1A1A1A] font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Not available */}
          <FadeIn delay={220}>
            <div className="h-full rounded-2xl border border-[#E5E5E0] bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] border border-[#E5E5E0] flex items-center justify-center shrink-0">
                  <XCircle className="w-5 h-5 text-[#6B6B6B]" strokeWidth={2.4} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B]">
                    Not Available
                  </p>
                  <h4 className="text-base sm:text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                    Unsupported Options
                  </h4>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  'Cash on Delivery (COD)',
                  'Partial payment / installments',
                  'Payment after inspection',
                  'Refundable advance deposits',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-[#E5E5E0] bg-[#F5F4F0] flex items-center justify-center shrink-0">
                      <span className="w-3 h-px bg-[#C5C5C0]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#6B6B6B] font-medium line-through decoration-[#C5C5C0]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* ═══ CTA Bar ═══ */}
        <FadeIn delay={280}>
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#E5E5E0] bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#A9744F]/10 border border-[#A9744F]/20 items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-[#A9744F]" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">
                  Questions about payment?
                </p>
                <p className="text-[11px] text-[#6B6B6B]">
                  Our team confirms every payment personally before dispatch.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A9744F] text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#8F5F3E] active:scale-[0.97] transition-all shrink-0 shadow-md shadow-[#A9744F]/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}