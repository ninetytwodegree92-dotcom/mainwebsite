import { notFound } from 'next/navigation';
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import ProductClient from '@/components/products/ProductClient';
import {
  getProductBySlug,
  getProductsByCategory,
  getAllProductSlugs,
} from '@/data/products';

// --- Static params ---
export async function generateStaticParams() {
  return await getAllProductSlugs();   // ← await
}

// --- SEO Metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);   // ← await

  if (!product) {
    return {
      title: 'Product Not Found | 92DEGREE',
      robots: { index: false },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const productUrl = `${siteUrl}/product/${product.slug}`;
  const imageUrl = product.images?.[0]?.url
    ? product.images[0].url.startsWith('http')
      ? product.images[0].url                    // Sanity CDN → absolute
      : `${siteUrl}${product.images[0].url}`     // local path → prefix
    : `${siteUrl}/logo.png`;

  const title = `${product.name} | 92DEGREE Official Store`;
  const description =
    product.description?.slice(0, 160) ||
    `Shop the ${product.name} – premium ${product.category} from 92DEGREE.`;

  return {
    title,
    description,
    keywords: `${product.name}, ${product.category}, 92DEGREE, leather outerwear, streetwear, thermal jacket`,
    authors: [{ name: '92DEGREE' }],
    openGraph: {
      title,
      description,
      url: productUrl,
      siteName: '92DEGREE',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: { canonical: productUrl },
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
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);   // ← await

  if (!product) notFound();

  // Related products — same category, excluding self
  const allInCategory = await getProductsByCategory(product.category);   // ← await
  const relatedProducts = allInCategory
    .filter((p) => p._id !== product._id)
    .slice(0, 3);

  // --- JSON-LD ---
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const imageUrl = product.images?.[0]?.url
    ? product.images[0].url.startsWith('http')
      ? product.images[0].url
      : `${siteUrl}${product.images[0].url}`
    : `${siteUrl}/logo.png`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `${product.name} from 92DEGREE.`,
    image: imageUrl,
    sku: product.slug,
    brand: { '@type': 'Brand', name: '92DEGREE' },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/product/${product.slug}`,
      priceCurrency: product.currency || 'PKR',
      price: product.price ? product.price.toFixed(2) : '0.00',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: '92DEGREE' },
    },
    ...(product.material && { material: product.material }),
    ...(product.colors && { color: product.colors.join(', ') }),
    ...(product.sizes && { size: product.sizes.join(', ') }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FAFAF8] min-h-screen pt-20">
        <ProductClient product={product} relatedProducts={relatedProducts} />
        <WhatsAppCtaBar />
      </main>
    </>
  );
}