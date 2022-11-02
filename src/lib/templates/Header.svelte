<script lang="ts">
  import Menu from '$lib/components/element/Menu.svelte';
  import ScrollTo from '$lib/components/element/ScrollTo.svelte';
  import ThemeSwitch from '$lib/components/element/ThemeSwitch.svelte';
  import Responsive from '$lib/components/modules/Responsive.svelte';

  const naviList = {
    about: 'About Me',
    works: 'My Works',
    skills: 'My Skills',
    posts: 'My Posts',
  };
</script>

<header
  class="flex sticky top-0 z-50 items-center px-2 py-4 border-b background-color"
>
  <Responsive breakpoint="sm" visable>
    <Menu items={naviList} />
  </Responsive>
  <h1 class="ml-2 text-2xl">mouse's Portfolio</h1>
  <div class="flex mr-4 ml-auto">
    <Responsive breakpoint="sm">
      {#each Object.entries(naviList) as [to, name]}
        <ScrollTo class="px-3" {to}>{name}</ScrollTo>
      {/each}
    </Responsive>
    <ThemeSwitch />
  </div>
</header>
