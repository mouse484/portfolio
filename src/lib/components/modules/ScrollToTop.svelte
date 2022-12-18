<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
  import ScrollTo from './ScrollTo.svelte';

  let scroll: number;
  $: visible = scroll > 200;
</script>

<ScrollTo to="top">
  <div class="circle {visible ? 'visable' : ''}">
    <Icon icon={faChevronUp} />
  </div>
</ScrollTo>

<svelte:window bind:scrollY={scroll} />

<style>
  .circle {
    position: fixed;
    z-index: 100;
    background-color: inherit;

    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 1px solid var(--sky-blue);

    width: fit-content;
    height: fit-content;

    margin: 2em;
    padding: 0.9em 1em;

    opacity: 0;
    transition-duration: 1000ms;
  }
  .visable {
    opacity: 1;
  }
</style>
