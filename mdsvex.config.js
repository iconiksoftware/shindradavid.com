import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';

import { codeToHtml } from 'shiki';

import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
	return function (tree, file) {
		const textOnPage = toString(tree);
		const readingTimeText = getReadingTime(textOnPage).text;
		file.data.fm.readingTime = readingTimeText;
	};
}

const config = defineConfig({
	extensions: ['.md'],

	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter: async (code, lang) => {
			const html = await codeToHtml(code, {
				lang: lang,
				theme: 'vitesse-dark'
			});

			/**
			 * Returns code with curly braces and backticks replaced by HTML entity equivalents
			 * @param {string} html - highlighted HTML
			 * @returns {string} - escaped HTML
			 */
			function escapeHtml(code) {
				return code.replace(
					/[{}`]/g,
					(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' })[character]
				);
			}

			return escapeHtml(html);
		}
	},
	remarkPlugins: [remarkReadingTime],
	rehypePlugins: [
		rehypeSlug,
		[
			toc,
			{
				headings: ['h2', 'h3'],
				position: 'beforeend',
				customizeTOC: function (toc) {
					const tocHeading = {
						type: 'element',
						tagName: 'h2',
						properties: { className: 'toc__heading', id: 'toc-heading' },
						children: [{ type: 'text', value: 'Table of contents' }]
					};
					toc.properties.ariaLabelledby = 'toc-heading';
					toc.children.unshift(tocHeading);
					const aside = {
						type: 'element',
						tagName: 'aside',
						properties: { className: 'left-sidebar' },
						children: [toc]
					};
					return aside;
				}
			}
		],
		[rehypeAutolinkHeadings, { behavior: 'append' }],
		rehypeStringify
	]
});

export default config;
