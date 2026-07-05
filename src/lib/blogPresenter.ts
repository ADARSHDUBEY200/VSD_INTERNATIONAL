import { cache } from 'react';
import type { Metadata } from 'next';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import { SITE_URL, ORG_ID } from '@/lib/config';

export interface BlogDocLike {
  _id: unknown;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  mainImage: string;
  childImages: string[];
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
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
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
    ],
  };
}
