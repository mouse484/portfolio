<script>
  import Icon from '$lib/components/element/Icon.svelte';
  import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <p class="text-xl font-bold">
    Loading
    <span class="inline-block animate-jackInTheBox animate-infinite">...</span>
    Mouse's Portfolio.
  </p>
  <p class="mt-5 animate-twSpin animate-infinite">
    <Icon icon={faCircleNotch} />
  </p>
</div>
