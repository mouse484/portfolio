<script lang="ts">
  import SimpleIcon from '$lib/SimpleIcon.svelte';
  import Icon from '$lib/Icon.svelte';
  import { faCircle } from '@fortawesome/free-solid-svg-icons';

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

<div class="m-3 rounded border-2 border-blue-200">
  <div class="flex m-3 space-x-2">
    <div class="">
      {#if iconStatus}
        <SimpleIcon name={icon} bind:status={iconStatus} />
      {:else}
        <Icon icon={faCircle} />
      {/if}
    </div>
    <div class="pl-2">{name}</div>
  </div>

  {#if Object.keys(useSkills).length}
    <div class="flex flex-wrap gap-4 justify-center items-center ml-6">
      {#each Object.entries(useSkills) as [skillName, inSkills]}
        <svelte:self name={skillName} skills={inSkills} />
      {/each}
    </div>
  {/if}
</div>
