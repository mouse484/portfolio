<script lang="ts">
  export let name: string;
  export let github: { username: string; repo?: string } = {
    username: 'mouse484',
  };
  export let link: string | undefined = undefined;
  export let libraries: string[];

  if (!github.repo) github.repo = name;
  libraries = libraries || [];
  const githubUrl = `https://github.com/${github.username}/${github.repo}`;

  import Icon from '$lib/components/element/Icon.svelte';
  import ToolTip from '../element/ToolTip.svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import SimpleIcon from '../element/SimpleIcon.svelte';
  import Spaser from '../element/Spaser.svelte';
</script>

<section class="rounded">
  <Spaser size={2} />
  <h4>{name}</h4>
  <Spaser size={2} />
  <div class="text-japanese">
    <slot />
  </div>
  <Spaser size={2} />
  <div class="libraries">
    {#each libraries as library}
      <div class="library rounded">
        <SimpleIcon size={16} name={library} />
        <p>{library}</p>
      </div>
    {/each}
  </div>
  <Spaser size={2} />
  <div>
    <ToolTip value={githubUrl} alt="GitHub Repository">
      <Icon icon={faGithub} />
    </ToolTip>
    {#if link}
      <ToolTip value={link} alt="Link">
        <Icon icon={faLink} />
      </ToolTip>
    {/if}
  </div>
</section>

<style lang="postcss">
  section {
    padding: 1em;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--blue);
    max-width: 24em;
  }
  h4 {
    font-size: 1.5em;
  }
  div.text-japanese {
    padding: 0 2em;
    text-align: justify;
  }
  .libraries {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;

    & .library {
      padding: 0.2em;
      font-size: 0.7em;
      border: 1px solid var(--gray);
      display: flex;
      align-items: center;

      & p {
        margin-left: 0.5em;
      }
    }
  }
</style>
