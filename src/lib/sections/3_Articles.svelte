<script module lang='ts'>
  export const name = 'Articles';
</script>

<script lang='ts'>
  import Section from '$lib/components/Section.svelte';

  const example = {
    title: 'Example',
    description: 'This is an example article.',
    date: '2021-01-01',
    url: 'https://example.com',
  };
  const articles = Array.from({ length: 5 }, () => example);
</script>

<Section {name}>
  {#each articles as article}
    <article>
      <a href={article.url}><h1>{article.title}</h1></a>
      <p>{article.date}</p>
    </article>
  {/each}
</Section>

<style>
  article {
    display: flex;
    justify-content: space-between;
    width: 768px;
    margin: 0 auto;
  }
</style>
