<script lang="ts">
  // import { onMount } from 'svelte';

  // onMount(() => {
  //   document.querySelector('html')?.classList.add('dark');
  // });
  import Icon from '$lib/Icon.svelte';
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';

  import { writable } from 'svelte/store';

  export const theme = writable<'light' | 'dark'>('light');

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.set('dark');
    }
  });

  $: {
    if (typeof document !== 'undefined') {
      if ($theme === 'dark') {
        document.querySelector('html')?.classList.add('dark');
      } else {
        document.querySelector('html')?.classList.remove('dark');
      }
    }
  }
</script>

<button
  class="focus:outline-none"
  aria-label="ThemeSwitch"
  on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}
>
  <Icon icon={$theme === 'light' ? faMoon : faSun} />
</button>
