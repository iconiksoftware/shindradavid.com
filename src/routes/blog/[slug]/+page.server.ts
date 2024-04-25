import type { PageServerLoad, EntryGenerator } from './$types';

import fs from 'fs-extra';

import { parseMarkdown } from '$lib/server/markdown/utils';

import { getBlogPosts } from '$lib/server/markdown/utils';

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
	const markdown = await fs.readFile(`${postDirPath}/${slug}.md`, 'utf-8');
	const { html, frontmatter } = await parseMarkdown<Frontmatter>(markdown);

	return { html, frontmatter };
}) satisfies PageServerLoad;

export const entries = (async () => {
	const posts = await getBlogPosts();
	const slugs = posts.map((post) => ({ slug: post.slug }));
	return slugs;
}) satisfies EntryGenerator;
