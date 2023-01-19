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

  import Icon from '$lib/components/modules/Icon.svelte';
  import ToolTip from '../element/ToolTip.svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import SimpleIcon from '../element/SimpleIcon.svelte';
  import Spaser from '../element/Spaser.svelte';
  import {
    section,
    h4,
    librariesClass,
    libraryClass,
    projectLinks,
  } from './Project.css';
</script>

<section class={section}>
  <div>
    <h4 class={h4}>{name}</h4>
    <Spaser size={2} />
    <div class="text-japanese">
      <slot />
    </div>
  </div>
  <div>
    <div class={librariesClass}>
      {#each libraries as library}
        <div class={libraryClass}>
          <SimpleIcon size={16} name={library} />
          <p>{library}</p>
        </div>
      {/each}
    </div>
  </div>
  <Spaser size={2} />
  <div class={projectLinks}>
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
