<script lang="ts">
  const sizeList = {
    2: '2em',
    4: '4em',
    16: '16em',
    24: '24em',
  };
  export let size: keyof typeof sizeList;
  export let width = false;
</script>

<div style="{width ? 'width' : 'height'}: {sizeList[size]};" />
