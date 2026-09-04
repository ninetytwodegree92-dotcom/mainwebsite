import { notFound } from 'next/navigation';
 
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import CategoryClient from '@/components/category/CategoryClient';
import { categories, getProductsByCategory } from '@/data/products';

// --- Generate static params for all categories ---
export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

// --- Dynamic SEO Metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';

  if (!category) {
    return {
      title: 'Category Not Found | 92DEGREE',
      robots: { index: false },
    };
  }

  const title = `${category.label} Collection | 92DEGREE Official Store`;
  const description = `Explore the official 92DEGREE ${category.label} collection. Engineered for thermal comfort and luxury streetwear.`;

  return {
    title,
    description,
    keywords: `${category.label}, ${category.label} collection, 92DEGREE, leather outerwear, streetwear`,
    authors: [{ name: '92DEGREE' }],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/category/${category.slug}`,
      siteName: '92DEGREE',
      images: [
        {
          url: `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: `${category.label} Collection – 92DEGREE`,
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
      canonical: `${siteUrl}/category/${category.slug}`,
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

// --- Main component ---
export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  // --- JSON‑LD Structured Data (CollectionPage) ---
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.label} Collection | 92DEGREE`,
    description: `Explore the official 92DEGREE ${category.label} collection. Engineered for thermal comfort and luxury streetwear.`,
    url: `${siteUrl}/category/${category.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: '92DEGREE',
      url: siteUrl,
    },
    about: {
      '@type': 'Product',
      name: `${category.label} Collection`,
      description: `${category.label} products from 92DEGREE.`,
    },
  };

  return (
    <>
      {/* Inject JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAFAF8] min-h-screen pt-20">
 
        <CategoryClient
          category={category}
          categoryProducts={categoryProducts}
          allCategories={categories}
        />

        <WhatsAppCtaBar />
       </main>
    </>
  );
}