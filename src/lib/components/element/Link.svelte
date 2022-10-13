<script lang="ts">
  export let href: string;
</script>

<a {href} class="text-blue-600 dark:text-light-blue-500 hover:underline">
  <slot />
</a>
