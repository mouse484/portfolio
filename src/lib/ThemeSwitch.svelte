<script lang="ts">
  // import { onMount } from 'svelte';

  // onMount(() => {
  //   document.querySelector('html')?.classList.add('dark');
  // });
  import Icon from '$lib/Icon.svelte';
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

  import { writable } from 'svelte/store';

  export const theme = writable<'light' | 'dark'>('light');

  $: {
    if (typeof document !== 'undefined') {
      $theme === 'light'
        ? document.querySelector('html')?.classList.remove('dark')
        : document.querySelector('html')?.classList.add('dark');
    }
  }
</script>

<button
  class="focus:outline-none"
  on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}
>
  <Icon icon={$theme === 'light' ? faMoon : faSun} />
</button>
