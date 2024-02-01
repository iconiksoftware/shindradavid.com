import { compareDesc } from 'date-fns';

interface ArticleMetadata {
	title: string;
	description: string;
	publishedOn: string;
	tags: string[];
}

interface Article extends ArticleMetadata {
	path: string;
}

export const getAllArticles = async () => {
	try {
		const articles: Article[] = await Promise.all(
			Object.entries(import.meta.glob('/src/routes/blog/**/+page.md')).map(
				async ([path, resolver]) => {
					const { metadata }: any = await resolver();
					const articleMetadata: ArticleMetadata = metadata;
					const articlePath = path.slice(11, -9).replace('/(article)', ''); // remove the ending /+page.md and starting ../..
					return { path: articlePath, ...articleMetadata };
				}
			)
		);

		return articles;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const fetchArticles = async (limit = 6) => {
	try {
		const articles = await getAllArticles().then((articles) => articles.slice(0, limit));
		return articles;
	} catch (error) {
		throw new Error('An error occurred while fetching the articles');
	}
};
