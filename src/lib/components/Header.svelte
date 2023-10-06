<script>
	import { headerClass } from './Header.css';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class={headerClass}>
	<img src="/icon.svg" alt="site icon" />
	<ThemeToggle />
</header>
