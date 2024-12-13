<script lang='ts'>
  import { animate, scroll } from 'motion'

  let mainElement = $state<HTMLElement>()
  const sections = $state<HTMLElement[]>([])

  $effect(() => {
    sections.forEach((section) => {
      scroll(
        animate(
          section,
          { scale: [0.4, 1, 1, 0.4], rotateX: [100, 0, 0, -100] },
          { duration: 1000, ease: 'linear' },
        ),
        {
          container: mainElement,
          target: section,
          offset: ['start end', 'end end', 'start start', 'end start'],
        },
      )
    })
  })
</script>

<main bind:this={mainElement}>
  {#each Array.from({ length: 4 }) as _, index}
    <section>
      <div bind:this={sections[index]}>
        {index + 1}
      </div>
    </section>
  {/each}
</main>

<style>
main {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;

  position: relative;

  overflow: hidden scroll;

  height: 100vh;

  perspective: 1000px;
}

section {
  scroll-snap-align: start;
  height: 100%;
  background-color: #8a2be2;
  border: 2px solid #f00;
}

section > div {
  transform-style: preserve-3d;

  display: grid;
  place-content: center;

  height: 100%;

  background-color: #d6ffc3;
}
</style>
