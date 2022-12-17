<script lang="ts">
  import 'reseter.css';
  import '../app.postcss';
  import { onMount } from 'svelte';
  import Header from '$lib/templates/Header.svelte';
  import Loading from '$lib/components/element/Loading.svelte';
  import Footer from '$lib/templates/Footer.svelte';
  import ScrollToTop from '$lib/components/modules/ScrollToTop.svelte';
  import { initTheme, theme } from '$lib/store/theme';

  export let onLoad = false;

  onMount(() => {
    initTheme();
    onLoad = true;
  });
</script>

<main class={$theme ? 'dark' : ''}>
  {#if onLoad}
    <Header />
    <div id="top">
      <slot />
    </div>
    <Footer />
    <ScrollToTop />
  {:else}
    <Loading />
  {/if}
</main>

<style>
  main.dark {
    background-color: #121212;
    color: #ffffff;
  }
</style>
