<script lang="ts">
  export let value: string;
  export let alt: string;
</script>

<a href={value} aria-label={alt} class="relative group">
  <slot />
  <span class="invisible tooltip group-hover:visible">{value}</span>
</a>

<style>
  .tooltip {
    @apply absolute;
    @apply z-50;

    left: 50%;
    transform: translateX(-50%);
    top: -50px;

    @apply transition;
    @apply duration-300;
    @apply ease-in;

    @apply whitespace-nowrap;
    @apply max-w-max;

    @apply bg-white;
    @apply p-2;
    @apply rounded;
    @apply border;
  }
</style>
