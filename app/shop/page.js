 
import { getAllProducts, categories } from '@/data/products';
import ShopClient from '@/components/shop/ShopClient';
import ShopHero from '@/components/shop/ShopHero';

// --- Generate metadata dynamically ---
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const title = 'Shop All Collections | 92DEGREE Official Store';
  const description =
    'Explore the official 92DEGREE catalog. Premium leather puffer jackets, hoodies, tracksuits, and polos engineered for thermal warmth and streetwear couture.';

  return {
    title,
    description,
    keywords: 'leather puffer jacket, streetwear, hoodies, tracksuits, 92degree, thermal outerwear',
    authors: [{ name: '92DEGREE' }],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/shop`,
      siteName: '92DEGREE',
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: '92DEGREE – Luxury Leather Outerwear',
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
      canonical: `${siteUrl}/shop`,
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

// --- Optional JSON‑LD structured data (CollectionPage) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Shop All Collections | 92DEGREE',
  description:
    'Premium leather puffer jackets, hoodies, tracksuits, and polos – engineered for thermal warmth and streetwear couture.',
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/shop`
    : 'https://92degree.com/shop',
  isPartOf: {
    '@type': 'WebSite',
    name: '92DEGREE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com',
  },
};

export default function ShopPage() {
  const initialProducts = getAllProducts();

  return (
    <>
      {/* Inject JSON‑LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAFAF8] min-h-screen pt-20">
        <ShopHero />
        <ShopClient initialProducts={initialProducts} categories={categories} />
      </main>
    </>
  );
}