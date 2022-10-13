<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';
  import Header from '$lib/templates/Header.svelte';
  import Loading from '$lib/components/element/Loading.svelte';
  import Footer from '$lib/templates/Footer.svelte';
  export let onLoad = false;

  onMount(() => {
    onLoad = true;
  });
</script>

{#if onLoad}
  <div class="background-color">
    <Header />
    <slot />
    <Footer />
  </div>
{:else}
  <Loading />
{/if}
