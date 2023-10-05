<script>
	import Header from '$lib/components/Header.svelte';
	import { layoutClass } from '$lib/styles/layout.css';
</script>

<svelte:head>
	<title>mouse's Portfolio.</title>
</svelte:head>

<div class={layoutClass}>
	<Header />
	<slot />
</div>
