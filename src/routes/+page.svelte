<script lang='ts'>
  import { animate, scroll } from 'motion'

  const list = ['Profile', 'About', 'Projects', 'Blog']

  let mainElement = $state<HTMLElement>()
  const sections = $state<HTMLElement[]>([])

  $effect(() => {
    const cancels: (() => void)[] = []
    sections.forEach((section) => {
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
      )
      cancels.push(calcel)
    })

    return () => {
      cancels.forEach(cancel => cancel())
    }
  })
</script>

<main bind:this={mainElement}>
  {#each list as item, index}
    <div>
      <section bind:this={sections[index]}>
        {item}
      </section>
    </div>
  {/each}
</main>

<style>
  main {
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100dvh;
  }

  main div {
    scroll-snap-align: start;
    height: 100%;
  }

  div section {
    display: grid;
    place-items: center;
    height: 100%;
    background-color: var(--surface-container);
  }
</style>
