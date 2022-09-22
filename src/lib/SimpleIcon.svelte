<script lang="ts">
  import icons from 'simple-icons';

  export let name: string;
  export let size = 24;

  export let status = true;

  $: slug = name
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/\./g, 'dot')
    .replace(/\+/g, 'plus');

  $: icon = icons.Get(slug);

  $: status = !!icon;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="#{icon?.hex}"
  viewBox="0 0 24 24"
>
  <title>{icon?.title}</title>
  <path d={icon?.path} />
</svg>
