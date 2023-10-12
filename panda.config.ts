import { defineConfig } from '@pandacss/dev';
import { tokens } from './src/lib/styles/tokens';

export default defineConfig({
	include: ['./src/**/*.{js,ts,svelte}'],

	outdir: 'styled-system',

	preflight: true,

	shorthands: false,

	theme: {
		semanticTokens: tokens
	}
});
