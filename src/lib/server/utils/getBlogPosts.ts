import fs from 'fs-extra';

import matter from 'gray-matter';

// import { compareDesc } from 'date-fns';

import { postDirPath } from '$lib/config';

import type { Post, Frontmatter } from '$lib/types';

export default async () => {
	try {
		const markdownFiles = (await fs.readdir(postDirPath)).filter((fileName) => {
			return fileName.endsWith('.md');
		});

		const posts: Post[] = [];

		for (const markdownFile of markdownFiles) {
			const file = await fs.readFile(`${postDirPath}/${markdownFile}`, 'utf-8');

			const { data } = matter(file);

			posts.push({
				slug: markdownFile.slice(0, -3),
				...(data as Frontmatter)
			});
		}

		return posts;
	} catch (err) {
		throw Error('Failed to get blog posts');
	}
};
