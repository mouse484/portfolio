<script>
  import 'virtual:windi.css';
  import '../app.css';

  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
</script>

<div class="dark:bg-hex-2d2d2d dark:text-blue-gray-200">
  <header class="float-right m-8">
    <ThemeSwitch />
  </header>
  <slot />
</div>
