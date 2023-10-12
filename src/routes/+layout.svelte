<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>mouse's Portfolio.</title>
	<!-- {@html `
		<script>
		 	const theme =	'theme' in localStorage ? localStorage.getItem('theme') === 'dark' :  window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.classList.add(theme ? '${darkThemeClass}' : '${lightThemeClass}');
		</script>
	`} -->
</svelte:head>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
