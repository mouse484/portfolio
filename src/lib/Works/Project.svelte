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

  import Icon from '$lib/Icon.svelte';
  import ToolTip from './ToolTip.svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faLink } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="flex flex-col p-4 px-4 border-blue-400 rounded border-3 z-20">
  <h1 class="text-2xl">{name}</h1>

  <div class="mx-auto mt-4 max-w-80"><slot /></div>

  <div class="mt-auto">
    <p class="mt-4 space-x-1">
      {#each libraries as library}
        <span class="p-1 px-2 text-sm border rounded-sm shadow">
          {library}
        </span>
      {/each}
    </p>

    <div class="flex justify-center gap-4 mt-8">
      <ToolTip value={githubUrl} alt="GitHub Repository">
        <Icon icon={faGithub} />
      </ToolTip>
      {#if link}
        <ToolTip value={link} alt="Link">
          <Icon icon={faLink} />
        </ToolTip>
      {/if}
    </div>
  </div>
</section>
