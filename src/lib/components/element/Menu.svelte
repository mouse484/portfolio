<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ScrollTo from '$lib/components/element/ScrollTo.svelte';

  let visable = false;
  export let items: { [key: string]: string };
</script>

<div class="flex-none">
  <button on:click={() => (visable = !visable)}>
    <Icon icon={faBars} />
  </button>
  {#if visable}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="absolute z-50 rounded-md dark:bg-zinc-700"
      on:click={() => (visable = false)}
    >
      {#each Object.entries(items) as [to, name]}
        <div class="p-1 m-1 rounded-md border border-stone-500">
          <ScrollTo class="px-3" {to}>
            <p class="text-justify">{name}</p>
          </ScrollTo>
        </div>
      {/each}
    </div>
  {/if}
</div>
