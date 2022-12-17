<script lang="ts">
  import { onMount } from 'svelte';
  import MyLinks from '$lib/templates/page/Hero/MyLinks.svelte';
  import MoveArrow from '$lib/components/element/MoveArrow.svelte';
  import Spaser from '$lib/components/element/Spaser.svelte';

  let mounted = false;

  onMount(() => (mounted = true));
</script>

<section>
  <h1>Hi, I'm Mouse</h1>
  <h2>I'm a student in Japan.</h2>
  <Spaser size={2} />
  <MyLinks />
  <Spaser size={2} />
  <MoveArrow to="about" />
</section>

<style>
  section {
    text-align: center;
  }
</style>
