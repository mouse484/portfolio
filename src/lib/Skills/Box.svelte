<script lang="ts">
  import SimpleIcon from '$lib/SimpleIcon.svelte';

  export let name = '';
  export let skills = {};
  let icon = name;
  let useSkills: {};

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

<div class="p-5 rounded border-blue-400 border-3">
  <SimpleIcon name={icon} />
  <div>{name}</div>
  {#if Object.keys(useSkills).length}
    {#each Object.entries(useSkills) as [skillName, inSkills]}
      <svelte:self name={skillName} skills={inSkills} />
    {/each}
  {/if}
</div>
