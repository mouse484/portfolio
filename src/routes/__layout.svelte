<script lang="ts">
  import 'virtual:windi.css';
  import '../app.css';
  import { onMount } from 'svelte';
  import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

  export let onLoad = false;

  onMount(() => {
    onLoad = true;
  });

  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
  import Icon from '$lib/Icon.svelte';
</script>

{#if onLoad}
  <div class="dark:bg-dark dark:text-gray-50">
    <header class="float-right m-8">
      <ThemeSwitch />
    </header>
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
