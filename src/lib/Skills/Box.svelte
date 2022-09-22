<script lang="ts">
  import SimpleIcon from '$lib/SimpleIcon.svelte';
  import Icon from '$lib/Icon.svelte';
  import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

  export let name = '';
  export let skills = {};
  let icon = name;
  let useSkills: {};
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

<div class="flex p-1.5 mx-1 ml-2 text-base border-b-1">
  <!-- item 1 -->
  <div class="flex items-center mt-0.5">
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
    <div class="flex flex-wrap">
      {#each Object.entries(useSkills) as [skillName, inSkills]}
        <svelte:self name={skillName} skills={inSkills} />
      {/each}
    </div>
  {/if}
</div>
