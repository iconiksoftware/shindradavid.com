import type { LayoutLoad } from './$types';

import { dev } from '$app/environment';

import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

inject({ mode: dev ? 'development' : 'production' });
injectSpeedInsights();

export const load = (async ({ data }) => {
	return { theme: data.theme, posts: data.posts };
}) satisfies LayoutLoad;
