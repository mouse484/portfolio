<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';
  import Header from '$lib/header/Header.svelte';
  import Loading from '$lib/components/element/Loading.svelte';

  export let onLoad = false;

  onMount(() => {
    onLoad = true;
  });
</script>

{#if onLoad}
  <div class="background-color">
    <Header />
    <slot />
  </div>
{:else}
  <Loading />
{/if}
