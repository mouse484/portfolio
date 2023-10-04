<script lang="ts">
	import { css, cx } from 'styled-system/css';
	import type { Work } from './works';
	import { flex, hstack } from 'styled-system/patterns';
	import Icon from '$lib/components/Icon.svelte';
	import LinkWithContent from '$lib/components/LinkWithContent.svelte';

	export let work: Work;
</script>

<div
	class={cx(
		flex({
			gap: 8,
			padding: 8,
			justifyContent: 'space-between',
			_even: {
				flexDirection: 'row-reverse'
			}
		}),
		css({
			_odd: {
				borderLeft: '0.5rem groove token(colors.main)'
			},
			_even: {
				borderRight: '0.5rem ridge token(colors.main)'
			}
		})
	)}
>
	<h4 class={css({ fontSize: '2xl' })}>{work.title}</h4>
	<div
		class={flex({
			direction: 'column',
			gap: 4,
			marginTop: '4rem'
		})}
	>
		<p>{work.description}</p>
		<div class={flex({ gap: 4 })}>
			{#each work.libraries as name (name)}
				<div class={hstack()}>
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
