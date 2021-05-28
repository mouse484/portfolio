<script lang="ts">
  import Icon from '$lib/Icon.svelte';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="w-4 mx-auto text-gray-500 scroll">
  <Icon icon={faChevronDown} />
</div>

<style>
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
  .scroll {
    visibility: hidden;
    animation-name: moveArrow;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-delay: 3s;
  }
</style>
