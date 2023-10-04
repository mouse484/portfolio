<script lang="ts">
	import Links from '$lib/pages/home/Links/Links.svelte';
	import Works from '$lib/pages/home/Works/Works.svelte';
	import { css, cx } from 'styled-system/css';
	import { center, container, flex } from 'styled-system/patterns';
</script>

<h1
	class={center({
		fontSize: '5xl'
	})}
>
	mouse's Portfolio.
</h1>

<main
	class={cx(
		css({
			marginTop: '16'
		}),
		container(),
		center(),
		flex({ direction: 'column', gap: '16' })
	)}
>
	<Links />
	<Works />
</main>
