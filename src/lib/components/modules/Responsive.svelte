<script lang="ts">
  // ref: https://tailwindcss.com/docs/responsive-design
  const breakpointList = {
    sm: '(min-width: 640px)',
    lg: '(min-width: 1024px)',
  };

  export let breakpoint: keyof typeof breakpointList;
  export let visable = false;

  let result = false;

  $: {
    const matches = window.matchMedia(breakpointList[breakpoint]).matches;
    result = visable ? !matches : matches;
  }
</script>

{#if result}
  <slot />
{/if}
