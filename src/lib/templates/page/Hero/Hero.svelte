<script lang="ts">
  import MyLinks from '$lib/templates/page/Hero/MyLinks.svelte';
  import MoveArrow from '$lib/components/elements/MoveArrow.svelte';
  import Spaser from '$lib/components/elements/Spaser.svelte';
  import { h } from './Hero.css';
  import { section } from '../section.css';
</script>

<section class={section}>
  <Spaser size={'20vh'} />
  <h1 class={h[1]}>Hi, I'm Mouse</h1>
  <h3 class={h[3]}>I'm a student in Japan.</h3>
  <Spaser size={2} />
  <MyLinks />
  <Spaser size={12} />
  <MoveArrow to="about" />
</section>
