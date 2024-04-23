import type { RequestHandler } from './$types';

import { getBlogPosts } from '$lib/server/utils';

import { siteUrl } from '$lib/config';

export const GET: RequestHandler = async () => {
	const posts = (await getBlogPosts()).map((post) => `/blog/${post.slug}`);

	const pages = ['/', '/about-me', '/my-work', '/blog', ...posts];
	const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
				.map((page) => {
					return `
            <url>
              <loc>${siteUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
				})
				.join('')}
    </urlset>
  `.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, max-age=${60 * 60 * 24}, s-maxage=${60 * 60 * 24}`
		}
	});
};
