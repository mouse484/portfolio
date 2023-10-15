<script>
	import LinkWithContent from '$lib/components/LinkWithContent.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { flex } from 'styled-system/patterns';
</script>

<div
	class={flex({
		direction: 'column',
		alignItems: 'center',
		gap: 2,
		'& > *': {
			width: '12rem'
		}
	})}
>
	<LinkWithContent href="https://twitter.com/mouse_484">
		<Icon name="mdi:twitter" />
		@mouse_484
	</LinkWithContent>
	<LinkWithContent href="https://github.com/mouse484">
		<Icon name="mdi:github" />
		mouse484
	</LinkWithContent>
	<LinkWithContent href="mailto:me@mousedev.page">
		<Icon name="mdi:email" />
		me@mousedev.page
	</LinkWithContent>
</div>
