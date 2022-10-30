<script lang="ts">
  import ScrollTo from '../components/element/ScrollTo.svelte';
  import ThemeSwitch from '$lib/components/element/ThemeSwitch.svelte';

  const naviList = {
    about: 'About Me',
    works: 'My Works',
    skills: 'My Skills',
    posts: 'My Posts',
  };
</script>

<header class="flex sticky top-0 z-50 px-2 py-4 border-b background-color">
  <h1 class="text-2xl">mouse's Portfolio</h1>
  <div class="flex mr-4 ml-auto">
    {#each Object.entries(naviList) as [to, name]}
      <ScrollTo class="px-3" {to}>{name}</ScrollTo>
    {/each}
    <div><ThemeSwitch /></div>
  </div>
</header>
