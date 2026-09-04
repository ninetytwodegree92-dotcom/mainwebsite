import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import ContactClient from '@/components/contact/ContactClient';

// --- Dynamic Metadata ---
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const title = 'Contact & VIP Concierge | 92DEGREE Official Store';
  const description =
    'Get in touch with 92DEGREE concierge for sizing advice, order tracking, bespoke tailoring, and instant WhatsApp support.';

  return {
    title,
    description,
    keywords: 'contact 92degree, VIP concierge, WhatsApp support, bespoke tailoring, customer care, leather outerwear',
    authors: [{ name: '92DEGREE' }],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/contact`,
      siteName: '92DEGREE',
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: '92DEGREE – Contact & Concierge',
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
    alternates: {
      canonical: `${siteUrl}/contact`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// --- JSON‑LD Structured Data (Organization with Contact) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '92DEGREE',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com'}/logo.png`,
  description:
    'Premium leather outerwear and streetwear brand with VIP concierge support.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ? `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
      : '+92-123-4567890',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://instagram.com/92degree', // replace with actual URL
    'https://facebook.com/92degree',  // replace with actual URL
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Inject JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAFAF8] min-h-screen pt-20">
        <ContactClient />
        <WhatsAppCtaBar />
      </main>
    </>
  );
}