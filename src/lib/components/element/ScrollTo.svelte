<script lang="ts">
  export let to: string;

  let classNames = '';
  export { classNames as class };

  const scroll = () => {
    document.getElementById(to)?.firstElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
</script>

<button on:click={scroll} class="cursor-pointer {classNames}">
  <slot />
</button>
