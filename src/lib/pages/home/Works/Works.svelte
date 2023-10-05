<script lang="ts">
	import { works } from './works';
	import Work from './_Work.svelte';
</script>

<div>
	{#each works as work (work.title)}
		<Work {work} />
	{/each}
</div>
