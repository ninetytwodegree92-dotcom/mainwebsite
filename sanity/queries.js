import { defineQuery } from 'next-sanity';

const imageProjection = /* groq */ `
  "images": images[]{
    "url": coalesce(upload.asset->url, url),
    "alt": alt
  }
`;

export const ALL_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    "category": category->slug.current,
    price,
    currency,
    sizes,
    colors,
    shortDescription,
    description,
    material,
    featured,
    ${imageProjection}
  }
`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    "category": category->slug.current,
    price,
    currency,
    sizes,
    colors,
    shortDescription,
    description,
    material,
    featured,
    ${imageProjection}
  }
`);

export const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    "category": category->slug.current,
    price,
    currency,
    sizes,
    colors,
    shortDescription,
    description,
    material,
    featured,
    ${imageProjection}
  }
`);

export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(order asc) {
    _id,
    label,
    "slug": slug.current,
    tagline,
    "banner": {
      "url": coalesce(banner.upload.asset->url, banner.url),
      "alt": banner.alt
    }
  }
`);

export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    label,
    "slug": slug.current,
    tagline,
    "banner": {
      "url": coalesce(banner.upload.asset->url, banner.url),
      "alt": banner.alt
    }
  }
`);

// Also add banner to your count query if you use it in the shop page
export const CATEGORIES_WITH_COUNT_QUERY = defineQuery(`
  *[_type == "category"] | order(order asc) {
    _id,
    label,
    "slug": slug.current,
    tagline,
    "banner": {
      "url": coalesce(banner.upload.asset->url, banner.url),
      "alt": banner.alt
    },
    "count": count(*[_type == "product" && references(^._id)])
  }
`);

export const ALL_PRODUCT_SLUGS_QUERY = defineQuery(`
  *[_type == "product"]{ "slug": slug.current }
`);


// Reusable product projection
const productProjection = /* groq */ `
  _id,
  name,
  "slug": slug.current,
  "category": category->slug.current,
  price,
  currency,
  sizes,
  colors,
  shortDescription,
  description,
  material,
  featured,
  "images": images[]{
    "url": coalesce(upload.asset->url, url),
    "alt": alt
  }
`;

// Reusable filter clause
const productFilter = /* groq */ `
  _type == "product"
  && ($category == "all" || category->slug.current == $category)
  && ($search == "" || name match $search || description match $search || count(colors[lower(@) match $search]) > 0)
`;

// Paginated products — server-side slice
export const PRODUCTS_PAGINATED_QUERY = defineQuery(`
  *[${productFilter}] | order(_createdAt desc) [$start...$end] {
    ${productProjection}
  }
`);

// Total count for the active filter
export const PRODUCTS_COUNT_QUERY = defineQuery(`
  count(*[${productFilter}])
`);


// Homepage singleton
export const HOMEPAGE_QUERY = defineQuery(`
  *[_type == "homepage"][0] {
    "heroSlides": heroSlides[]{
      _key,
      tag,
      title,
      subtitle,
      align,
      "image": {
        "url": coalesce(image.upload.asset->url, image.url),
        "alt": image.alt
      }
    },
    "featuredSection": {
      label,
      title,
      subtitle,
      "products": featuredSection.featuredProducts[]-> {
        _id,
        name,
        "slug": slug.current,
        "category": category->slug.current,
        price,
        currency,
        sizes,
        colors,
        shortDescription,
        description,
        material,
        featured,
        "images": images[]{
          "url": coalesce(upload.asset->url, url),
          "alt": alt
        }
      }
    }
  }
`);

// Fallback: featured products (when homepage has none picked)
export const FEATURED_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    "category": category->slug.current,
    price,
    currency,
    sizes,
    colors,
    shortDescription,
    description,
    material,
    featured,
    "images": images[]{
      "url": coalesce(upload.asset->url, url),
      "alt": alt
    }
  }
`);
 


export const SEARCH_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product"
    && (
      name match $query
      || description match $query
      || count(colors[lower(@) match $query]) > 0
    )
  ] | order(_createdAt desc) [0...5] {
    _id,
    name,
    "slug": slug.current,
    "category": category->slug.current,
    "images": images[]{
      "url": coalesce(upload.asset->url, url),
      "alt": alt
    }
  }
`);