<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import { layoutCSS } from '$lib/styles/layout.css';
</script>

<svelte:head>
	<title>mouse's Portfolio.</title>
</svelte:head>

<div class={layoutCSS}>
	<Header />
	<slot />
</div>
