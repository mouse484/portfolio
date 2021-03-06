import { defineConfig } from 'windicss/helpers';
import animations from '@windicss/plugin-animations';

export default defineConfig({
  darkMode: 'class',
  plugins: [animations()],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
      },
    },
  },
});
