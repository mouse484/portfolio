<script>
	import { flex } from 'styled-system/patterns';
	import Link from './_Link.svelte';
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
	<Link name="twitter" href="https://twitter.com/mouse_484">@mouse_484</Link>
	<Link name="github" href="https://github.com/mouse484">mouse484</Link>
	<Link name="email" href="mailto:me@mousedev.page">me@mousedev.page</Link>
</div>
