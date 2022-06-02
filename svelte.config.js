import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: vercel(),
    vite: {
      plugins: [WindiCSS()],
      ssr: {
        // https://github.com/FortAwesome/Font-Awesome/issues/18677
        // https://github.com/FortAwesome/Font-Awesome/issues/18514
        noExternal: ['@fortawesome/*'],
      },
    },
  },
};

export default config;
