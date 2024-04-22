import { read } from '$app/server';

import matter from 'gray-matter';

// import { compareDesc } from 'date-fns';

type Frontmatter = {
	title: string;
	description: string;
	thumbnailUrl: string;
	publishedOn: string;
	tags: string[];
};

interface Post extends Frontmatter {
	slug: string;
}

export const getBlogPosts = async () => {
	try {
		const posts: Post[] = await Promise.all(
			Object.entries(import.meta.glob('/src/routes/blog/**/+page.md')).map(async ([path]) => {
				const asset = read(path);
				const file = await asset.text();
				const { data } = matter(file);

				return {
					slug: path.slice(17, -9),
					...(data as Frontmatter)
				};
			})
		);

		return posts;
	} catch (err) {
		throw Error();
	}
};
