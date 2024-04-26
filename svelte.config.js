import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		vitePreprocess({
			style: {
				scss: {
					prependData: `
            @use 'src/lib/styles/mixins';
            @use 'src/lib/styles/breakpoints';
          `
				}
			}
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
