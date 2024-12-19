<script lang='ts'>
  import '$lib/styles/style.css';

  const { children } = $props();
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

{@render children()}
