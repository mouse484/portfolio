<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import { layoutCSS } from '$lib/styles/layout.css';
</script>

<div class={layoutCSS}>
	<Header />
	<slot />
</div>
