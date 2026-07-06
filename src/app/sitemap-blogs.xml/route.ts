import { listPublishedBlogs } from '@/lib/blogPresenter';
import { SITE_URL } from '@/lib/config';
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';

// Sourced from the CMS, so it can't be statically generated at build time.
export const dynamic = 'force-dynamic';

export async function GET() {
  const posts = await listPublishedBlogs();
  const xml = buildUrlset(
    posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return new Response(xml, { headers: XML_HEADERS });
}
