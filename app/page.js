import AboutSummarySection from '@/components/homepage/AboutSummarySection';
import BrandStatementSection from '@/components/homepage/BrandStatementSection';
import CategoriesBentoGrid from '@/components/homepage/CategoriesBentoGrid';
import ComingSoonSection from '@/components/homepage/ComingSoonSection';
import FaqSection from '@/components/homepage/FaqSection';
import HeroSection from '@/components/homepage/HeroSection';
import InstagramProofStrip from '@/components/homepage/InstagramProofStrip';
import LookbookGallerySection from '@/components/homepage/LookbookGallerySection';
import MarqueeStrip from '@/components/homepage/MarqueeStrip';
import ProductGridSection from '@/components/homepage/ProductGridSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import LifestyleStoryBlock from '@/components/homepage/LifestyleStoryBlock';

// --- Metadata for SEO ---
export const metadata = {
  title: '92DEGREE – Luxury Leather Outerwear & Streetwear | Official Store',
  description:
    'Discover 92DEGREE’s premium leather puffer jackets, hoodies, tracksuits, and polos. Handcrafted thermal outerwear with a minimalist couture edge. Shop the latest limited drops.',
  keywords:
    'leather puffer jacket, luxury streetwear, thermal outerwear, 92degree, genuine leather jacket, hoodies, tracksuits, couture leather',
  authors: [{ name: '92DEGREE' }],
  openGraph: {
    title: '92DEGREE – Luxury Leather Outerwear & Streetwear',
    description:
      'Engineered for extreme elements with uncompromising style. Explore our collection of handcrafted leather puffer jackets, hoodies, and technical streetwear.',
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://92degree.com",
    siteName: '92DEGREE',
    images: [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL + '/logo.png', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: '92DEGREE Luxury Leather Outerwear',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '92DEGREE – Luxury Leather Outerwear & Streetwear',
    description:
      'Handcrafted thermal leather jackets, hoodies, and streetwear – engineered for extreme comfort and minimalistic couture.',
    images: [process.env.NEXT_PUBLIC_SITE_URL + '/twitter-image.jpg'], // replace with your actual Twitter image
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://92degree.com",
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

// --- JSON-LD Structured Data (injected via script tag) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '92DEGREE',
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://92degree.com",
  logo: process.env.NEXT_PUBLIC_SITE_URL + '/logo.png' || "https://92degree.com/logo.png", // replace with actual logo URL
  description:
    'Premium leather outerwear and streetwear brand focused on thermal protection and minimalist couture.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK', // adjust to your country
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+92-123-4567890',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://instagram.com/92degree', // replace with actual URLs
    'https://facebook.com/92degree',
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main content – wrapped in <main> for semantic correctness */}
      <main>
        <HeroSection />
        <MarqueeStrip />
        <CategoriesBentoGrid />
        <ProductGridSection />
        <BrandStatementSection />

        <LifestyleStoryBlock
          label="CRAFTSMANSHIP // 01"
          heading="PERFECTION IN EVERY STITCH"
          paragraph="Every 92DEGREE garment undergoes 32 manual quality inspections. From hand-selected lambskin hides to heavy-duty custom brass zips, we engineer outerwear built to outlast seasonal trends."
          imageSrc="/banner5.webp"
          imageAlt="Cognac Leather Puffer Craftsmanship"
          reverse={false}
        />

        <LifestyleStoryBlock
          label="HERITAGE // 02"
          heading="TAILORED FOR EXTREME ELEMENTS"
          paragraph="We operate strictly on limited drops. By producing in small, numbered batches, we guarantee zero overproduction waste and preserve uncompromising quality control for every piece."
          imageSrc="/banner6.webp"
          imageAlt="Statement Leather Jacket Editorial"
          reverse={true}
        />

        {/* <ComingSoonSection /> */}
        <AboutSummarySection />

        {/* <InstagramProofStrip /> */}
        <LookbookGallerySection />
        <TestimonialsSection />
        <FaqSection />
        <WhatsAppCtaBar />
      </main>
    </>
  );
}