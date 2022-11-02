<script lang="ts">
  import { onMount } from 'svelte';

  // ref: https://tailwindcss.com/docs/responsive-design
  const breakpointList = {
    sm: '(min-width: 640px)',
    lg: '(min-width: 1024px)',
  };

  export let breakpoint: keyof typeof breakpointList;
  export let visable = false;

  let result = false;

  onMount(() => {
    const mql = window.matchMedia(breakpointList[breakpoint]);
    update(mql.matches); // first
    mql.addEventListener('change', ({ matches }) => update(matches)); // resize
  });

  $: update = (matches: boolean) => (result = visable ? !matches : matches);
</script>

{#if result}
  <slot />
{/if}
