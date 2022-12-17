<script lang="ts">
  const sizeList = {
    2: '2em',
    4: '4em',
  };
  export let size: keyof typeof sizeList = 2;
  export let width = false;
</script>

<div style="{width ? 'width' : 'height'}: {sizeList[size]};" />
