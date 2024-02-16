import type { RequestHandler } from './$types';

import { error, json } from '@sveltejs/kit';

interface ArticleMetadata {
	title: string;
	description: string;
	publishedOn: string;
	tags: string[];
}

interface Article extends ArticleMetadata {
	path: string;
}

export const GET: RequestHandler = async () => {
	try {
		const articles: Article[] = await Promise.all(
			Object.entries(import.meta.glob('/src/lib/content/posts/**/post.md')).map(
				async ([path, resolver]) => {
					const resolvedData = await resolver();
					if (typeof resolvedData === 'object' && resolvedData != null) {
						if ('metadata' in resolvedData) {
							const metadata = resolvedData.metadata;
							const articleMetadata: ArticleMetadata = metadata as any;
							const slug = path.slice(23, -8);
							return { slug, ...articleMetadata };
						}
					}
				}
			)
		);

		return json(articles);
	} catch (err) {
		error(500, 'Internal server error');
	}
};
