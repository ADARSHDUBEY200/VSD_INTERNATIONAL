import { SITE_URL } from '@/lib/config';
import { buildSitemapIndex, XML_HEADERS } from '@/lib/sitemap';

export const dynamic = 'force-static';

export async function GET() {
  const xml = buildSitemapIndex([
    { loc: `${SITE_URL}/sitemap-pages.xml` },
    { loc: `${SITE_URL}/sitemap-services.xml` },
    { loc: `${SITE_URL}/sitemap-blogs.xml` },
  ]);

  return new Response(xml, { headers: XML_HEADERS });
}
