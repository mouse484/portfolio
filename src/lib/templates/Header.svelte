<script lang="ts">
  import Menu from '$lib/components/element/Menu.svelte';
  import ScrollTo from '$lib/components/modules/ScrollTo.svelte';
  import ThemeSwitch from '$lib/components/modules/ThemeSwitch.svelte';
  import Responsive from '$lib/components/modules/Responsive.svelte';

  const naviList = {
    about: 'About Me',
    works: 'My Works',
    skills: 'My Skills',
    posts: 'My Posts',
  };
</script>

<header id="header">
  <Responsive breakpoint="sm" visable>
    <Menu items={naviList} />
  </Responsive>
  <h1>mouse's Portfolio</h1>
  <div class="items">
    <Responsive breakpoint="sm">
      {#each Object.entries(naviList) as [to, name]}
        <ScrollTo {to}>{name}</ScrollTo>
      {/each}
    </Responsive>
    <ThemeSwitch />
  </div>
</header>

<style lang="postcss">
  #header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    justify-content: space-between;

    padding: 0 4em;

    position: sticky;
    top: 0;
    z-index: 50;
    background-color: inherit;
  }
  h1 {
    font-size: 1.7em;
    font-weight: normal;
  }
  .items {
    column-gap: 0.5em;
    display: flex;
    font-size: 1.1em;
  }
</style>
