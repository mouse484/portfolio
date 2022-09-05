<script>
  import SimpleIcon from '$lib/SimpleIcon.svelte';

  export let name = '';
  export let skills = {};
</script>

<div class="p-5 rounded border-blue-400 border-3">
  <SimpleIcon {name} />
  <div>{name}</div>
  {#if Object.keys(skills).length}
    {#each Object.entries(skills) as [skillName, inSkills]}
      <svelte:self name={skillName} skills={inSkills} />
    {/each}
  {/if}
</div>
