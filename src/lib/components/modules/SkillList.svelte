<script lang="ts">
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import Icon from '$lib/components/element/Icon.svelte';
  import {
    faEllipsis,
    faChevronDown,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';

  export let skills: { [key: string]: {} };
  export let name: string = '';
  export let nested = true;
  export let isRoot = false;

  let useSkills: { [key: string]: {} };
  let icon = name;
  let iconStatus = true;
  let vis = false;

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
  <div class="relative">
    <button
      class="flex flex-nowrap items-center p-2 m-1 min-w-min rounded-md border grow"
      on:click={() => (vis = !vis)}
    >
      {#if iconStatus}
        <SimpleIcon name={icon} size={18} bind:status={iconStatus} />
      {:else}
        <Icon icon={faEllipsis} />
      {/if}
      <span class="px-2">{name}</span>
      {#if nested}
        <span class="ml-auto">
          <Icon icon={isRoot ? faChevronDown : faChevronRight} size="sm" />
        </span>
      {/if}
    </button>

    {#if nested}
      <div class="absolute top-14 z-50 {vis ? 'visible' : 'invisible'}">
        {#each Object.entries(useSkills) as [skillName, next]}
          <div class="background-color">
            <svelte:self
              name={skillName}
              skills={next}
              nested={isNested(next)}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>
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
