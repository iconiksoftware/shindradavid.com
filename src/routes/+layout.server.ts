import type { LayoutServerLoad } from './$types';

import { getBlogPosts } from '$lib/server/markdown/utils';
import getMyWork from '$lib/server/markdown/utils/getMyWork';
import getWorkExperience from '$lib/server/markdown/utils/getWorkExperience';

export const load = (async ({ locals }) => {
	const posts = await getBlogPosts();
	const projects = await getMyWork();
	const workExperience = await getWorkExperience();
	const theme = locals.theme;

	return { posts, projects, workExperience, theme };
}) satisfies LayoutServerLoad;

export const prerender = true;
