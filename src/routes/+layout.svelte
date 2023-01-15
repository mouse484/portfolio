<script lang="ts">
  import 'gardevoir';
  import { themeClass, darkThemeClass, root } from '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/templates/Header.svelte';
  import Loading from '$lib/components/element/Loading.svelte';
  import Footer from '$lib/templates/Footer.svelte';
  import ScrollToTop from '$lib/components/modules/ScrollToTop.svelte';
  import { initTheme, theme } from '$lib/store/theme';
  import Spaser from '$lib/components/element/Spaser.svelte';

  export let onLoad = false;

  onMount(() => {
    initTheme();
    onLoad = true;
  });
</script>

<main class={`${root} ${$theme === 'dark' ? darkThemeClass : themeClass}`}>
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
