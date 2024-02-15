/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { Frontmatter } from '$lib/types';

import { unified } from 'unified';

import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';

import { getHighlighterCore } from 'shiki/core';
import getWasm from 'shiki/wasm';

import matter from 'gray-matter';

type ContentType = {
	content: string;
	frontmatter: Frontmatter;
};

// plugins

const highlighter = await getHighlighterCore({
	themes: [import('shiki/themes/vitesse-light.mjs'), import('shiki/themes/vitesse-dark.mjs')],
	langs: [
		import('shiki/langs/javascript.mjs'),
		import('shiki/langs/html.mjs'),
		import('shiki/langs/typescript.mjs'),
		import('shiki/langs/python.mjs'),
		import('shiki/langs/c.mjs')
	],
	loadWasm: getWasm
});

export const parseMarkdown = async (markdownFile: string): Promise<ContentType> => {
	const { content, data } = matter(markdownFile);

	const result = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeAutolinkHeadings, { behavior: 'append' })
		.use(rehypeSlug)
		.use(rehypeShikiFromHighlighter, highlighter, {
			// or `theme` for a single theme
			themes: {
				light: 'vitesse-light',
				dark: 'vitesse-dark'
			}
		})
		.use(rehypeStringify)
		.process(content);

	return {
		content: result.toString(),
		frontmatter: data as Frontmatter
	};
};
