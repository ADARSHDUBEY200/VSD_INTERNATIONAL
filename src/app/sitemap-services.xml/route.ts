import { SITE_URL } from '@/lib/config';
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';

const SERVICE_SLUGS = [
  'bakery-equipment',
  'cloud-kitchen-setup',
  'hospital-kitchen-equipment',
  'hotel-kitchen-equipment',
  'restaurant-kitchen-setup',
];

export const dynamic = 'force-static';

export async function GET() {
  const xml = buildUrlset(
    SERVICE_SLUGS.map((slug) => ({
      loc: `${SITE_URL}/services/${slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return new Response(xml, { headers: XML_HEADERS });
}
