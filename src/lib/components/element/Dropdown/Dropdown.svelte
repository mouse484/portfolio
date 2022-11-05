<script lang="ts">
  export let side: 'bottom' | 'right' = 'bottom';
  $: style = side === 'right' ? 'left-full -top-2' : '';
</script>

<div class="relative">
  <div class="peer">
    <slot name="name" />
  </div>
  <div
    class="absolute invisible z-50 p-2 rounded-md peer-hover:visible hover:visible background-color {style}"
  >
    <slot />
  </div>
</div>
