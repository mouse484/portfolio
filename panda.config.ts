import { defineConfig } from '@pandacss/dev';
import theme from './src/lib/styles/theme';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	conditions: { light: '[data-color-mode=light] &', dark: '[data-color-mode=dark] &' },

	// Useful for theme customization
	theme: theme,

	// The output directory for your css system
	outdir: 'styled-system'
});
