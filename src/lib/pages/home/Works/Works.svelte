<script lang="ts">
	import { works } from './works';
	import Work from './_Work.svelte';
	import { flex } from 'styled-system/patterns';
</script>

<div class={flex({ direction: 'column', gap: 16 })}>
	{#each works as work (work.title)}
		<Work {work} />
	{/each}
</div>
