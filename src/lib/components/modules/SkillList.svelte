<script lang="ts">
  import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import Icon from '$lib/components/element/Icon.svelte';
  import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

  export let skills: { [key: string]: {} };
  export let name: string = '';
  export let nested = true;
  export let isRoot = false;

  let useSkills: { [key: string]: {} };
  let icon = name;
  let iconStatus = true;

  const isNested = (skills: typeof useSkills) =>
    Object.keys(skills).length > (skills.hasOwnProperty('_icon') ? 1 : 0);

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
  <Button color="alternative" class="flex-1 m-1 w-full outline-none">
    {#if iconStatus}
      <SimpleIcon name={icon} size={18} bind:status={iconStatus} />
    {:else}
      <Icon icon={faEllipsis} />
    {/if}
    <span class="pl-2">{name}</span>
    {#if nested}
      <Chevron placement={isRoot ? 'bottom' : 'right'} />
    {/if}
  </Button>

  {#if nested}
    <Dropdown placement={isRoot ? 'bottom' : 'right'} class="z-50">
      {#each Object.entries(useSkills) as [skillName, next]}
        <DropdownItem class="background-color">
          <svelte:self name={skillName} skills={next} nested={isNested(next)} />
        </DropdownItem>
      {/each}
    </Dropdown>
  {/if}
{:else}
  <!-- init -->
  {#each Object.entries(useSkills) as [skillName, next]}
    <svelte:self
      name={skillName}
      skills={next}
      nested={isNested(next)}
      isRoot
    />
  {/each}
{/if}
