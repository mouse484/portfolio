<script lang="ts">
  export const ssr = false;
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
  import { iconClass } from './Icon.css';

  // https://fontawesome.com/docs/web/style/size
  const iconSize = {
    '2xs': '0.625em',
    xs: '0.75em',
    sm: '0.875em',
    lg: '1.25em',
    xl: '1.5em',
    '2xl': '2em',
  };

  export let icon: IconDefinition;
  export let size: keyof typeof iconSize = 'lg';

  const {
    icon: [width, height, , _unicode, d],
  } = icon;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 {width} {height}"
  width={iconSize[size]}
  height={iconSize[size]}
  class={iconClass}
>
  <path d={typeof d === 'string' ? d : d.join('')} />
</svg>
