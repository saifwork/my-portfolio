import { siteConfig } from '@/config/site.config';

const STATIC_PAGES = [
  '/',
  '/about',
  '/projects',
  '/certifications',
  '/contact',
];

function buildUrl(host: string, path: string) {
  const domain = host.replace(/\/$/, '');
  return `https://${domain}${path}`;
}

export async function GET() {
  const host = siteConfig.domain || 'localhost';

  const urls = STATIC_PAGES.map((path) => {
    return `  <url>
    <loc>${buildUrl(host, path)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}