<script lang="ts">
  import Top from '$lib/Top/index.svelte';
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
</div>

<section class="space-y-20">
  <About />
  <Works />
  <Skills />
</section>

<footer class="mt-20 mb-8">
  <Links />
</footer>
