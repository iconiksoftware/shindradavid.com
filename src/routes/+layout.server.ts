import type { LayoutServerLoad } from './$types';

import { getBlogPosts } from '$lib/server/markdown/utils';
import getMyWork from '$lib/server/markdown/utils/getMyWork';

export const load = (async ({ locals }) => {
	const posts = await getBlogPosts();
	const projects = await getMyWork();
	const theme = locals.theme;

	return { posts, projects, theme };
}) satisfies LayoutServerLoad;

export const prerender = true;
