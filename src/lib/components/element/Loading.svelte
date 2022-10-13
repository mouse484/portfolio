<script>
  import { Spinner } from 'flowbite-svelte';
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <p class="text-xl font-bold">
    Loading
    <span class="inline-block animate-jackInTheBox animate-infinite">...</span>
    Mouse's Portfolio.
  </p>
  <p class="mt-5 animate-twSpin animate-infinite">
    <Spinner color="gray" />
  </p>
</div>

