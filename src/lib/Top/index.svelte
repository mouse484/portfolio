<script lang="ts">
  import { onMount } from 'svelte';
  import Links from './Links.svelte';

  let mounted = false;

  onMount(() => (mounted = true));
</script>

<h1
  class="text-4xl font-bold text-center md:text-7xl animate-fadeInDownBig"
  class:animation={mounted}
>
  Hi, I'm Mouse
</h1>
<h2
  class="pb-4 mt-8 text-2xl text-center border-b-4 border-blue-200 animate-backInLeft animate-delay"
  class:animation={mounted}
>
  I'm a student in Japan.
</h2>
<div
  class="mt-8 text-center animate-backInUp animate-delay-1s"
  class:animation={mounted}
>
  <Links />
</div>

<style>
  .animation {
    @apply animate-animated;
  }
</style>
