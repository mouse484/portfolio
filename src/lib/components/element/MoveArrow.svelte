<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import ScrollTo from './ScrollTo.svelte';

  export let to: string;
</script>

<div class="move-arrow">
  <ScrollTo {to}>
    <Icon icon={faChevronDown} />
  </ScrollTo>
</div>

<style lang="postcss">
  @keyframes moveArrow {
    0% {
      transform: translateY(0);
      visibility: visible;
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .move-arrow {
    visibility: hidden;
    animation-name: moveArrow;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-delay: 3s;
  }
</style>
