<script lang='ts'>
  import type { Snippet } from 'svelte';

  interface Props {
    name: string
    header?: Snippet
    children: Snippet
  }
  const { name, header, children }: Props = $props();
</script>

<section data-name={name}>
  {#if header}
    {@render header()}
  {:else}
    <h2>{name}</h2>
  {/if}
  <div>
    {@render children()}
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-rows: 1fr 8fr;

    height: 100%;
    padding: 4rem 5.2rem;

    background-color: var(--surface-container);
  }

  h2 {
    font-size: 1.8rem;
  }

  div {
    display: grid;
    width: 100%;
    padding-left: 0.5rem;
  }

  @media (width <= 768px) {
    section {
      padding: 2rem;
    }

    div {
      height: 88%;
    }
  }
</style>
