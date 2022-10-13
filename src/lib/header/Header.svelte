<!-- <script lang="ts">
  import ScrollTo from './ScrollTo.svelte';
  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
</script>

<header
  class="float-right m-8 flex gap-4 sticky top-6 bg-white dark:bg-dark z-10 px-4 rounded"
>
  <ScrollTo to="about">About Me</ScrollTo>
  <ScrollTo to="works">My Works</ScrollTo>
  <ScrollTo to="skills">My Skills</ScrollTo>
  <ScrollTo to="posts">My Posts</ScrollTo>
  <ThemeSwitch />
</header> -->
<script lang="ts">
  import ScrollTo from './ScrollTo.svelte';
  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
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
