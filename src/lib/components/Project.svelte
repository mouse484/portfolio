<script lang='ts'>
  import Icon from '@iconify/svelte';

  interface Props {
    name: string
    description: string
    status?: string
    libraries: string[]
    repository?: `${string}/${string}`
    url?: string
  }

  const { name, description, status, libraries, repository, url }: Props = $props();

  const libraryNameToIconName = (library: string) => {
    return library.toLowerCase().replaceAll(/\s+/g, '').replace('.', 'dot');
  };
</script>

<article>
  <div>
    <h1>{name}</h1>
    {#if status}
      <span>{status}</span>
    {/if}
  </div>

  <p>{description}</p>

  <div>
    {#each libraries as library}
      <p>
        <Icon icon='simple-icons:{libraryNameToIconName(library)}'></Icon>
        {library}
      </p>
    {/each}
  </div>

  <div>
    {#if repository}
      <a href='https://github.com/{repository}' target='_blank' rel='noopener noreferrer'>
        <Icon icon='simple-icons:github'></Icon>
        {repository}
      </a>
    {/if}

    {#if url}
      <a href='https://{url}' target='_blank' rel='noopener noreferrer'>
        <Icon icon='mdi:link'></Icon>
        {url}
      </a>
    {/if}
  </div>
</article>

<style>
article {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;

  padding: 1em 1.8em;

  color: var(--on-secondary-container);

  background-color: color-mix(in srgb, var(--secondary-container) 70%, transparent);
  border-radius: 1em;
}

article > :not(div:first-of-type) {
  margin-left: 0.5rem;
}

div:first-of-type {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  font-size: 1.5em;
}

span {
  display: flow-root;

  padding: 0.2em 0.5em;

  font-size: 0.875em;
  color: var(--on-tertiary-container);

  background-color: var(--tertiary-container);
  border-radius: 0.5em;
}

div:nth-of-type(2) {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em 1.2em;
}

div:nth-of-type(3) {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

div a,
div p {
  display: flex;
  gap: 0.5em;
  align-items: center;
}
</style>
