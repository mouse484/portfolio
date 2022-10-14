<script lang="ts">
  export let to: string;

  const scroll = () => {
    document.getElementById(to)?.firstElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
</script>

<button on:click={scroll} class="cursor-pointer">
  <slot />
</button>
