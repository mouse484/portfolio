<script lang="ts">
  import Top from '$lib/Top/index.svelte';
  import About from '$lib/About/index.svelte';
  import Works from '$lib/Works/index.svelte';
</script>

<div class="h-screen pt-30vh">
  <Top />
</div>

<section>
  <About />
  <Works className="mt-20 mb-40vh" />
</section>
