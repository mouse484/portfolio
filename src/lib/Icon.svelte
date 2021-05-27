<script lang="ts">
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

  import Fa from 'svelte-fa';
  export let icon: IconDefinition;
</script>

<Fa {icon} size="lg" />
