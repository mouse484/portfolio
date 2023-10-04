import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const load = (async () => {
	if (browser) {
		let theme: 'light' | 'dark' = 'light';

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
		theme =
			(localStorage.getItem('theme') as typeof theme) || (prefersDark.matches ? 'dark' : 'light');
		document.documentElement.setAttribute('data-color-mode', theme);
		localStorage.setItem('theme', theme);
	}
}) satisfies LayoutLoad;
