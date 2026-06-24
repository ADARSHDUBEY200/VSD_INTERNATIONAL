import { SITE_URL } from '@/lib/config';
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';

export const dynamic = 'force-static';

export async function GET() {
  const xml = buildUrlset([
    { loc: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { loc: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { loc: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { loc: `${SITE_URL}/services/`, changeFrequency: 'weekly', priority: 0.9 },
    { loc: `${SITE_URL}/blog/`, changeFrequency: 'weekly', priority: 0.8 },
    { loc: `${SITE_URL}/lp/commercial-kitchen-setup`, changeFrequency: 'monthly', priority: 0.5 },
  ]);

  return new Response(xml, { headers: XML_HEADERS });
}
