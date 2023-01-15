<script lang="ts">
  import Menu from '$lib/components/element/Menu.svelte';
  import ScrollTo from '$lib/components/modules/ScrollTo.svelte';
  import ThemeSwitch from '$lib/components/modules/ThemeSwitch.svelte';
  import Responsive from '$lib/components/modules/Responsive.svelte';
  import { flex } from '$lib/style/flex.css';
  import { container, h1,items } from './Header.css';

  const naviList = {
    about: 'About Me',
    works: 'My Works',
    skills: 'My Skills',
    posts: 'My Posts',
  };
</script>

<header class={`${flex} ${container}`}>
  <Responsive breakpoint="sm" visable>
    <Menu items={naviList} />
  </Responsive>
  <h1 class={h1}>mouse's Portfolio</h1>
  <div class={items}>
    <Responsive breakpoint="sm">
      {#each Object.entries(naviList) as [to, name]}
        <ScrollTo {to}>{name}</ScrollTo>
      {/each}
    </Responsive>
    <ThemeSwitch />
  </div>
</header>
