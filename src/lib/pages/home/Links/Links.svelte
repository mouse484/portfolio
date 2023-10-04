<script>
	import { flex } from 'styled-system/patterns';
	import LinkWithContent from '$lib/components/LinkWithContent.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div
	class={flex({
		flexDirection: 'column',
		gap: '2',
		'& svg': {
			height: '1.5rem',
			width: '1.5rem'
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
