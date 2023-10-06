<script lang="ts">
	import { browser } from '$app/environment';
	import { darkThemeClass, lightThemeClass } from '$lib/styles/themes.css';
	import { beforeUpdate } from 'svelte';
	import { checkboxClass, iconClass, labelClass } from './ThemeToggle.css';
	import Icon from './Icon.svelte';

	let isDark: boolean | undefined = undefined;

	beforeUpdate(() => {
		isDark = document.documentElement.classList.contains(darkThemeClass);
	});

	$: if (browser && isDark !== undefined) {
		document.documentElement.classList.remove(isDark ? lightThemeClass : darkThemeClass);
		document.documentElement.classList.add(isDark ? darkThemeClass : lightThemeClass);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

{#if isDark !== undefined}
	<label class={labelClass}>
		<div class={iconClass}>
			{#if isDark}
				<Icon name="circum:dark" variant={{ size: 'large' }} />
			{:else}
				<Icon name="circum:light" variant={{ size: 'large' }} />
			{/if}
		</div>

		<input type="checkbox" bind:checked={isDark} class={checkboxClass} />
	</label>
{/if}
