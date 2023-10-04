<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { flex } from 'styled-system/patterns';

	export let name: string;
	export let href: string;
</script>

<a {href} target="_blank" class={flex({ gap: 2 })}>
	<Icon name="mdi:{name}" />
	<slot />
</a>
