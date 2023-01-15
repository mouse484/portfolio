import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [sveltekit(), vanillaExtractPlugin()],
  ssr: {
    // https://github.com/FortAwesome/Font-Awesome/issues/18677
    // https://github.com/FortAwesome/Font-Awesome/issues/18514
    noExternal: ['@fortawesome/*'],
  },
});
