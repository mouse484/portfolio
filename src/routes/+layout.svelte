<script lang="ts">
	import '../app.css';
	import { css } from 'styled-system/css';
	import Header from '$lib/components/Header.svelte';

	const layoutClass = css({
		color: 'text',
		backgroundColor: 'background',
		padding: '4',
		minHeight: '100vh'
	});
</script>

<svelte:head>
	<title>mouse's Portfolio.</title>
</svelte:head>

<div class={layoutClass}>
	<Header />
	<main>
		<slot />
	</main>
</div>
