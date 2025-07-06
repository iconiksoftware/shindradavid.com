import type { LayoutLoad } from './$types';

export const load = (async ({ data }) => {
	return {
		theme: data.theme,
		posts: data.posts,
		projects: data.projects,
		workExperience: data.workExperience
	};
}) satisfies LayoutLoad;
