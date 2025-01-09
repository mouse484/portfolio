<script lang='ts' module>
  export const name = 'Projects';
</script>

<script lang='ts'>
  import Project from '$lib/components/Project.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Section {name}>
  <div>
    <Project
      name='Astraea'
      description='Nostr Client'
      status='rewrinting'
      libraries={['Svelte', 'TypeScript']}
      repository='mouse484/astraea'
      url='astraea.mousedev.page'
    ></Project>

    <Project
      name='Portfolio'
      description='This website'
      libraries={['Svelte', 'TypeScript']}
      repository='mouse484/portfolio'
      url='portfolio.mousedev.page'
    ></Project>

    <Project
      name='Config'
      description='Monorepo of my configurations.'
      libraries={[
        'ESLint',
        'Stylelint',
        'Prettier',
        'Renovate',
        'Semantic Release',
      ]}
      repository='mouse484/config'
    ></Project>

    <Project
      name='Ecstar'
      description='The easist TypeScript Discord bot framework.'
      status='unmaintained'
      libraries={['Discord', 'Node.js', 'TypeScript']}
      repository='Ecstarjs/Ecstar'
      url='ecstar.js.org'
    ></Project>
  </div>
</Section>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;

    height: 100%;
  }

  @media (width <= 768px) {
    div {
      scroll-snap-type: x mandatory;
      overflow: auto hidden;
      grid-template-columns: repeat(2, minmax(70vw, 1fr));
      width: 100%;
    }

    div > :global(*) {
      scroll-snap-align: start;
    }
  }
</style>
