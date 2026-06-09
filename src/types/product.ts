export interface KeyFact {
  label: string;
  value: string;
}

export interface Spec {
  name: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface BestForItem {
  industry: string;
  description: string;
}

export interface TechnicalDetail {
  label: string;
  value: string;
}

export interface WhyVSDPoint {
  point: string;
  detail: string;
}

export interface ComparisonRow {
  attribute: string;
  thisModel: string;
  alternative1: string;
  alternative2: string;
}

export interface ComparisonModel {
  name: string;
  slug: string;
}

export interface ProjectProof {
  client: string;
  city: string;
  scope: string;
  year: string;
}

export interface ProductReview {
  name: string;
  company: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedProduct {
  name: string;
  slug: string;
  category: string;
  image: string;
  tagline: string;
}

export interface ProductSEO {
  title: string;
  metaDescription: string;
  canonicalSlug: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  brand: string;
  model: string;
  fullName: string;
  tagline: string;
  images: string[];
  keyFacts: KeyFact[];
  priceContext: string;
  leadTime: string;
  overview: string;
  specs: Spec[];
  features: Feature[];
  bestFor: BestForItem[];
  technical: TechnicalDetail[];
  compliance: string[];
  whyVSD: WhyVSDPoint[];
  comparison: ComparisonRow[];
  comparisonModels: ComparisonModel[];
  projectProof: ProjectProof[];
  reviews: ProductReview[];
  aggregateRating: number;
  reviewCount: number;
  faq: FAQ[];
  relatedProducts: RelatedProduct[];
  seo: ProductSEO;
  schema: Record<string, unknown>;
  whatsappMessage: string;
  updatedAt: string;
}
