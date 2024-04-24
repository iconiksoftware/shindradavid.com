import type { Handle } from '@sveltejs/kit';

import { cookieExpirationTime, defaultTheme } from '$lib/config';

export const handle = (async ({ resolve, event }) => {
	const { cookies, locals } = event;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theme: any = cookies.get('theme');

	if (!theme) {
		locals.theme = defaultTheme;

		cookies.set('theme', locals.theme, {
			maxAge: cookieExpirationTime,
			path: '/',
			httpOnly: false
		});
	} else {
		locals.theme = theme;
	}

	locals.theme = theme;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<body', `<body data-theme=${locals.theme}`)
	});
	return response;
}) satisfies Handle;
