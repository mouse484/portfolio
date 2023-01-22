<script lang="ts">
  import Dropdown from '$lib/components/elements/Dropdown.svelte';
  import { json } from '@sveltejs/kit';
  import { onMount } from 'svelte';
  import NameAndIcon from './NameAndIcon.svelte';
  import { itemsClass } from './SkillList.css';

  export let skills: { [key: string]: {} };
  export let name: string = '';
  export let nested = 0;

  let useSkills: { [key: string]: {} };
  let icon = name;

  let dropItem: HTMLDivElement;

  $: isOutSide =
    dropItem &&
    dropItem.getBoundingClientRect().right / document.body.clientWidth >= 1;

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
    <Dropdown
      side={isOutSide ? 'bottom' : nested <= 1 ? 'bottom' : 'right'}
      aligin={isOutSide ? 'right' : 'default'}
    >
      <NameAndIcon slot="root" {name} {icon} {nested} />
      <div class={itemsClass} bind:this={dropItem}>
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
