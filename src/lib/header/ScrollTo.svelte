<script lang="ts">
  export let to: string;

  const scroll = () => {
    document.getElementById(to)?.firstElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
</script>

<div on:click={scroll} class="cursor-pointer">
  <slot />
</div>
