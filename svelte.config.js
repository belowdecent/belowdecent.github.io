import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess({
			scss: {
				// path to your scss variables
			}
	}),
};
