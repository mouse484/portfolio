<script lang="ts">
  export let value: string;
  export let alt: string;
</script>

<a
  href={value}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={alt}
  class="relative group"
>
  <slot />
  <span class="tooltip invisible">
    {value}
  </span>
</a>

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
</style> -->
