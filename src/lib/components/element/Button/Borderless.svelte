<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('click')}>
  <slot />
</button>

<style>
  button {
    border: none;
    background: transparent;
    color: currentcolor;
    cursor: pointer;
    font-size: inherit;
  }
</style>
