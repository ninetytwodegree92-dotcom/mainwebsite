import { notFound } from 'next/navigation';
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import CategoryClient from '@/components/category/CategoryClient';
import { client } from '@/sanity/client';
import {
  CATEGORY_BY_SLUG_QUERY,
  ALL_CATEGORIES_QUERY,
  PRODUCTS_PAGINATED_QUERY,
  PRODUCTS_COUNT_QUERY,
} from '@/sanity/queries';

const PAGE_SIZE = 9;

// --- Static params ---
export async function generateStaticParams() {
  const cats = await client.fetch(ALL_CATEGORIES_QUERY);
  return cats.map((c) => ({ slug: c.slug }));
}

// --- SEO Metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await client.fetch(CATEGORY_BY_SLUG_QUERY, { slug });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';

  if (!category) {
    return {
      title: 'Category Not Found | 92DEGREE',
      robots: { index: false },
    };
  }

  const title = `${category.label} Collection | 92DEGREE Official Store`;
  const description =
    category.tagline ||
    `Explore the official 92DEGREE ${category.label} collection. Engineered for thermal comfort and luxury streetwear.`;

  // Banner image for OG
  const bannerUrl = category.banner?.url
    ? category.banner.url.startsWith('http')
      ? category.banner.url
      : `${siteUrl}${category.banner.url}`
    : `${siteUrl}/logo.png`;

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
          url: bannerUrl,
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
      images: [bannerUrl],
    },
    alternates: { canonical: `${siteUrl}/category/${category.slug}` },
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

// --- Page component ---
export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const [category, allCategories] = await Promise.all([
    client.fetch(CATEGORY_BY_SLUG_QUERY, { slug }),
    client.fetch(ALL_CATEGORIES_QUERY),
  ]);

  if (!category) notFound();

  // Parallel fetch — first page + total for this category
  const [initialProducts, initialTotal] = await Promise.all([
    client.fetch(PRODUCTS_PAGINATED_QUERY, {
      category: slug,
      search: '',
      start: 0,
      end: PAGE_SIZE,
    }),
    client.fetch(PRODUCTS_COUNT_QUERY, { category: slug, search: '' }),
  ]);

  // --- JSON-LD ---
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.label} Collection | 92DEGREE`,
    description:
      category.tagline ||
      `Explore the official 92DEGREE ${category.label} collection.`,
    url: `${siteUrl}/category/${category.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: '92DEGREE',
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAFAF8] min-h-screen pt-20">
        <CategoryClient
          category={category}
          initialProducts={initialProducts}
          initialTotal={initialTotal}
          allCategories={allCategories}
        />
        <WhatsAppCtaBar />
      </main>
    </>
  );
}