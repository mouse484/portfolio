<script lang="ts">
  import Icon from '$lib/components/modules/Icon.svelte';
  import BorderlessButton from '$lib/components/element/Button/Borderless.svelte';
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
  import { theme } from '$lib/store/theme';
</script>

<BorderlessButton
  on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}
>
  {#key $theme}
    <Icon icon={$theme === 'light' ? faMoon : faSun} />
  {/key}
</BorderlessButton>
