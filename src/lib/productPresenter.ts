import { SITE_URL, ORG_ID } from '@/lib/config';
import { categoryLabel } from '@/lib/categories';
import type { Product } from '@/types/product';

interface PopulatedRelated {
  _id: unknown;
  fullName: string;
  slug: string;
  category: string;
  mainImage: string;
  tagline: string;
}

export interface ProductDocLike {
  _id: unknown;
  fullName: string;
  modelNumber: string;
  slug: string;
  category: string;
  brand: string;
  tagline: string;
  mainImage: string;
  childImages: string[];
  keyFacts: { label: string; value: string }[];
  priceContext: string;
  priceMin?: number;
  priceMax?: number;
  leadTime: string;
  whatsappMessage: string;
  overview: string;
  description: string[];
  specs: { name: string; value: string }[];
  features: { title: string; description: string }[];
  bestFor: { industry: string; description: string }[];
  technical: { label: string; value: string }[];
  compliance: string[];
  whyVSD: { point: string; detail: string }[];
  comparison: { attribute: string; thisModel: string; alternative1: string; alternative2: string }[];
  comparisonModels: { name: string; slug: string }[];
  projectProof: { client: string; city: string; scope: string; year: string }[];
  reviews: { name: string; company: string; rating: number; text: string; date: string }[];
  faq: { question: string; answer: string }[];
  relatedProducts: PopulatedRelated[];
  metaTitle: string;
  metaDescription: string;
  schemaTitle: string;
  schemaDescription: string;
}

export function canonicalProductPath(doc: Pick<ProductDocLike, 'category' | 'slug'>): string {
  return `/products/${doc.category}/${doc.slug}`;
}

/** Builds the exact `Product` shape the page-1.tsx render tree expects, sourced from a DB document. */
export function toProductViewModel(doc: ProductDocLike): Product {
  const images = [doc.mainImage, ...doc.childImages].filter(Boolean);
  const reviewCount = doc.reviews.length;
  const aggregateRating = reviewCount
    ? Math.round((doc.reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount) * 10) / 10
    : 0;
  const canonicalSlug = canonicalProductPath(doc);

  return {
    id: String(doc._id),
    slug: doc.slug,
    category: doc.category,
    brand: doc.brand,
    model: doc.modelNumber,
    fullName: doc.fullName,
    tagline: doc.tagline,
    images,
    keyFacts: doc.keyFacts,
    priceContext: doc.priceContext,
    leadTime: doc.leadTime,
    overview: doc.overview,
    description: doc.description,
    specs: doc.specs,
    features: doc.features,
    bestFor: doc.bestFor,
    technical: doc.technical,
    compliance: doc.compliance,
    whyVSD: doc.whyVSD,
    comparison: doc.comparison,
    comparisonModels: doc.comparisonModels,
    projectProof: doc.projectProof,
    reviews: doc.reviews,
    aggregateRating,
    reviewCount,
    faq: doc.faq,
    relatedProducts: doc.relatedProducts.map(r => ({
      name: r.fullName,
      slug: r.slug,
      category: r.category,
      image: r.mainImage,
      tagline: r.tagline,
    })),
    seo: {
      title: doc.metaTitle || doc.fullName,
      metaDescription: doc.metaDescription || doc.tagline,
      canonicalSlug,
    },
    schema: buildProductSchema(doc, images, canonicalSlug, aggregateRating, reviewCount),
    whatsappMessage:
      doc.whatsappMessage ||
      `Hi VSD International, I'm interested in the ${doc.fullName}. Please share pricing, availability and installation details. My project: `,
    updatedAt: new Date().toISOString(),
  };
}

function buildProductSchema(
  doc: ProductDocLike,
  images: string[],
  canonicalSlug: string,
  aggregateRating: number,
  reviewCount: number
): Record<string, unknown> {
  const url = `${SITE_URL}${canonicalSlug}`;
  const name = doc.schemaTitle || doc.fullName;
  const description = doc.schemaDescription || doc.overview || doc.tagline;

  const productNode: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${url}#product`,
    name,
    description,
    category: categoryLabel(doc.category),
    image: images.map(img => (img.startsWith('http') ? img : `${SITE_URL}${img}`)),
    url,
  };

  if (doc.brand) productNode.brand = { '@type': 'Brand', name: doc.brand };
  if (doc.modelNumber) productNode.mpn = doc.modelNumber;

  if (doc.specs.length) {
    productNode.additionalProperty = doc.specs.map(s => ({
      '@type': 'PropertyValue',
      name: s.name,
      value: s.value,
    }));
  }

  if (reviewCount > 0) {
    productNode.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.toFixed(1),
      reviewCount: String(reviewCount),
      bestRating: '5',
      worstRating: '1',
    };
    productNode.review = doc.reviews.slice(0, 10).map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
      reviewBody: r.text,
      ...(r.date ? { datePublished: r.date } : {}),
    }));
  }

  if (doc.priceMin != null || doc.priceMax != null) {
    const hasRange = doc.priceMin != null && doc.priceMax != null && doc.priceMin !== doc.priceMax;
    productNode.offers = {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url,
      seller: { '@id': ORG_ID },
      ...(hasRange
        ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: doc.priceMin, maxPrice: doc.priceMax, priceCurrency: 'INR' } }
        : { price: doc.priceMin ?? doc.priceMax }),
    };
  }

  const graph: Record<string, unknown>[] = [
    productNode,
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
        { '@type': 'ListItem', position: 3, name: categoryLabel(doc.category), item: `${SITE_URL}/products/${doc.category}` },
        { '@type': 'ListItem', position: 4, name: doc.fullName, item: url },
      ],
    },
    { '@type': 'Organization', '@id': ORG_ID, name: 'VSD International', url: SITE_URL, logo: `${SITE_URL}/logo.png` },
  ];

  if (doc.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: doc.faq.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
