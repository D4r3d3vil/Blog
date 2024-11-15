import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import toc from 'rehype-toc';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	preprocess: [mdsvex({
		extensions: [".md"],
		smartypants: {dashes: 'oldschool'},
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings, {behavior: 'wrap'}],
			toc
		],
		layout: {
		}
	})],
	extensions: ['.svelte', '.svx']
};

export default config;
