<script lang="ts">
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
</header>
