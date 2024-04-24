import { writable } from 'svelte/store';

import type { Theme } from '$lib/types';

import { browser } from '$app/environment';

import Cookie from 'js-cookie';

function createThemeStore() {
	const { subscribe } = writable<Theme | null>(null);

	function setTheme(newTheme: Theme) {
		if (browser) {
			document.body.setAttribute('data-theme', newTheme);
			Cookie.set('theme', newTheme, {
				expires: 60 * 60 * 24 * 14 * 1000,
				path: '/',
				httpOnly: false
			});
		}
	}

	return {
		subscribe,
		update: setTheme,
		set: setTheme
	};
}

export default createThemeStore();
