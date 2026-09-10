 import { createClient } from '@sanity/client';
import { categories, products } from '../data/products.js';   // ← .js extension

const client = createClient({
  projectId: "fmng2m4i",
  dataset:"production",
  apiVersion:   '2024-01-01',
  token: "skopeAhxjLBADFl96a17ViX8nuqU1v2N6XVgEXBzZXLvMyo8LQF9w1TeotDvix4lYLjaVIZA4vqfxGmM22qNpc4mKelw8WaYZo1uCZsYXiw35HWDmma739z5nOlpvlfc0IrYfmy9mOyvgIu7wqHwbQljbWl0hCy4Lq7Hsu0r15y7gmETlxty",
  useCdn: false,
});


async function seed() {
  console.log('🚀 Seeding...\n');

  const categoryMap = {};
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const doc = await client.createOrReplace({
      _id: `category-${cat.slug}`,
      _type: 'category',
      label: cat.label,
      slug: { current: cat.slug },
      order: i,
    });
    categoryMap[cat.slug] = doc._id;
    console.log(`  ✓ ${cat.label}`);
  }

  console.log('');
  for (const p of products) {
    const images = (p.images || []).map((imgPath, i) => ({
      _type: 'imageEntry',
      _key: `img-${i}-${Date.now()}`,
      url: imgPath,
      alt: p.name,
    }));

    await client.createOrReplace({
      _id: `product-${p.slug}`,
      _type: 'product',
      name: p.name,
      slug: { current: p.slug },
      category: { _type: 'reference', _ref: categoryMap[p.category] },
      price: p.price,
      currency: p.currency,
      sizes: p.sizes,
      colors: p.colors,
      shortDescription: p.shortDescription,
      description: p.description,
      material: p.material,
      featured: p.featured || false,
      images,
    });

    console.log(`  ✓ ${p.name}`);
  }

  console.log('\n✅ Done.');
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});