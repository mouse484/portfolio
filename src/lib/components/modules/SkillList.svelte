<script lang="ts">
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import Icon from '$lib/components/element/Icon.svelte';
  import {
    faEllipsis,
    faChevronDown,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  import Dropdown from '$lib/components/element/Dropdown/Dropdown.svelte';

  export let skills: { [key: string]: {} };
  export let name: string = '';
  export let nested = 0;

  let useSkills: { [key: string]: {} };
  let icon = name;
  let iconStatus = true;
  // let vis = false;

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
  <Dropdown side={nested <= 1 ? 'bottom' : 'right'}>
    <div slot="name" class="flex gap-2 items-center">
      {#if iconStatus}
        <SimpleIcon name={icon} size={18} bind:status={iconStatus} />
      {:else}
        <Icon icon={faEllipsis} />
      {/if}
      <span>{name}</span>
      {#if nested}
        <span class="ml-auto">
          <Icon icon={nested <= 1 ? faChevronDown : faChevronRight} size="sm" />
        </span>
      {/if}
    </div>
    {#if nested}
      {#each Object.entries(useSkills) as [skillName, next]}
        <svelte:self name={skillName} skills={next} nested={isNested(next)} />
      {/each}
    {/if}
  </Dropdown>
{:else}
  {#each Object.entries(useSkills) as [skillName, next]}
    <svelte:self name={skillName} skills={next} nested={isNested(next)} />
  {/each}
{/if}
