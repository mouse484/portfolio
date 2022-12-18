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

<section class="rounded flex">
  <div>
    <h4>{name}</h4>
    <Spaser size={2} />
    <div class="text-japanese">
      <slot />
    </div>
  </div>
  <div>
    <div class="libraries flex flex-wrap">
      {#each libraries as library}
        <div class="library rounded">
          <SimpleIcon size={16} name={library} />
          <p>{library}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="project-links flex">
    <Spaser size={2} />
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
    padding: 3em 1.5em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 2px solid var(--blue);
    max-width: 24em;
    /* プロジェクトのサイズを同じにする */
    flex: 1;
  }
  h4 {
    font-size: 1.5em;
    text-align: center;
  }
  div.text-japanese {
    padding: 0 2em;
    text-align: justify;
  }
  .libraries {
    justify-content: center;

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
  .project-links {
    justify-content: center;
  }
</style>
