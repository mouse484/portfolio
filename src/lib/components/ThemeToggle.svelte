<script lang="ts">
	import { browser } from '$app/environment';
	import { beforeUpdate } from 'svelte';
	import Icon from './Icon.svelte';
	import { css } from 'styled-system/css';

	let isDark: boolean | undefined = undefined;

	beforeUpdate(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	$: if (browser && isDark !== undefined) {
		document.documentElement.classList.remove(isDark ? 'light' : 'dark');
		document.documentElement.classList.add(isDark ? 'dark' : 'light');
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

{#if isDark !== undefined}
	<button
		aria-label="テーマ切り替え"
		class={css({
			cursor: 'pointer',
			color: 'text'
		})}
		on:click={() => (isDark = !isDark)}
	>
		{#if isDark}
			<Icon name="circum:dark" />
		{:else}
			<Icon name="circum:light" />
		{/if}
	</button>
{/if}
