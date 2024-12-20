<script lang='ts'>
  import ScrollButton from '../ScrollButton.svelte';

  interface Props {
    elements: HTMLElement[]
  }

  const { elements }: Props = $props();

  const list = $derived(elements.map(element => element.dataset.name!));
  let activeIndex = $state(0);

  $effect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeIndex = elements.indexOf(entry.target as HTMLElement);
        }
      });
    }, { threshold: 0.5 });

    elements.forEach((slement) => {
      observer.observe(slement);
    });

    return () => {
      observer.disconnect();
    };
  });
</script>

<nav>
  <ul>
    {#each list as item, index}
      <li data-active={activeIndex === index}>
        <ScrollButton element={elements[index]} disabled={activeIndex === index}>
          {item}
        </ScrollButton>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  nav > ul > li {
    font-size: 0.8rem;
  }

  nav > ul > li[data-active='true'] {
    font-size: 1.2rem;
    transition: font-size 0.8s ease;
  }

  li > :global(button) {
    position: relative;
    overflow: hidden;
    color: var(--primary);
  }

  li[data-active='true'] > :global(button) {
    cursor: default;
  }

  li > :global(button)::before {
    content: '';

    position: absolute;
    top: 0;
    left: -100%;

    width: 100%;
    height: 100%;

    opacity: 0.5;
    background-color: var(--surface-container);

    transition: left 0.5s linear;
  }

  li[data-active='false'] > :global(button):hover::before {
    left: 100%;
  }

</style>
