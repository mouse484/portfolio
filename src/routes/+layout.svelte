<script lang="ts">
	import 'modern-normalize';

	import Header from '$lib/components/Header.svelte';
	import { layoutClass, mainClass } from '$lib/styles/layout.css';
	import { darkThemeClass, lightThemeClass } from '$lib/styles/themes.css';
	import { sprinkles } from '$lib/styles/sprinkles.css';
</script>

<svelte:head>
	<title>mouse's Portfolio.</title>
	<!-- いい方法を見つけたらすぐにやめる -->
	{@html `
		<script>
		 	const theme =	'theme' in localStorage ? localStorage.getItem('theme') === 'dark' :  window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.classList.add(theme ? '${darkThemeClass}' : '${lightThemeClass}');
		</script>
	`}
	<!-- いい方法を見つけたらすぐにやめる -->
</svelte:head>

<div class={layoutClass}>
	<Header />
	<main class="{mainClass} {sprinkles({ marginX: 'auto' })}">
		<slot />
	</main>
</div>
