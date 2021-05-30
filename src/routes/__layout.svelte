<script>
  import 'virtual:windi.css';
  import '../app.css';

  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
</script>

<div class="dark:bg-dark dark:text-gray-50">
  <header class="float-right m-8">
    <ThemeSwitch />
  </header>
  <slot />
</div>
