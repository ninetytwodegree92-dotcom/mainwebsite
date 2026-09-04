import Link from 'next/link'; 
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import { Scale, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

export const metadata = {
  title: 'Terms of Service | 92DEGREE Official Store',
  description:
    'Read the official Terms of Service for 92DEGREE regarding WhatsApp ordering, pricing in PKR, express shipping, and our 7-day size exchange policy.',
  openGraph: {
    title: 'Terms of Service | 92DEGREE Official Store',
    description: 'Terms of Service & Exchange Policy for 92DEGREE.',
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-20">
 
      {/* Header Banner */}
      <section className="bg-[#FAFAF8] border-b border-[#E5E5E0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase mb-2">
            <Link href="/" className="hover:text-[#1A1A1A]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
            <span className="text-[#A9744F]">TERMS OF SERVICE</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
            <Scale className="w-4 h-4 text-[#A9744F]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
              STORE POLICY & PURCHASING AGREEMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
            TERMS OF SERVICE
          </h1>

          <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-lg mx-auto">
            Last updated: September 2026. By ordering from 92DEGREE, you agree to these terms and policies.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        
        {/* Term 1 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">01.</span> WHATSAPP ORDERING & SALES PROCESS
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            All orders placed with <strong className="text-[#1A1A1A]">92DEGREE</strong> are confirmed and processed via our official WhatsApp Concierge desk. An order is considered legally binding once item availability, size selection, and payment confirmation are verified by our team in writing.
          </p>
        </div>

        {/* Term 2 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">02.</span> PRICING & CURRENCY
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            All prices listed on our website are denominated in <strong className="text-[#1A1A1A]">Pakistani Rupees (PKR)</strong>. We reserve the right to adjust product pricing for small-batch limited drops prior to order confirmation. Once an order is confirmed on WhatsApp, the agreed price remains fixed.
          </p>
        </div>

        {/* Term 3 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">03.</span> SHIPPING & DELIVERY TERMS
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            We offer express local and global shipping. Orders are dispatched within 24-48 business hours after size verification:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B6B] list-disc list-inside pt-1">
            <li><strong className="text-[#1A1A1A]">Local Shipping (Pakistan):</strong> 2-4 business days via insured express couriers.</li>
            <li><strong className="text-[#1A1A1A]">International Shipping:</strong> 3-7 business days via DHL / FedEx express.</li>
            <li>Tracking details are provided directly to your WhatsApp as soon as your parcel ships.</li>
          </ul>
        </div>

        {/* Term 4 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">04.</span> 7-DAY SIZE EXCHANGE POLICY
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            We want your jacket to fit perfectly. If your jacket does not fit as expected:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B6B] list-disc list-inside pt-1">
            <li>You may request a size exchange within <strong className="text-[#1A1A1A]">7 days of receiving your item</strong>.</li>
            <li>The item must be unworn, undamaged, with original tags intact.</li>
            <li>Exchanges are processed quickly through our WhatsApp support desk.</li>
          </ul>
        </div>

        {/* Term 5 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">05.</span> INTELLECTUAL PROPERTY & TRADEMARKS
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            All brand assets, photography, architectural design layouts, 92DEGREE logos, and product designs are the exclusive intellectual property of 92DEGREE. Unauthorized reproduction or commercial copying is strictly prohibited.
          </p>
        </div>

   

      </section>

      <WhatsAppCtaBar /> 
    </main>
  );
}