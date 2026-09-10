import Link from 'next/link';
import { ChevronRight, ShieldCheck, Mail, MessageCircle } from 'lucide-react';

// --- SEO Metadata ---
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const title = 'Privacy Policy | 92DEGREE Official Store';
  const description =
    'Learn how 92DEGREE collects, uses, and protects your personal data. Our privacy commitment to customers ordering leather outerwear and streetwear.';

  return {
    title,
    description,
    keywords: 'privacy policy, 92degree, data protection, customer privacy, leather outerwear',
    authors: [{ name: '92DEGREE' }],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/privacy`,
      siteName: '92DEGREE',
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: '92DEGREE – Privacy Policy',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/logo.png`],
    },
    alternates: { canonical: `${siteUrl}/privacy` },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Content sections — edit text here anytime
const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'When you browse 92DEGREE or place an order through our WhatsApp concierge, we may collect the following information:',
    ],
    bullets: [
      'Your name and contact details (phone number, email) shared via WhatsApp or our contact form',
      'Delivery address and order preferences (size, colour, quantity)',
      'Device information such as browser type, IP address, and approximate location',
      'Usage data on how you interact with our website (pages viewed, products browsed)',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: ['Your information is used strictly to deliver a premium service:'],
    bullets: [
      'Processing and fulfilling your order',
      'Verifying sizing and confirming details before dispatch',
      'Providing customer support and order updates',
      'Improving our website, product range, and user experience',
      'Sending occasional updates about new drops (only if you opt in)',
    ],
  },
  {
    title: '3. WhatsApp Orders & Third Parties',
    body: [
      'We use WhatsApp Business to manage orders and customer conversations. When you message us, your phone number and message content are processed by Meta (WhatsApp) under their own privacy policy.',
      'We also work with trusted service providers for:',
    ],
    bullets: [
      'Hosting and content delivery (Vercel, Sanity CMS)',
      'Payment processing (where applicable)',
      'Analytics and performance monitoring',
      'Logistics and courier partners for delivery',
    ],
  },
  {
    title: '4. Cookies & Tracking',
    body: [
      'Our website may use cookies and similar technologies to remember your preferences, analyse site traffic, and improve your browsing experience.',
      'You can disable cookies in your browser settings at any time. Some features may not function correctly if cookies are disabled.',
    ],
  },
  {
    title: '5. Data Retention',
    body: [
      'We retain your personal data only as long as necessary to fulfil orders, comply with legal obligations, and resolve disputes. Order records are typically kept for a reasonable period for warranty and accounting purposes.',
    ],
  },
  {
    title: '6. Data Security',
    body: [
      'We take reasonable technical and organisational measures to protect your information against unauthorised access, alteration, or loss. However, no method of transmission over the internet is 100% secure.',
    ],
  },
  {
    title: '7. Your Rights',
    body: ['Depending on your location, you may have the right to:'],
    bullets: [
      'Access the personal data we hold about you',
      'Request correction of inaccurate information',
      'Request deletion of your data (subject to legal retention requirements)',
      'Opt out of marketing communications at any time',
    ],
    footer:
      'To exercise any of these rights, contact us via WhatsApp or email.',
  },
  {
    title: '8. Children’s Privacy',
    body: [
      '92DEGREE does not knowingly collect personal information from children under 13 (or the age required by your local jurisdiction). If you believe a child has provided us with data, please contact us so we can remove it.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The latest version will always be available on this page with an updated “Last Updated” date.',
    ],
  },
];

export default function PrivacyPage() {
  const lastUpdated = 'January 2026';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';

  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-20">

      {/* ============= HERO ============= */}
      <section className="relative border-b border-[#E5E5E0] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase mb-6">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E0]" />
            <span className="text-[#A9744F]">PRIVACY POLICY</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-[#E5E5E0] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A9744F]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">
              YOUR PRIVACY MATTERS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[1.05] mb-4">
            PRIVACY POLICY
          </h1>

          <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-2xl">
            At 92DEGREE, we are committed to protecting your personal information.
            This policy explains what data we collect, how we use it, and the
            choices you have.
          </p>

          <div className="mt-6 text-[11px] font-bold tracking-widest text-[#6B6B6B] uppercase">
            LAST UPDATED: {lastUpdated}
          </div>
        </div>
      </section>

      {/* ============= CONTENT ============= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">

          {sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-lg sm:text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
                {section.title}
              </h2>

              {section.body?.map((para, j) => (
                <p
                  key={j}
                  className="text-sm text-[#6B6B6B] leading-relaxed"
                >
                  {para}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-2 pl-1">
                  {section.bullets.map((item, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-sm text-[#6B6B6B] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A9744F] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-sm text-[#6B6B6B] leading-relaxed italic">
                  {section.footer}
                </p>
              )}
            </div>
          ))}

          {/* ============= CONTACT CTA ============= */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F5F4F0] border border-[#E5E5E0] rounded-2xl space-y-4">
            <h2 className="text-lg sm:text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
              10. Contact Us
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              If you have any questions about this Privacy Policy or how we
              handle your data, reach out to our concierge team:
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Hello 92DEGREE! I have a question about your privacy policy.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#A9744F] text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-[#8F5F3E] transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP CONCIERGE</span>
              </a>

              <a
                href="mailto:privacy@92degree.com"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FAFAF8] border border-[#E5E5E0] text-[#1A1A1A] font-bold text-xs tracking-widest uppercase rounded-xl hover:border-[#A9744F] hover:text-[#A9744F] transition-all"
              >
                <Mail className="w-4 h-4 text-[#A9744F]" />
                <span>privacy@92degree.com</span>
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-8 border-t border-[#E5E5E0] text-center">
            <p className="text-[11px] text-[#6B6B6B] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} 92DEGREE — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}