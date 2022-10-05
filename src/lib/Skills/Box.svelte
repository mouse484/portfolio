<script lang="ts">
  import SimpleIcon from '$lib/SimpleIcon.svelte';
  import Icon from '$lib/Icon.svelte';
  import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

  export let name = '';
  export let skills = {};
  export let nested = false;

  let icon = name;
  let useSkills: { [key: string]: {} };
  let iconStatus = true;
  $: {
    if (skills.hasOwnProperty('_icon')) {
      const { _icon, ...others } = skills as { _icon: string };
      icon = _icon || name;
      useSkills = others;
    } else {
      useSkills = skills;
    }
  }
</script>

<div
  class="flex flex-wrap rounded  p-1.5 mx-1 ml-2 w-full text-base {nested ||
    'border'}"
>
  <!-- item 1 -->
  <div class="flex items-center mt-0.5 mb-1">
    <div class="">
      {#if iconStatus}
        <SimpleIcon name={icon} size={18} bind:status={iconStatus} />
      {:else}
        <Icon icon={faEllipsis} />
      {/if}
    </div>
    <div class="pl-2">{name}</div>
  </div>

  <!-- item 2+n -->
  {#if Object.keys(useSkills).length}
    <div class="flex flex-wrap gap-3 w-full">
      {#each Object.entries(useSkills) as [skillName, inSkills]}
        <div class="min-w-1/6">
          <svelte:self
            name={skillName}
            skills={inSkills}
            nested={Object.keys(inSkills).length <=
              (inSkills.hasOwnProperty('_icon') ? 1 : 0)}
          />
        </div>
      {/each}
    </div>
  {/if}
</div>
