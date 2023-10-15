<script lang="ts">
	import Icon from '@iconify/svelte';
	import { css } from 'styled-system/css';

	export let name: string;
	export let size: `${number}rem` = '2rem';
</script>

<Icon
	icon={name}
	class={css({
		height: size,
		width: size
	})}
/>
