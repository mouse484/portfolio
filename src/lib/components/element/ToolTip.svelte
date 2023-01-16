<script lang="ts">
  import Link from './Link.svelte';
  export let value: string;
  export let alt: string;
</script>

<Link
  --color="inherit"
  href={value}
  target="_blank"
  rel="noopener noreferrer"
  ariaLabel={alt}
>
  <div class="tooltip">
    <slot />
    <span class="popup rounded">
      {value}
    </span>
  </div>
</Link>

<!-- <style lang="postcss">
  .tooltip {
    @apply bg-white;
    @apply rounded border;
    @apply absolute left-1/2 -top-12 -translate-x-1/2;
    @apply p-2 max-w-max whitespace-nowrap z-50;
    @apply group-hover:visible;
    @apply group-hover:animate-slideInUp animate-delay-1s;
  }
  :global(.dark) .tooltip {
    @apply text-gray-50 bg-dark;
  }
</!-->
<style>
  .tooltip {
    position: relative;
  }
  .popup {
    visibility: hidden;
    position: absolute;
    top: -3em;
    left: 50%;
    transform: translateX(-50%);
    /* reverse color */
    background-color: var(--font-color);
    padding: 0.5em;
  }
  .tooltip:hover .popup {
    visibility: visible;
  }
</style>
