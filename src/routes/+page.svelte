<script lang="ts">
  import About from '$lib/About/About.svelte';
  import MoveArrow from '$lib/MoveArrow.svelte';
  import Posts from '$lib/Posts/Posts.svelte';
  import Skills from '$lib/Skills/Skills.svelte';
  import Top from '$lib/Top/index.svelte';
  import Links from '$lib/Top/Links.svelte';
  import Works from '$lib/Works/Works.svelte';
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
  <Posts />
</section>

<footer class="pb-8 mt-20">
  <Links />
</footer>
