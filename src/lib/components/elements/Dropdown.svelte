<script lang="ts">
  import { aliginRight, dropdown, item, right } from './Dropdown.css';

  export let side: 'bottom' | 'right' = 'bottom';
  export let aligin: 'default' | 'right' = 'default';
</script>

<div class={dropdown}>
  <div>
    <slot name="root" />
  </div>
  <div
    class="
    {item}
    {side === 'right' && right}
    {aligin === 'right' && aliginRight}
    "
  >
    <slot />
  </div>
</div>
