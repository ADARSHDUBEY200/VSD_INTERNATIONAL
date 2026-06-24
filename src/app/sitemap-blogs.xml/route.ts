import { BLOG_POSTS } from '@/lib/blog';
import { SITE_URL } from '@/lib/config';
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';

export const dynamic = 'force-static';

export async function GET() {
  const xml = buildUrlset(
    BLOG_POSTS.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: post.dateModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return new Response(xml, { headers: XML_HEADERS });
}
