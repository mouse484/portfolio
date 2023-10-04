<script lang="ts">
	import { flex } from 'styled-system/patterns';

	export let href: string;
</script>

<a {href} target="_blank" class={flex({ gap: 2, alignItems: 'center' })}>
	<slot />
</a>
