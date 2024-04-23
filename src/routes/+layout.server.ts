import type { LayoutServerLoad } from './$types';

import { getPosts } from '$lib/services/postsService.server';

export const load = (async () => {
	const posts = await getPosts();

	return { posts };
}) satisfies LayoutServerLoad;
