import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),

		// remove this if you're not using comment system
		csp: { mode: 'auto' }
	},
	preprocess: [mdsvex(mdsvexConfig), preprocess({ postcss: true })]
};

export default config;
