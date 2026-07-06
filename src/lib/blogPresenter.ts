import { cache } from 'react';
import type { Metadata } from 'next';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import { SITE_URL, ORG_ID } from '@/lib/config';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RecommendationItem {
  image: string;
  title: string;
  url: string;
}

export interface BlogDocLike {
  _id: unknown;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  quickAnswer: string;
  keyTakeaways: string[];
  mainImage: string;
  mainImageAlt: string;
  faqs: FaqItem[];
  recommendations: RecommendationItem[];
  metaTitle: string;
  metaDescription: string;
  schemaTitle: string;
  schemaDescription: string;
  author: string;
  status: 'draft' | 'published';
  publishedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

/** Cached per-request so generateMetadata + the page component share one DB query. */
export const getPublishedBlogDoc = cache(async (slug: string): Promise<BlogDocLike | null> => {
  await connectDB();
  const doc = await Blog.findOne({ slug, status: 'published' }).lean();
  return doc as unknown as BlogDocLike | null;
});

/** Lightweight shape used by the blog archive listing and sitemap. */
export interface BlogCard {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  mainImage: string;
  publishedAt: string;
  readTime: string;
}

/** Estimate reading time from the raw HTML body at ~200 words/min. */
function readingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

/** All published posts, newest first — sourced from the CMS (no static data). */
export const listPublishedBlogs = cache(async (): Promise<BlogCard[]> => {
  await connectDB();
  const docs = await Blog.find({ status: 'published' })
    .sort({ publishedAt: -1, createdAt: -1 })
    .lean();

  return (docs as unknown as BlogDocLike[]).map((d) => ({
    slug: d.slug,
    title: d.title,
    excerpt: d.excerpt,
    category: d.category,
    author: d.author,
    mainImage: d.mainImage || '',
    publishedAt: (d.publishedAt ? new Date(d.publishedAt) : new Date(d.createdAt)).toISOString(),
    readTime: readingTime(d.content),
  }));
});

export function blogCanonicalPath(slug: string): string {
  return `/blog/${slug}`;
}

function absoluteImage(src: string): string {
  return src.startsWith('http') ? src : `${SITE_URL}${src}`;
}

export function buildBlogMetadata(doc: BlogDocLike): Metadata {
  const canonicalUrl = `${SITE_URL}${blogCanonicalPath(doc.slug)}`;
  const title = doc.metaTitle || doc.title;
  const description = doc.metaDescription || doc.excerpt;
  const image = doc.mainImage ? absoluteImage(doc.mainImage) : undefined;
  const imageAlt = doc.mainImageAlt || title;
  const publishedTime = doc.publishedAt ? new Date(doc.publishedAt).toISOString() : undefined;
  const modifiedTime = new Date(doc.updatedAt).toISOString();

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title,
      description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: imageAlt }] : undefined,
      publishedTime,
      modifiedTime,
      authors: [doc.author],
      section: doc.category,
    },
  };
}

export function buildBlogJsonLd(doc: BlogDocLike): Record<string, unknown> {
  const canonicalUrl = `${SITE_URL}${blogCanonicalPath(doc.slug)}`;
  const headline = doc.schemaTitle || doc.title;
  const description = doc.schemaDescription || doc.excerpt;
  const image = doc.mainImage ? absoluteImage(doc.mainImage) : undefined;

  const articleNode: Record<string, unknown> = {
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline,
    name: headline,
    description,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: doc.publishedAt ? new Date(doc.publishedAt).toISOString() : new Date(doc.createdAt).toISOString(),
    dateModified: new Date(doc.updatedAt).toISOString(),
    author: { '@type': 'Person', name: doc.author },
    publisher: { '@id': ORG_ID },
    articleSection: doc.category,
    inLanguage: 'en-IN',
    ...(image ? { image: { '@type': 'ImageObject', url: image } } : {}),
  };

  const validFaqs = (doc.faqs ?? []).filter((f) => f.question?.trim() && f.answer?.trim());
  const faqNode =
    validFaqs.length > 0
      ? {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faqpage`,
          mainEntity: validFaqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      articleNode,
      { '@type': 'Organization', '@id': ORG_ID, name: 'VSD International', url: SITE_URL, logo: `${SITE_URL}/logo.png` },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: doc.title, item: canonicalUrl },
        ],
      },
      ...(faqNode ? [faqNode] : []),
    ],
  };
}
