import type { PageServerLoad, EntryGenerator } from './$types';

import fs from 'fs-extra';

import path from 'path';

import { getPosts } from '$lib/services/postsService.server';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';

import grayMatter from 'gray-matter';

type Frontmatter = {
	title: string;
	description: string;
	thumbnailUrl: string;
	publishedOn: string;
	tags: string[];
};

const MARKDOWN_FILES_PATH = path.join(process.cwd(), '/content/posts');

export const load = (async ({ params }) => {
	const { slug } = params;

	const markdownFile = await fs.readFile(`${MARKDOWN_FILES_PATH}/${slug}.md`, 'utf-8');

	const { data: frontmatter, content: markdown } = grayMatter(markdownFile);

	const metadata = frontmatter as Frontmatter;

	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeShiki, {
			themes: {
				light: 'vitesse-light',
				dark: 'vitesse-dark'
			}
		})
		.use(rehypeStringify)
		.process(markdown);

	const content = file.toString();

	return { content, metadata };
}) satisfies PageServerLoad;

export const entries = (async () => {
	const posts = await getPosts();
	const slugs = posts.map((post) => ({ slug: post.slug }));
	return slugs;
}) satisfies EntryGenerator;
