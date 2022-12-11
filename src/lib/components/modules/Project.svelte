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
</script>

<section
  class="flex z-20 flex-col flex-1 p-4 min-w-[18rem] max-w-xs rounded border-2 border-blue-400"
>
  <h1 class="text-2xl">{name}</h1>

  <div class="mx-6 mt-8 text-justify text-japanese">
    <slot />
  </div>

  <div class="mt-auto">
    <div class="flex flex-wrap justify-center m-4 space-x-1">
      {#each libraries as library}
        <div
          class="flex px-2 py-1 m-1 text-sm rounded-md border shadow border-slate-800"
        >
          <SimpleIcon size={16} name={library} />
          <p class="ml-2 whitespace-nowrap">{library}</p>
        </div>
      {/each}
    </div>

    <div class="flex gap-4 justify-center mt-8">
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
