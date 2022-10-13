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

<section
  class="rounded flex flex-col border-blue-400 border-2 p-4 px-4 z-20 flex-1 max-w-xs"
>
  <h1 class="text-2xl">{name}</h1>

  <div class="mx-auto mt-4"><slot /></div>

  <div class="mt-auto">
    <p class="space-x-1 mt-4">
      {#each libraries as library}
        <span class="border rounded-sm shadow text-sm p-1 px-2">
          {library}
        </span>
      {/each}
    </p>

    <div class="flex mt-8 gap-4 justify-center">
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
