const animated = require('animated-tailwindcss');
const flowbite = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#121212',
      },
    },
  },
  plugins: [flowbite],
};

module.exports = animated(config);
