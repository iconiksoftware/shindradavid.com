import type { LayoutServerLoad } from './$types';

import { getBlogPosts } from '$lib/services/postsService.server';

export const load = (async () => {
	const posts = await getBlogPosts();

	return { posts };
}) satisfies LayoutServerLoad;
