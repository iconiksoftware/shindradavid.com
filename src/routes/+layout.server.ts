import type { LayoutServerLoad } from './$types';

import { getBlogPosts } from '$lib/server/utils';

export const load = (async ({ locals }) => {
	const posts = await getBlogPosts();
	const { theme } = locals;

	return { posts, theme };
}) satisfies LayoutServerLoad;

export const prerender = true;
