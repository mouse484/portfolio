<script lang="ts">
  import Hero from '$lib/templates/page/Hero/Hero.svelte';
  import About from '$lib/templates/page/About.svelte';
  import Works from '$lib/templates/page/Works.svelte';
  import Skills from '$lib/templates/page/Skills.svelte';
  import Posts from '$lib/templates/page/Posts.svelte';
  import Spaser from '$lib/components/element/Spaser.svelte';
</script>

<svelte:head>
  <title>mouse's Portfolio.</title>
  <html lang="ja" />
</svelte:head>

<Hero />
<Spaser size={16}/>
<section id="main">
  <About />
  <Works />
  <Skills />
  <Posts />
</section>
