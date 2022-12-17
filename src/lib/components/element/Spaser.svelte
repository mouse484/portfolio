<script lang="ts">
  const sizeList = {
    2: '2em',
    4: '4em',
    16: '16em',
    24: '24em',
  } as const;
  export let size: keyof typeof sizeList | string;
  export let width = false;
</script>

<div
  style="{width ? 'width' : 'height'}: {typeof size === 'number'
    ? sizeList[size]
    : size};"
/>
