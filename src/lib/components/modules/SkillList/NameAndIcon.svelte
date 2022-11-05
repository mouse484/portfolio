<script lang="ts">
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import Icon from '$lib/components/element/Icon.svelte';
  import {
    faDiamond,
    faChevronDown,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';

  export let name: string;
  export let icon: string;
  export let nested: number;

  let iconStatus = true;
</script>

<div class="flex gap-2 items-center">
  {#if iconStatus}
    <SimpleIcon name={icon} size={18} bind:status={iconStatus} />
  {:else}
    <Icon icon={faDiamond} size="xs" className="dark:fill-gray-500" />
  {/if}
  <span class="w-max">{name}</span>
  {#if nested}
    <span class="ml-auto">
      <Icon icon={nested <= 1 ? faChevronDown : faChevronRight} size="sm" />
    </span>
  {/if}
</div>
