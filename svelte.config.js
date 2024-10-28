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
            @use 'src/styles/mixins';
            @use 'src/styles/breakpoints';
            @use 'src/styles/utils';
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
