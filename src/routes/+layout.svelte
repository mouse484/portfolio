<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';
  import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
  import Header from '$lib/header/Header.svelte';
  import Icon from '$lib/Icon.svelte';

  export let onLoad = false;

  onMount(() => {
    onLoad = true;
  });
</script>

{#if onLoad}
  <div class="dark:bg-dark dark:text-gray-50">
    <Header />
    <slot />
  </div>
{:else}
  <div class="flex justify-center items-center h-screen">
    <div class="flex-none text-xl">
      <p class="font-bold">Loading... Mouse's Portfolio.</p>
      <p class="flex justify-center mt-5">
        <Icon icon={faCircleNotch} size="2xl" className="animate-spin" />
      </p>
    </div>
  </div>
{/if}
