import fs from 'fs-extra';

import path from 'path';

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

const MARKDOWN_FILES_PATH = path.join(process.cwd(), '/content/posts');

export const getPosts = async () => {
	try {
		const markdownFiles = (await fs.readdir(MARKDOWN_FILES_PATH)).filter((fileName) => {
			return fileName.endsWith('.md');
		});

		const posts: Post[] = [];

		for (const markdownFile of markdownFiles) {
			const file = await fs.readFile(`${MARKDOWN_FILES_PATH}/${markdownFile}`, 'utf-8');

			const { data } = matter(file);

			posts.push({
				slug: markdownFile.slice(0, -3),
				...(data as Frontmatter)
			});
		}

		return posts;
	} catch (err) {
		throw Error(err);
	}
};
