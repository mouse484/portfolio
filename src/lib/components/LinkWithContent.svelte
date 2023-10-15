<script lang="ts">
	import { flex } from 'styled-system/patterns';

	export let href: string;
</script>

<a {href} target="_blank" class={flex({ alignItems: 'center', gap: 2 })}>
	<slot />
</a>
