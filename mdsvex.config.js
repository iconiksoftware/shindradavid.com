import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.md'],
	highlight: {
		highlighter: () => {
			// disable default highlighter
			return;
		}
	},
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
