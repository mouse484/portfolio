<script module lang='ts'>
  export const name = 'Articles';
</script>

<script lang='ts'>
  import Section from '$lib/components/Section.svelte';
  import Icon from '@iconify/svelte';

  const example = {
    title: 'Example サンプル記事...',
    description: 'This is an example article.',
    date: '2021-01-01',
    url: 'https://example.com',
  };
  const articles = Array.from({ length: 5 }, () => example);
</script>

<Section {name}>
  {#each articles as article}
    <article>
      <time>{article.date}</time>
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
    max-width: 768px;
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

    background-color: var(--primary);

    transition: transform 0.25s;
  }

  :hover::after {
    transform-origin: left top;
    transform: scaleX(1);
  }
</style>
