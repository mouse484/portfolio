<script module lang='ts'>
  export const name = 'Articles';
</script>

<script lang='ts'>
  import Section from '$lib/components/Section.svelte';
  import Icon from '@iconify/svelte';

  let articles = $state<{ title: string, date: string, url: string }[]>([]);

  async function fetchRss() {
    const response = await fetch('https://blog.mousedev.page/recent.json', {
      mode: 'cors',
    });
    const json = await response.json();
    articles = json;
  }

  $effect(() => {
    fetchRss();
  });
</script>

<Section {name}>
  {#each articles as article}
    <article>
      <time>{article.date.replaceAll('-', '.')}</time>
      <a href={article.url} target='_blank' rel='noopener'>
        <h1>{article.title}</h1>
        <Icon icon='material-symbols:open-in-new' />
      </a>
    </article>
  {/each}
  <a href='https://blog.mousedev.page'>Read More...</a>
</Section>

<style>
  article {
    width: 100%;
    max-width: calc(768px * 0.8);
    margin: 0 auto;
  }

  article > a {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  a[href="https://blog.mousedev.page"] {
    position: relative;

    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    padding: 0.2rem;
  }

  ::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: right top;
    transform: scaleX(0);

    width: 100%;
    height: 2px;

    background-color: var(--color-primary);

    transition: transform 0.25s;
  }

  :hover::after {
    transform-origin: left top;
    transform: scaleX(1);
  }
</style>
