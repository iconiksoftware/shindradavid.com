import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { parseMarkdown } from '$lib/server/utils/markdown';
import { read } from '$app/server';

export const load = (async ({ params }) => {
	try {
		const slug = params.slug;
		const asset = read(`/src/lib/content/posts/${slug}/post.md`);
		const file = await asset.text();
		const { content, frontmatter } = await parseMarkdown(file);

		return { frontmatter, content };
	} catch (err) {
		console.error(err);
		error(500, 'Internal server error');
	}
}) satisfies PageServerLoad;
