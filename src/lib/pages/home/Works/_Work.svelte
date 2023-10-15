<script lang="ts">
	import type { Work } from './works';
	import Icon from '$lib/components/Icon.svelte';
	import LinkWithContent from '$lib/components/LinkWithContent.svelte';
	import { css, cx } from 'styled-system/css';
	import { border } from '$lib/styles/utils';
	import { flex } from 'styled-system/patterns';

	export let work: Work;
</script>

<div class={cx(border, css({ borderColor: 'main', rounded: 'md', padding: '1.5rem' }))}>
	<h class={css({ fontSize: '2xl' })}>{work.title}</h>
	<div>
		<p>{work.description}</p>
		<div class={flex({ gap: 4, marginTop: '1rem' })}>
			{#each work.libraries as name (name)}
				<div class={flex({ alignItems: 'center', gap: 2 })}>
					<Icon
						name="simple-icons:{name.toLowerCase().replaceAll(/\s+/g, '').replace('.', 'dot')}"
						size="1rem"
					/>
					<span>{name}</span>
				</div>
			{/each}
		</div>
		<LinkWithContent href="https://github.com/{work.repository}">
			<Icon name="mdi:github" size="1.5rem" />
			<span>{work.repository}</span>
		</LinkWithContent>
		<LinkWithContent href={work.url}>
			<Icon name="mdi:link" size="1.5rem" />
			<span>{work.url}</span>
		</LinkWithContent>
	</div>
</div>
