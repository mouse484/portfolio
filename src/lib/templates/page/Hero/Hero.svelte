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
  <h3>I'm a student in Japan.</h3>
  <Spaser size={2} />
  <MyLinks />
  <Spaser size={2} />
  <MoveArrow to="about" />
</section>

<style lang="postcss">
  section {
    text-align: center;
  }
  h1 {
    font-size: 4em;
  }
  h3 {
    font-weight: normal;
    padding: 1em;
    border-bottom: 4px solid var(--sky-bule);
  }
</style>
