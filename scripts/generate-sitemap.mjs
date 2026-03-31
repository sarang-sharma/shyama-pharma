import { writeFileSync } from 'fs';

const BASE_URL = 'https://shyamapharma.com';

const pages = ['', 'about/', 'brands/', 'services/', 'contact/'];
const locales = ['en/', 'hi/', 'mai/'];

const urls = [];

for (const locale of locales) {
  for (const page of pages) {
    const url = `${BASE_URL}/${locale}${page}`;
    const lastmod = new Date().toISOString().split('T')[0];
    const priority = page === '' ? '1.0' : '0.8';
    const changefreq = 'monthly';

    urls.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${locales.map((l) => {
      const lang = l.replace('/', '');
      return `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${l}${page}" />`;
    }).join('')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/${page}" />
  </url>`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

writeFileSync('out/sitemap.xml', sitemap);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
