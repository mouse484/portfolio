<script lang="ts">
  import SimpleIcon from '$lib/SimpleIcon.svelte';

  export let name = '';
  export let skills = {};
  let icon = name;

  $: {
    if (skills.hasOwnProperty('_icon')) {
      icon = (skills as { _icon: string })._icon || name;
    }
  }
</script>

<div class="p-5 rounded border-blue-400 border-3">
  <SimpleIcon name={icon} />
  <div>{name}</div>
  {#if Object.keys(skills).length > (skills.hasOwnProperty('_icon') ? 1 : 0)}
    {#each Object.entries(skills) as [skillName, inSkills]}
      <svelte:self name={skillName} skills={inSkills} />
    {/each}
  {/if}
</div>
