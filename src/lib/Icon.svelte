<script lang="ts">
  export const ssr = false;
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

  // https://fontawesome.com/docs/web/style/size
  const size = { lg: '1.25em' };

  export let icon: IconDefinition;
  const {
    icon: [width, height, , _unicode, d],
  } = icon;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 {width} {height}"
  width={size.lg}
  height={size.lg}
  class="fill-black dark:fill-white"
>
  <path d={typeof d === 'string' ? d : d.join('')} />
</svg>
