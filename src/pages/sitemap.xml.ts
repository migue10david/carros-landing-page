import type { APIContext } from 'astro';

export const GET = async ({ site }: APIContext) => {
  // En una app real, podrías obtener estas URLs de una API o un CMS.
  // Aquí listamos explícitamente las páginas públicas y las versiones por idioma (en/ru).
  const pages = [
    "/",
    "/en/",
    "/ru/",
    "/en/contact",
    "/ru/contact",

    // Travels - English
    "/en/travels/havana/",
    "/en/travels/havana/ca%C3%B1onazo/",
    "/en/travels/havana/hemingway/",
    "/en/travels/havana/sunset/",
    "/en/travels/cienfuegos-trinidad/",
    "/en/travels/cienfuegos-trinidad/flamingos/",
    "/en/travels/cienfuegos-trinidad/nicho/",

    // Travels - Russian
    "/ru/travels/havana/",
    "/ru/travels/havana/ca%C3%B1onazo/",
    "/ru/travels/havana/hemingway/",
    "/ru/travels/havana/sunset/",
    "/ru/travels/cienfuegos-trinidad/",
    "/ru/travels/cienfuegos-trinidad/flamingos/",
    "/ru/travels/cienfuegos-trinidad/nicho/",
  ];

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
