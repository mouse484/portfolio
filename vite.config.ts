import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  ssr: {
    // https://github.com/FortAwesome/Font-Awesome/issues/18677
    // https://github.com/FortAwesome/Font-Awesome/issues/18514
    noExternal: ['@fortawesome/*'],
  },
});
