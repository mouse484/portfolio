<script lang='ts'>
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    children: Snippet
    element: HTMLElement | null
  }
  const { element, children, ...rest }: Props = $props();
</script>

<button
  onclick={() => {
    element?.scrollIntoView({ behavior: 'smooth' });
  }}
  {...rest}
>
  {@render children()}
</button>

<style>
  button {
    cursor: pointer;
  }
</style>
