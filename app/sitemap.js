import { products, categories } from '@/data/products';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://92degree.com';

  // 1. Static Core Pages
  const staticPages = [
    '',
    '/shop',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Category Pages (/category/[slug])
  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Dynamic Product Detail Pages (/product/[slug])
  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}