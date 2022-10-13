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
  <div class="background-color">
    <Header />
    <slot />
  </div>
{:else}
  <div class="flex h-screen justify-center items-center">
    <div class="flex-none text-xl">
      <p class="font-bold">Loading... Mouse's Portfolio.</p>
      <p class="flex mt-5 justify-center">
        <Icon icon={faCircleNotch} size="2xl" className="animate-twSpin" />
      </p>
    </div>
  </div>
{/if}
