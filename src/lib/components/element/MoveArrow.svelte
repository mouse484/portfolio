<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

  export let to: string;

  const scroll = () => {
    document.getElementById(to)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
</script>

<div
  class="w-4 mx-auto text-gray-500 cursor-pointer move-arrow"
  on:click={scroll}
>
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
  .move-arrow {
    visibility: hidden;
    animation-name: moveArrow;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-delay: 3s;
  }
</style>
