<script lang="ts">
  import ScrollTo from '../components/element/ScrollTo.svelte';
  import ThemeSwitch from '$lib/components/element/ThemeSwitch.svelte';
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from 'flowbite-svelte';

  const naviList = {
    about: 'About Me',
    works: 'My Works',
    skills: 'My Skills',
    posts: 'My Posts',
  };
</script>

<header class="sticky top-0 border-b z-50 background-color">
  <Navbar let:hidden let:toggle color="">
    <NavBrand>mouse's Portfolio</NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      {#each Object.entries(naviList) as [to, name]}
        <NavLi><ScrollTo {to}>{name}</ScrollTo></NavLi>
      {/each}
      <NavLi><ThemeSwitch /></NavLi>
    </NavUl>
  </Navbar>
</header>
