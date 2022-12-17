<script lang="ts">
  export let href: string;
</script>

<a {href}>
  <slot />
</a>

<style lang="postcss">
  a {
    color: #0284c7;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
