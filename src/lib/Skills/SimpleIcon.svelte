<script lang="ts">
  import icons from 'simple-icons';

  export let name: string;

  $: icon = icons.get(name);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="#{icon.hex}"
  viewBox="0 0 24 24"
>
  <title>{icon?.title}</title>
  <path d={icon?.path} />
</svg>
