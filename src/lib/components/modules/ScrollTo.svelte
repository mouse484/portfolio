<script lang="ts">
  import BorderLessButton from '$lib/components/element/Button/Borderless.svelte';

  export let to: string;

  const scroll = () => {
    document.getElementById(to)?.firstElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
</script>

<BorderLessButton on:click={scroll}>
  <slot />
</BorderLessButton>
