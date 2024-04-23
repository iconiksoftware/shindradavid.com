import type { PageServerLoad, EntryGenerator } from './$types';

import fs from 'fs-extra';

import { getBlogPosts } from '$lib/server/utils';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import { rehypeToc } from '$lib/markdown/plugins';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import grayMatter from 'gray-matter';

import { postDirPath } from '$lib/config';

type Frontmatter = {
	title: string;
	description: string;
	thumbnailUrl: string;
	publishedOn: string;
	tags: string[];
};

export const load = (async ({ params }) => {
	const { slug } = params;

	const markdownFile = await fs.readFile(`${postDirPath}/${slug}.md`, 'utf-8');

	const { data: frontmatter, content: markdown } = grayMatter(markdownFile);

	const metadata = frontmatter as Frontmatter;

	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeShiki, {
			theme: 'vitesse-dark'
		})
		.use(rehypeStringify)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, { behavior: 'append' })
		.use(rehypeToc)
		.process(markdown);

	const content = file.toString();

	return { content, metadata };
}) satisfies PageServerLoad;

export const entries = (async () => {
	const posts = await getBlogPosts();
	const slugs = posts.map((post) => ({ slug: post.slug }));
	return slugs;
}) satisfies EntryGenerator;
