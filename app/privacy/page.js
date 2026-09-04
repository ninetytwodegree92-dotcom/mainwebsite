import Link from 'next/link'; 
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import { ShieldCheck, Lock, Eye, ChevronRight, MessageCircle } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

export const metadata = {
  title: 'Privacy Policy | 92DEGREE Official Store',
  description:
    'Learn how 92DEGREE collects, protects, and handles your personal data, WhatsApp order communications, and sizing information.',
  openGraph: {
    title: 'Privacy Policy | 92DEGREE Official Store',
    description: 'Privacy Policy & Data Security standards for 92DEGREE.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-20">
 
      {/* Header Banner */}
      <section className="bg-[#FAFAF8] border-b border-[#E5E5E0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase mb-2">
            <Link href="/" className="hover:text-[#1A1A1A]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
            <span className="text-[#A9744F]">PRIVACY POLICY</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0]">
            <ShieldCheck className="w-4 h-4 text-[#A9744F]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
              DATA SECURITY & CONFIDENTIALITY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
            PRIVACY POLICY
          </h1>

          <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-lg mx-auto">
            Last updated: September 2026. Your privacy and data security are fundamental to how 92DEGREE operates.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        
        {/* Policy Section 1 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">01.</span> INTRODUCTION & SCOPE
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            At <strong className="text-[#1A1A1A]">92DEGREE</strong>, we are committed to protecting your personal information and respecting your privacy rights. This Privacy Policy explains what information we collect when you visit our website, communicate with our WhatsApp Concierge desk, or place orders for our leather outerwear and streetwear collections.
          </p>
        </div>

        {/* Policy Section 2 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">02.</span> INFORMATION WE COLLECT
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            We collect information necessary to fulfill your orders and deliver personalized sizing guidance:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B6B] list-disc list-inside pt-1">
            <li><strong className="text-[#1A1A1A]">WhatsApp Contact Details:</strong> Name, phone number, and chat communications exchanged with our concierge.</li>
            <li><strong className="text-[#1A1A1A]">Order & Sizing Data:</strong> Height, weight, or custom fit preferences provided for tailoring verification.</li>
            <li><strong className="text-[#1A1A1A]">Delivery Information:</strong> Shipping address and recipient contact numbers for dispatching couriers.</li>
            <li><strong className="text-[#1A1A1A]">Technical Site Data:</strong> IP addresses and browser types collected anonymously for site optimization.</li>
          </ul>
        </div>

        {/* Policy Section 3 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">03.</span> HOW WE USE YOUR INFORMATION
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            Your data is used strictly for legitimate operational purposes:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B6B] list-disc list-inside pt-1">
            <li>Processing, verifying, and dispatching your jacket orders.</li>
            <li>Providing 1-on-1 size consultations before shipping.</li>
            <li>Sending courier tracking links directly to your WhatsApp.</li>
            <li>Notifying you regarding small-batch limited drop releases (only if requested).</li>
          </ul>
        </div>

        {/* Policy Section 4 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">04.</span> DATA SECURITY & NO THIRD-PARTY SELLING
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            We do <strong className="text-[#1A1A1A]">NOT</strong> sell, rent, or trade your personal information to third-party advertisers. Your information is shared only with verified logistics partners (couriers) strictly for order delivery purposes. WhatsApp communications are secured via end-to-end encryption.
          </p>
        </div>

        {/* Policy Section 5 */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 rounded-2xl border border-[#E5E5E0] space-y-3">
          <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#A9744F]">05.</span> YOUR RIGHTS & CONTACT
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            You have the right to request deletion or correction of your personal data stored in our records at any time. For privacy-related inquiries, contact our Concierge:
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${STORE_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A9744F] text-white text-xs font-bold uppercase rounded-xl hover:bg-[#8F5F3E] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONTACT PRIVACY DESK ON WHATSAPP</span>
            </a>
          </div>
        </div>

      </section>

      <WhatsAppCtaBar />
     </main>
  );
}