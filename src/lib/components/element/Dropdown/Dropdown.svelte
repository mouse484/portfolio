<script lang="ts">
  import { dropdown, item } from './Dropdown.css';

  export let side: 'bottom' | 'right' = 'bottom';
  $: style = side === 'right' ? 'right' : '';
</script>

<div class={dropdown}>
  <div>
    <slot name="root" />
  </div>
  <div class="{item} {style}">
    <slot />
  </div>
</div>
