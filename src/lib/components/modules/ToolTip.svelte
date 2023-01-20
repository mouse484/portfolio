<script lang="ts">
  import Link from '../element/Link.svelte';
  import { popupClass, tooltipClass } from './ToolTip.css';
  export let value: string;
  export let alt: string;
</script>

<Link
  --color="inherit"
  href={value}
  target="_blank"
  rel="noopener noreferrer"
  ariaLabel={alt}
>
  <div class={tooltipClass}>
    <slot />
    <span class={popupClass}>
      {value}
    </span>
  </div>
</Link>
