<script lang='ts'>
  import Navigation from '$lib/components/top/Navigation.svelte';
  import { sections } from '$lib/sections';
  import { animate, scroll } from 'motion';

  let mainElement = $state<HTMLElement>();
  const sectionElements = $state<HTMLElement[]>([]);

  $effect(() => {
    const cancels: (() => void)[] = [];
    sectionElements.forEach((section) => {
      const calcel = scroll(
        animate(
          section,
          {
            'scale': [0.4, 1, 1, 0.4],
            'rotateX': [100, 0, 0, -100],
            'border-radius': ['6rem', '0', '0', '6rem'],
          } as Parameters<typeof animate>[1],
          { duration: 1000, ease: 'linear' },
        ),
        {
          container: mainElement,
          target: section,
          offset: ['start end', 'end end', 'start start', 'end start'],
        },
      );
      cancels.push(calcel);
    });

    return () => {
      cancels.forEach(cancel => cancel());
    };
  });
</script>

<main bind:this={mainElement}>
  {#each sections as { name, component: Component }, index}
    <div>
      <section data-name={name} bind:this={sectionElements[index]}>
        <Component></Component>
      </section>
    </div>
  {/each}

  <aside>
    <Navigation elements={sectionElements}></Navigation>
  </aside>
</main>

<style>
  main {
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;

    position: relative;

    overflow-y: scroll;

    height: 100dvh;
  }

  main div {
    scroll-snap-align: start;
    height: 100%;
  }

  div section {
    display: grid;
    place-content: center;
    place-items: center;

    height: 100%;
    padding: 2rem 7rem;

    background-color: var(--surface-container);
  }

  aside {
    position: fixed;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  @media (width <= 768px) {
    aside {
      top: auto;
      bottom: 2rem;
      transform: none;
    }

    div section {
      padding: 2rem;
    }
  }
</style>
