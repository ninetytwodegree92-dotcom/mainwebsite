// products.js
// Central product data source for the store.
// Import this into Shop page, Homepage sections, and Product Detail page.

// ---- Store WhatsApp number (update this once, used everywhere) ----
export const STORE_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // replace with real number, no + or spaces

 
// ---- WhatsApp link generator ----
export function getWhatsAppLink(product, selectedSize = null) {
  const message = `Hi, I'm interested in the ${product.name}${
    selectedSize ? ` (Size: ${selectedSize})` : ""
  }. Is it available?`;
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ---- Categories (nav dropdown + shop filters) ----
export const categories = [
  { slug: "puffer-jackets", label: "Puffer Jackets" },
  { slug: "leather-jackets", label: "Leather Jackets" },
  { slug: "polo", label: "Polo Shirts" },
  { slug: "hoodies", label: "Hoodies" },
  { slug: "tracksuits", label: "Tracksuits" },
];

// ---- Helper to build the 5 standard image paths for a product ----
function buildImages(category, slug, ext = "webp") {
  const shots = ["front", "back", "angle-3-4", "closeup", "flatlay"];
    
  return shots.map((shot) => `/products/${category}/${slug}/${slug}-${shot}.${ext}`);
}

// ==========================================================
// PRODUCTS
// ==========================================================
export const products = [
  // ---------------- PUFFER JACKETS ----------------
  {
    id: 1,
    slug: "onyx-leather-puffer",
    name: "Onyx Leather Puffer",
    category: "puffer-jackets",
    price: 24999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "Full-grain leather puffer with a matte black finish.",
    description:
      "Crafted from full-grain leather with high-density thermal insulation, the Onyx Puffer pairs a structured popped collar with quilted panel detailing for a clean, matte silhouette. Built for cold weather without sacrificing shape.",
    material: "Full-grain leather, quilted thermal lining",
    images: buildImages("puffer-jackets", "onyx-leather-puffer"),
    featured: true,
  },
  {
    id: 2,
    slug: "cognac-leather-puffer",
    name: "Cognac Leather Puffer",
    category: "puffer-jackets",
    price: 27999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cognac"],
    shortDescription: "Rich cognac leather puffer — the signature piece.",
    description:
      "A statement piece in rich cognac leather, encasing high-density thermal insulation beneath quilted paneling. Warm tone, structured collar, and premium hardware make this the flagship of the collection.",
    material: "Full-grain leather, quilted thermal lining",
    images: buildImages("puffer-jackets", "cognac-leather-puffer"),
    featured: true,
  },
  {
    id: 3,
    slug: "high-collar-thermal-puffer",
    name: "High-Collar Thermal Puffer",
    category: "puffer-jackets",
    price: 26499,
    currency: "PKR",
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "Engineered high collar for extreme cold protection.",
    description:
      "Built for the harshest cold, this puffer features an engineered high collar that shields the neck and lower face, reinforced stitching, and premium hardware throughout — function-first without losing the brand's minimal silhouette.",
    material: "Full-grain leather, quilted thermal lining, reinforced stitching",
    images: buildImages("puffer-jackets", "high-collar-thermal-puffer"),
    featured: true,
  },
  {
    id: 4,
    slug: "slate-grey-leather-puffer",
    name: "Slate Grey Leather Puffer",
    category: "puffer-jackets",
    price: 25499,
    currency: "PKR",
    sizes: ["S", "M", "L"],
    colors: ["Grey"],
    shortDescription: "Understated slate grey puffer with minimal hardware.",
    description:
      "An understated take on the puffer silhouette in slate grey leather. Quilted panels and minimal hardware keep the look clean and versatile — easy to wear across seasons and outfits.",
    material: "Full-grain leather, quilted thermal lining",
    images: buildImages("puffer-jackets", "slate-grey-leather-puffer"),
    featured: false,
  },
  {
    id: 5,
    slug: "classic-black-moto-puffer",
    name: "Classic Black Moto Puffer",
    category: "puffer-jackets",
    price: 24499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "Moto-inspired asymmetric zip on a quilted puffer body.",
    description:
      "Moto-inspired detailing meets puffer functionality — an asymmetric front zip cuts across a quilted leather body for an everyday statement piece that doesn't compromise on warmth.",
    material: "Full-grain leather, quilted thermal lining",
    images: buildImages("puffer-jackets", "classic-black-moto-puffer"),
    featured: false,
  },
  {
    id: 6,
    slug: "storm-blue-leather-puffer",
    name: "Storm Blue Leather Puffer",
    category: "puffer-jackets",
    price: 26999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Storm Blue"],
    shortDescription: "Deep storm blue puffer with a structured collar.",
    description:
      "A deep storm blue leather puffer with quilted panels and a structured collar — a distinct colorway for anyone looking to stand apart from the standard black and cognac options.",
    material: "Full-grain leather, quilted thermal lining",
    images: buildImages("puffer-jackets", "storm-blue-leather-puffer"),
    featured: false,
  },

  // ---------------- LEATHER JACKETS (non-puffer) ----------------
  {
    id: 7,
    slug: "leather-bomber",
    name: "Leather Bomber",
    category: "leather-jackets",
    price: 23999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    shortDescription: "Tailored bomber with ribbed collar and cuffs.",
    description:
      "Tailored with a low-profile ribbed collar and cuffs, this bomber is finished in matte full-grain leather for a clean, everyday silhouette that layers easily.",
    material: "Full-grain leather, ribbed knit trims",
    images: buildImages("leather-jackets", "leather-bomber"),
    featured: true,
  },
  {
    id: 8,
    slug: "classic-biker-jacket",
    name: "Classic Biker Jacket",
    category: "leather-jackets",
    price: 25999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "Asymmetric zip biker jacket in smooth leather.",
    description:
      "A wardrobe staple — asymmetric front zip, structured collar, and smooth full-grain leather. No quilting, no excess — just a clean biker silhouette built to last.",
    material: "Full-grain smooth leather",
    images: buildImages("leather-jackets", "classic-biker-jacket"),
    featured: false,
  },
  {
    id: 9,
    slug: "cognac-leather-jacket",
    name: "Cognac Leather Jacket",
    category: "leather-jackets",
    price: 25499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cognac"],
    shortDescription: "Minimal cognac leather jacket, clean silhouette.",
    description:
      "A minimal, clean-cut jacket in warm cognac leather. Structured collar and a front zip/button placket keep the design understated — built to be worn often.",
    material: "Full-grain smooth leather",
    images: buildImages("leather-jackets", "cognac-leather-jacket"),
    featured: false,
  },
  {
    id: 10,
    slug: "low-angle-statement-jacket",
    name: "Statement Leather Jacket",
    category: "leather-jackets",
    price: 27499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "The flagship silhouette — leather, redefined.",
    description:
      "Our flagship leather jacket — structured popped collar, open-front styling, and a rich leather sheen designed to be worn with confidence. This is the piece the collection is built around.",
    material: "Full-grain smooth leather",
    images: buildImages("leather-jackets", "low-angle-statement-jacket"),
    featured: true,
  },
  {
    id: 11,
    slug: "charcoal-leather-jacket",
    name: "Charcoal Leather Jacket",
    category: "leather-jackets",
    price: 24999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal"],
    shortDescription: "Clean charcoal leather jacket for everyday wear.",
    description:
      "A versatile charcoal leather jacket with a clean, structured silhouette — designed to pair easily with almost anything in a modern wardrobe.",
    material: "Full-grain smooth leather",
    images: buildImages("leather-jackets", "charcoal-leather-jacket"),
    featured: false,
  },
  {
    id: 12,
    slug: "tan-leather-racer",
    name: "Tan Leather Racer",
    category: "leather-jackets",
    price: 24499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Tan"],
    shortDescription: "Minimal tan racer jacket, clean front zip.",
    description:
      "A minimal racer-style jacket in warm tan leather. Clean front zip and a low-profile collar make this the lightest, most versatile piece in the leather jacket line.",
    material: "Full-grain smooth leather",
    images: buildImages("leather-jackets", "tan-leather-racer"),
    featured: false,
  },

  // ---------------- POLO SHIRTS ----------------
  {
    id: 13,
    slug: "polo-navy",
    name: "Classic Polo — Navy",
    category: "polo",
    price: 3999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy"],
    shortDescription: "Heavyweight pique cotton polo, tailored fit.",
    description:
      "A heavyweight pique cotton polo in navy, cut for a tailored fit with a ribbed collar and two-button placket. A clean staple for everyday wear.",
    material: "100% heavyweight pique cotton",
    images: buildImages("polo", "polo-navy"),
    featured: false,
  },
  {
    id: 14,
    slug: "polo-off-white",
    name: "Classic Polo — Off-White",
    category: "polo",
    price: 3999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off-White"],
    shortDescription: "Clean off-white polo with tonal detailing.",
    description:
      "A clean off-white polo with tonal stitching and a ribbed collar — a versatile piece that pairs easily with the rest of the collection.",
    material: "100% heavyweight pique cotton",
    images: buildImages("polo", "polo-off-white"),
    featured: false,
  },
  {
    id: 15,
    slug: "polo-olive",
    name: "Classic Polo — Olive",
    category: "polo",
    price: 3999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive"],
    shortDescription: "Earthy olive polo, structured collar.",
    description:
      "An earthy olive tone polo with a structured collar and tailored fit — a grounded, versatile addition to the lineup.",
    material: "100% heavyweight pique cotton",
    images: buildImages("polo", "polo-olive"),
    featured: false,
  },

  // ---------------- HOODIES ----------------
  {
    id: 16,
    slug: "hoodie-black",
    name: "Urban Fleece Hoodie — Black",
    category: "hoodies",
    price: 6499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "Heavyweight fleece hoodie, boxy fit.",
    description:
      "A heavyweight fleece hoodie in black with a boxy, oversized fit and technical streetwear detailing. Built for daily wear, layers cleanly under the jacket collection.",
    material: "Heavyweight cotton-fleece blend",
    images: buildImages("hoodies", "hoodie-black"),
    featured: false,
  },
  {
    id: 17,
    slug: "hoodie-grey",
    name: "Urban Fleece Hoodie — Grey",
    category: "hoodies",
    price: 6499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Heather Grey"],
    shortDescription: "Heavyweight fleece hoodie, dropped shoulder.",
    description:
      "A heather grey heavyweight fleece hoodie with a dropped shoulder cut — relaxed, comfortable, and easy to style.",
    material: "Heavyweight cotton-fleece blend",
    images: buildImages("hoodies", "hoodie-grey"),
    featured: false,
  },
  {
    id: 18,
    slug: "hoodie-cream",
    name: "Urban Fleece Hoodie — Cream",
    category: "hoodies",
    price: 6499,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream"],
    shortDescription: "Cream fleece hoodie, minimal branding.",
    description:
      "A cream heavyweight fleece hoodie with minimal branding and a front utility pocket — a clean, neutral staple.",
    material: "Heavyweight cotton-fleece blend",
    images: buildImages("hoodies", "hoodie-cream"),
    featured: false,
  },

  // ---------------- TRACKSUITS ----------------
  {
    id: 19,
    slug: "tracksuit-black",
    name: "Urban Tracksuit — Black",
    category: "tracksuits",
    price: 9999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    shortDescription: "Technical streetwear tracksuit set.",
    description:
      "A technical streetwear tracksuit set in black, tailored for utility and movement without losing the brand's clean silhouette.",
    material: "Technical fleece blend",
    images: buildImages("tracksuits", "tracksuit-black"),
    featured: false,
  },
  {
    id: 20,
    slug: "tracksuit-charcoal",
    name: "Urban Tracksuit — Charcoal",
    category: "tracksuits",
    price: 9999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal"],
    shortDescription: "Heavyweight fleece tracksuit, tapered fit.",
    description:
      "A charcoal tracksuit set in heavyweight fleece with a tapered fit — built for everyday comfort with a modern silhouette.",
    material: "Technical fleece blend",
    images: buildImages("tracksuits", "tracksuit-charcoal"),
    featured: false,
  },
  {
    id: 21,
    slug: "tracksuit-stone",
    name: "Urban Tracksuit — Stone",
    category: "tracksuits",
    price: 9999,
    currency: "PKR",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Stone"],
    shortDescription: "Stone-tone tracksuit, minimal branding.",
    description:
      "A stone-tone tracksuit set with minimal branding, built for everyday comfort with a soft, neutral colorway.",
    material: "Technical fleece blend",
    images: buildImages("tracksuits", "tracksuit-stone"),
    featured: false,
  },
];

// ==========================================================
// HELPER GETTERS
// ==========================================================

export function getAllProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getAllProductSlugs() {
  return products.map((p) => ({ params: { slug: p.slug } }));
}