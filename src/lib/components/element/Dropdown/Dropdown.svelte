<script lang="ts">
  export let side: 'bottom' | 'right' = 'bottom';
  $: style = side === 'right' ? 'right' : '';
</script>

<div class="dropdown">
  <div>
    <slot name="root" />
  </div>
  <div class="item {style}">
    <slot />
  </div>
</div>

<style lang="postcss">
  .dropdown {
    position: relative;
  }
  .item {
    position: absolute;
    visibility: hidden;
    background-color: var(--background-color);
    z-index: 50;
    padding: 1em;
    &.right {
      top: -1em;
      left: 100%;
    }
  }
  .dropdown:hover > .item {
    visibility: visible;
  }
</style>
