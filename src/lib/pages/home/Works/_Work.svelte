<script lang="ts">
	import type { Work } from './works';
	import Icon from '$lib/components/Icon.svelte';
	import LinkWithContent from '$lib/components/LinkWithContent.svelte';

	export let work: Work;
</script>

<div>
	<h4>{work.title}</h4>
	<div>
		<p>{work.description}</p>
		<div>
			{#each work.libraries as name (name)}
				<div>
					<Icon
						name="simple-icons:{name.toLowerCase().replaceAll(/\s+/g, '').replace('.', 'dot')}"
					/>
					<span>{name}</span>
				</div>
			{/each}
		</div>
		<LinkWithContent href="https://github.com/{work.repository}">
			<Icon name="mdi:github" />
			<span>{work.repository}</span>
		</LinkWithContent>
		<LinkWithContent href={work.url}>
			<Icon name="mdi:link" />
			<span>{work.url}</span>
		</LinkWithContent>
	</div>
</div>
