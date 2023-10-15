<script>
	import { css } from 'styled-system/css';
	import ThemeToggle from './ThemeToggle.svelte';
	import { flex } from 'styled-system/patterns';
</script>

<header class={flex({ justifyContent: 'space-between', height: '3rem' })}>
	<img src="/icon.svg" alt="site icon" />
	<ThemeToggle />
</header>
