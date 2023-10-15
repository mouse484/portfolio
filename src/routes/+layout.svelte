<script lang="ts">
	import '../app.css';
	import { css } from 'styled-system/css';
	import Header from '$lib/components/Header.svelte';

	const layoutClass = css({
		color: 'text',
		backgroundColor: 'background',
		transitionProperty: 'background-color',
		transitionDuration: '2s',
		padding: '4',
		minHeight: '100vh'
	});
</script>

<svelte:head>
	<title>mouse's Portfolio.</title>
</svelte:head>

<div class={layoutClass}>
	<Header />
	<main
		class={css({
			margin: '2rem',
			lg: { marginX: '8rem', marginY: '4rem' }
		})}
	>
		<slot />
	</main>
</div>
