import type { Metadata } from 'next';
import DynamicBlogPost from '@/components/blog/DynamicBlogPost';
import { getPublishedBlogDoc, buildBlogMetadata } from '@/lib/blogPresenter';

interface Props {
  params: Promise<{ slug: string }>;
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getPublishedBlogDoc(slug);
  return doc ? buildBlogMetadata(doc) : {};
}

/* ─── Page Component ─────────────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // Every post is authored in /admin/blogs and rendered from the CMS.
  return <DynamicBlogPost slug={slug} />;
}
