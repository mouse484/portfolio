<script lang="ts">
  import Icon from '$lib/components/modules/Icon.svelte';
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
  import ScrollTo from './ScrollTo.svelte';
  import { circle, visableClass } from './ScrollToTop.css';

  let scroll: number;
  $: visible = scroll > 200;
</script>

<ScrollTo to="top">
  <div class="{circle} {visible ? visableClass : ''}">
    <Icon icon={faChevronUp} />
  </div>
</ScrollTo>

<svelte:window bind:scrollY={scroll} />
