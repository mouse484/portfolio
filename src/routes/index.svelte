<script lang="ts">
  import Top from '$lib/Top/index.svelte';
  import About from '$lib/About/index.svelte';
  import Works from '$lib/Works/index.svelte';
  import Skills from '$lib/Skills/index.svelte';
</script>

<div class="h-screen pt-30vh">
  <Top />
</div>

<section class="space-y-20">
  <About />
  <Works />
  <Skills />
</section>
