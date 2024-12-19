<script lang='ts'>
  interface Props {
    list: string[]
    sections: HTMLElement[]
  }

  const { list, sections }: Props = $props();

  let activeIndex = $state(0);

  $effect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeIndex = sections.indexOf(entry.target as HTMLElement);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      observer.observe(section);
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
        <button
          onclick={() => {
            if (activeIndex === index) {
              return;
            }
            sections[index].scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {item}
        </button>
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

  button {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: var(--primary);
  }

  li[data-active='true'] > button {
    cursor: default;
  }

  button::before {
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

  li[data-active='false'] > button:hover::before {
    left: 100%;
  }

</style>
