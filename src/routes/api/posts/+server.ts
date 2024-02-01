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
			Object.entries(import.meta.glob('/src/routes/blog/**/+page.md')).map(
				async ([path, resolver]) => {
					const resolvedData = await resolver();
					console.log(resolvedData);

					if (typeof resolvedData === 'object' && resolvedData != null) {
						if ('metatdata' in resolvedData) {
							const metadata = resolvedData.metadata;
							const articleMetadata: ArticleMetadata = metadata;
							const articlePath = path.slice(11, -9).replace('/(article)', ''); // remove the ending /+page.md and starting ../..
							return { path: articlePath, ...articleMetadata };
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
