import { defineConfig } from 'windicss/helpers';
import animations from '@windicss/plugin-animations';

export default defineConfig({
  darkMode: 'media',
  plugins: [animations()],
});
