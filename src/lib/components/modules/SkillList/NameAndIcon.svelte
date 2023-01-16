<script lang="ts">
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import Icon from '$lib/components/element/Icon.svelte';
  import {
    faSquare,
    faChevronDown,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  import { nameAndIcon, nameClass } from './SkillList.css';
  import { flex } from '$lib/style/utils.css';

  export let name: string;
  export let icon: string;
  export let nested: number;

  let iconStatus: boolean;
</script>

<div class={nameAndIcon}>
  <div class={flex}>
    {#if iconStatus === undefined || iconStatus}
      <SimpleIcon name={icon} size={18} bind:status={iconStatus} />
    {:else}
      <Icon icon={faSquare} size="sm" />
    {/if}
    <span class={nameClass}>{name}</span>
  </div>
  {#if nested}
    <Icon icon={nested <= 1 ? faChevronDown : faChevronRight} size="sm" />
  {/if}
</div>
