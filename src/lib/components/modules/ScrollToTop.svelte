<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
  import ScrollTo from './ScrollTo.svelte';

  let scroll: number;
  $: visible = scroll > 200;
</script>

<ScrollTo
  to="top"
  class="fixed right-0 bottom-0 p-3 m-4 rounded-full border border-cyan-200 duration-1000 w-fit {visible
    ? 'opacity-100'
    : 'opacity-0'}"
>
  <Icon icon={faChevronUp} />
</ScrollTo>

<svelte:window bind:scrollY={scroll} />
