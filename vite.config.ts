import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use 'src/styles/mixins';
          @use 'src/styles/breakpoints';
          @use 'src/styles/utils';
        `
			}
		}
	}
});
