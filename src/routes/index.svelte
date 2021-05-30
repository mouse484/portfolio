<script lang="ts">
  import Top from '$lib/Top/index.svelte';
  import MoveArrow from '$lib/MoveArrow.svelte';
  import About from '$lib/About/index.svelte';
  import Works from '$lib/Works/index.svelte';
  import Skills from '$lib/Skills/index.svelte';
  import Links from '$lib/Top/Links.svelte';
</script>

<svelte:head>
  <title>mouse's Portfolio.</title>
  <html lang="ja" />
</svelte:head>

<div class="h-screen pt-30vh">
  <Top />
  <div class="mt-48">
    <MoveArrow to="main" />
  </div>
</div>

<section id="main" class="space-y-20 p-y-10">
  <About />
  <Works />
  <Skills />
</section>

<footer class="pb-8 mt-20">
  <Links />
</footer>
