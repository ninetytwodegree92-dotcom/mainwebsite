import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import AboutClient from '@/components/about/AboutClient';
import AboutRemainingSections from '@/components/about/AboutRemainingSection';

// --- Dynamic Metadata ---
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const title = 'Our Story & Heritage | 92DEGREE Official Store';
  const description =
    'Learn about the origin of 92DEGREE. We engineer full-grain leather puffer jackets crafted at the intersection of industrial warmth and minimalist couture.';

  return {
    title,
    description,
    keywords: 'about 92degree, brand heritage, leather outerwear, couture streetwear, brand story',
    authors: [{ name: '92DEGREE' }],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/about`,
      siteName: '92DEGREE',
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: '92DEGREE – Our Story & Heritage',
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
      canonical: `${siteUrl}/about`,
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

// --- JSON‑LD Structured Data (AboutPage) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story & Heritage | 92DEGREE',
  description:
    'Learn about the origin of 92DEGREE. We engineer full-grain leather puffer jackets crafted at the intersection of industrial warmth and minimalist couture.',
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/about`
    : 'https://92degree.com/about',
  isPartOf: {
    '@type': 'WebSite',
    name: '92DEGREE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com',
  },
  about: {
    '@type': 'Organization',
    name: '92DEGREE',
    description:
      'Premium leather outerwear and streetwear brand focused on thermal protection and minimalist couture.',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com'}/logo.png`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Inject JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAFAF8] min-h-screen pt-20">
        <AboutClient />
        <AboutRemainingSections />
        <WhatsAppCtaBar />
      </main>
    </>
  );
}