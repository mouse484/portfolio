<script>
  import { ChevronUp } from 'flowbite-svelte';
  import ScrollTo from '../element/ScrollTo.svelte';
</script>

<ScrollTo
  to="top"
  class="rounded-full border border-cyan-200 w-fit p-3 fixed bottom-0 right-0 m-4"
>
  <ChevronUp />
</ScrollTo>
