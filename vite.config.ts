import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
	plugins: [sveltekit(), vanillaExtractPlugin()]
});
