<script lang="ts">
  import Icon from '$lib/components/element/Icon.svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ScrollTo from '$lib/components/modules/ScrollTo.svelte';
  import { buttonClass, itemClass, itemsClass } from './Menu.css';

  let visable = false;
  export let items: { [key: string]: string };
</script>

<button class={buttonClass} on:click={() => (visable = !visable)}>
  <Icon icon={faBars} />
</button>
{#if visable}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class={itemsClass} on:click={() => (visable = false)}>
    {#each Object.entries(items) as [to, name]}
      <div class={itemClass}>
        <ScrollTo {to}>
          <p>{name}</p>
        </ScrollTo>
      </div>
    {/each}
  </div>
{/if}
