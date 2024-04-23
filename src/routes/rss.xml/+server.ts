import type { RequestHandler } from './$types';

import { getPosts } from '$lib/services/postsService.server';

import RSS from 'rss';

export const GET: RequestHandler = async () => {
	const posts = await getPosts();
	const siteUrl = 'https://shindradavid.vercel.app';

	const feed = new RSS({
		title: "Shindra David's RSS Feed",
		description: 'A web developer based in Uganda',
		site_url: siteUrl,
		feed_url: `${siteUrl}/rss.xml`
	});

	posts.forEach((post) =>
		feed.item({
			title: post.title,
			description: post.description,
			url: `${siteUrl}/blog/${post.slug}`,
			date: post.publishedOn
		})
	);

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, s-maxage=${60 * 60}, s-maxage=${60 * 60}`
		}
	});
};
