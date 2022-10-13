<script lang="ts">
  import * as icons from 'simple-icons/icons';

  export let name: string;
  export let size = 24;

  export let status = true;

  let transform = '';

  $: {
    transform = name
      .replace(/ /g, '')
      .replace(/\./g, 'dot')
      .replace(/\+/g, 'plus');
  }

  $: slug = ('si' +
    transform.charAt(0).toUpperCase() +
    transform.slice(1).toLowerCase()) as keyof typeof icons;

  $: icon = icons[slug];

  $: status = !!icon;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="#{icon?.hex}"
  viewBox="0 0 24 24"
  baseProfile={slug}
>
  <title>{icon?.title}</title>
  <path d={icon?.path} />
</svg>
