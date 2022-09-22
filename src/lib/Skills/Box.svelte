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

<div class="flex m-1 rounded shadow shadow-gray-50 min-w-30">
  <div class="flex p-1 m-1">
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
    <div class="flex flex-wrap">
      {#each Object.entries(useSkills) as [skillName, inSkills]}
        <svelte:self name={skillName} skills={inSkills} />
      {/each}
    </div>
  {/if}
</div>
