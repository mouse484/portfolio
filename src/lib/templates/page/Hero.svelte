<script lang="ts">
  import { onMount } from 'svelte';
  import MyLinks from '$lib/components/modules/MyLinks.svelte';
  import MoveArrow from '$lib/components/element/MoveArrow.svelte';

  let mounted = false;

  onMount(() => (mounted = true));
</script>

<div>
  <h1 class="font-bold text-center animate-fadeInDownBig text-4xl md:text-7xl">
    Hi, I'm Mouse
  </h1>

  <h2
    class="border-b-4 border-blue-200 mt-8 text-center pb-4 animate-backInLeft animate-delay-1s text-2xl"
  >
    I'm a student in Japan.
  </h2>

  <div class="mt-8 text-center animate-backInUp animate-delay-2s">
    <MyLinks />
  </div>
  <div class="mt-48">
    <MoveArrow to="main" />
  </div>
</div>
