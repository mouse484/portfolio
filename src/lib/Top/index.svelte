<script lang="ts">
  import { onMount } from 'svelte';

  import MyLinks from '$lib/components/modules/MyLinks.svelte';

  let mounted = false;

  onMount(() => (mounted = true));
</script>

<h1
  class="font-bold text-center animate-fadeInDownBig text-4xl md:text-7xl"
  class:animation={mounted}
>
  Hi, I'm Mouse
</h1>
<h2
  class="border-b-4 border-blue-200 mt-8 text-center pb-4 animate-backInLeft animate-delay text-2xl"
  class:animation={mounted}
>
  I'm a student in Japan.
</h2>
<div
  class="mt-8 text-center animate-backInUp animate-delay-1s"
  class:animation={mounted}
>
  <MyLinks />
</div>
