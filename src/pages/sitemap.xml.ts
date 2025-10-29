import type { APIContext } from 'astro';

export const GET = async ({ site }: APIContext) => {
  // En una app real, podrías obtener estas URLs de una API o un CMS
  const pages = ["/", "/contact", "/travels/havana", "/travels/matanzas", "travels/cienaga-de-zapata", "/travels/cienfuegos-trinidad"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${new URL(page, site).href}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    `
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
