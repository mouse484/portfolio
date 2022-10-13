<script lang="ts">
  import About from '$lib/templates/page/About.svelte';
  import Works from '$lib/templates/page/Works.svelte';
  import Skills from '$lib/templates/page/Skills.svelte';
  import MoveArrow from '$lib/MoveArrow.svelte';
  import Posts from '$lib/Posts/Posts.svelte';
  import Top from '$lib/Top/index.svelte';
</script>

<svelte:head>
  <title>mouse's Portfolio.</title>
  <html lang="ja" />
</svelte:head>

<div class="h-screen pt-[30vh]">
  <Top />
  <div class="mt-48">
    <MoveArrow to="main" />
  </div>
</div>

<section id="main" class="py-10 space-y-20">
  <About />
  <Works />
  <Skills />
  <Posts />
</section>
