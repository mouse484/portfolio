<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';
  import Header from '$lib/templates/Header.svelte';
  import Loading from '$lib/components/element/Loading.svelte';
  import Footer from '$lib/templates/Footer.svelte';
  import ScrollToTop from '$lib/components/modules/ScrollToTop.svelte';
  export let onLoad = false;

  onMount(() => {
    onLoad = true;
  });
</script>

{#if onLoad}
  <div class="background-color">
    <Header />
    <div id="top">
      <slot />
    </div>
    <Footer />
    <ScrollToTop />
  </div>
{:else}
  <Loading />
{/if}
