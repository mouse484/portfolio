<script lang="ts">
  import ScrollTo from './ScrollTo.svelte';
  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
</script>

<header class="float-right m-8 flex gap-4">
  <ScrollTo to="about">About Me</ScrollTo>
  <ScrollTo to="works">My Works</ScrollTo>
  <ScrollTo to="skills">My Skills</ScrollTo>
  <ScrollTo to="posts">My Posts</ScrollTo>
  <ThemeSwitch />
</header>
