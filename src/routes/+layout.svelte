<script lang="ts">
  import 'gardevoir';
  import '../app.postcss';
  import { onMount } from 'svelte';
  import Header from '$lib/templates/Header.svelte';
  import Loading from '$lib/components/element/Loading.svelte';
  import Footer from '$lib/templates/Footer.svelte';
  import ScrollToTop from '$lib/components/modules/ScrollToTop.svelte';
  import { initTheme } from '$lib/store/theme';
  import Spaser from '$lib/components/element/Spaser.svelte';

  export let onLoad = false;

  onMount(() => {
    initTheme();
    onLoad = true;
  });
</script>

<main>
  {#if onLoad}
    <Header />
    <div id="top">
      <slot />
    </div>
    <Spaser size={4} />
    <Footer />
    <ScrollToTop />
  {:else}
    <Loading />
  {/if}
</main>

<style lang="postcss">
  main {
    background-color: var(--background-color);
    color: var(--font-color);
  }
</style>
