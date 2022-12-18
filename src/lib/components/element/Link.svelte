<script lang="ts">
  export let href: string;
  export let target = '';
  export let rel = target === '__blank' ? 'noopener noreferrer' : '';
  export let ariaLabel = '';
</script>

<a {href} {target} {rel} aria-label={ariaLabel}>
  <slot />
</a>

<style lang="postcss">
  a {
    color: var(--color, #0284c7);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
