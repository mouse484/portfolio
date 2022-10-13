<script lang="ts">
  import Hero from '$lib/templates/page/Hero.svelte';
  import About from '$lib/templates/page/About.svelte';
  import Works from '$lib/templates/page/Works.svelte';
  import Skills from '$lib/templates/page/Skills.svelte';
  import Posts from '$lib/templates/page/Posts.svelte';
</script>

<svelte:head>
  <title>mouse's Portfolio.</title>
  <html lang="ja" />
</svelte:head>

<section class="h-screen pt-[30vh]">
  <Hero />
</section>

<section id="main" class="py-10 space-y-20">
  <About />
  <Works />
  <Skills />
  <Posts />
</section>
