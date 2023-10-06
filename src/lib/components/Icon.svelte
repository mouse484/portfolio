<script lang="ts">
	import Icon from '@iconify/svelte';
	import { icon } from './Icon.css';
	import type { RecipeVariants } from '@vanilla-extract/recipes';

	export let name: string;
	export let variant: RecipeVariants<typeof icon> = {};
</script>

<Icon icon={name} class={icon(variant)} />
