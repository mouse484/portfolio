<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
  import { theme } from '$lib/store/theme';
</script>

<button
  class="focus:outline-none"
  aria-label="ThemeSwitch"
  on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}
>
  {#key $theme}
    <Icon icon={$theme === 'light' ? faMoon : faSun} />
  {/key}
</button>
