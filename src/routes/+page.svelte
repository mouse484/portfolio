<script lang="ts">
	import Links from '$lib/pages/home/Links/Links.svelte';
	import Works from '$lib/pages/home/Works/Works.svelte';
	import { center, flex } from 'styled-system/patterns';
</script>

<h1
	class={center({
		marginTop: '4rem',
		fontSize: '4xl'
	})}
>
	mouse's Portfolio.
</h1>

<div
	class={flex({
		marginTop: '4rem',
		flexDirection: 'column',
		gap: '4rem'
	})}
>
	<Links />
	<Works />
</div>
