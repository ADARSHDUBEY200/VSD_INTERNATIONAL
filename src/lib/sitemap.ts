export interface SitemapUrl {
  loc: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapRef {
  loc: string;
  lastModified?: string | Date;
}

function toIsoDate(value: string | Date | undefined): string {
  return new Date(value ?? Date.now()).toISOString();
}

export function buildUrlset(urls: SitemapUrl[]): string {
  const items = urls
    .map((url) => {
      const parts = [`<loc>${url.loc}</loc>`, `<lastmod>${toIsoDate(url.lastModified)}</lastmod>`];
      if (url.changeFrequency) parts.push(`<changefreq>${url.changeFrequency}</changefreq>`);
      if (url.priority !== undefined) parts.push(`<priority>${url.priority}</priority>`);
      return `  <url>\n    ${parts.join('\n    ')}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
}

export function buildSitemapIndex(sitemaps: SitemapRef[]): string {
  const items = sitemaps
    .map((s) => `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${toIsoDate(s.lastModified)}</lastmod>\n  </sitemap>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`;
}

export const XML_HEADERS = {
  'Content-Type': 'application/xml',
};
