import { notFound } from 'next/navigation';
import WhatsAppCtaBar from '@/components/WhatsAppCtaBar';
import ProductClient from '@/components/products/ProductClient';
import {
  getProductBySlug,
  getProductsByCategory,
  getAllProductSlugs,
} from '@/data/products';

// --- Generate static params for all products ---
export async function generateStaticParams() {
  return getAllProductSlugs(); // returns [{ slug: 'product-slug' }, ...]
}

// --- Dynamic SEO Metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | 92DEGREE',
      robots: { index: false },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const productUrl = `${siteUrl}/product/${product.slug}`;
  const imageUrl = product.images?.[0]
    ? `${siteUrl}${product.images[0]}`
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
      type: 'product',
      price: product.price ? `${product.price}` : undefined,
      priceCurrency: product.currency || 'PKR',
      availability: 'https://schema.org/InStock',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: productUrl,
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
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // --- JSON-LD Structured Data (Product) ---
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';
  const imageUrl = product.images?.[0]
    ? `${siteUrl}${product.images[0]}`
    : `${siteUrl}/logo.png`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `${product.name} from 92DEGREE.`,
    image: imageUrl,
    sku: product.slug,
    brand: {
      '@type': 'Brand',
      name: '92DEGREE',
    },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/product/${product.slug}`,
      priceCurrency: product.currency || 'PKR',
      price: product.price ? product.price.toFixed(2) : '0.00',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: '92DEGREE',
      },
    },
    ...(product.material && { material: product.material }),
    ...(product.colors && { color: product.colors.join(', ') }),
    ...(product.sizes && { size: product.sizes.join(', ') }),
  };

  return (
    <>
      {/* Inject JSON-LD */}
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