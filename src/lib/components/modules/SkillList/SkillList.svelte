<script lang="ts">
  import Dropdown from '$lib/components/element/Dropdown/Dropdown.svelte';
  import NameAndIcon from './NameAndIcon.svelte';

  export let skills: { [key: string]: {} };
  export let name: string = '';
  export let nested = 0;

  let useSkills: { [key: string]: {} };
  let icon = name;

  const isNested = (skills: typeof useSkills) =>
    Object.keys(skills).length > (skills.hasOwnProperty('_icon') ? 1 : 0)
      ? nested + 1
      : 0;

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

{#if name}
  {#if nested}
    <Dropdown side={nested <= 1 ? 'bottom' : 'right'}>
      <NameAndIcon slot="name" {name} {icon} {nested} />
      <div class="p-1 drop-shadow-2xl background-color">
        {#each Object.entries(useSkills) as [skillName, next]}
          <svelte:self name={skillName} skills={next} nested={isNested(next)} />
        {/each}
      </div>
    </Dropdown>
  {:else}
    <NameAndIcon {name} {icon} nested={0} />
  {/if}
{:else}
  {#each Object.entries(useSkills) as [skillName, next]}
    <svelte:self name={skillName} skills={next} nested={isNested(next)} />
  {/each}
{/if}
