<script lang="ts">
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

  export let icon: IconDefinition;
  export let href: string;
  export let alt: string;

  import Icon from '$lib/components/modules/Icon.svelte';
</script>

<a {href} aria-label={alt}>
  <slot>
    <Icon {icon} />
  </slot>
</a>

<style>
  a {
    color: currentColor;
  }
</style>
