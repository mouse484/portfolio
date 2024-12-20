<script module lang='ts'>
  export const name = 'Profile';
</script>
<script lang='ts'>
  import ScrollButton from '$lib/components/ScrollButton.svelte';
  import Icon from '@iconify/svelte';

  let nextElement = $state<HTMLElement | null>(null);

  $effect(() => {
    nextElement = document.querySelector<HTMLElement>('div:has(section):nth-child(2) > section');
  });
</script>

<h1>
  Yuto Nagata Portofolio
</h1>

<div>
  <a href='https://github.com/mouse484'>
    <Icon icon='simple-icons:github'></Icon>
    mouse484
  </a>
  <a href='https://x.com/mouse_484'>
    <Icon icon='simple-icons:x'></Icon>
    mouse_484
  </a>
  <a href='mailto:me@mousedev.page'>
    <Icon icon='material-symbols:mail-rounded'></Icon>
    me@mousedev.page
  </a>
</div>

<div>
  <ScrollButton element={nextElement}>
    <Icon icon='material-symbols:keyboard-arrow-down'></Icon>
  </ScrollButton>
</div>

<style>
h1 {
  font-size: 3rem;
  text-align: center;
}

div:first-of-type {
  display: grid;
  gap: 1rem;
  place-content: center;
  margin-top: 4rem;
}

div:first-of-type > a {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.2rem;
}

@keyframes slide-down {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}

div:last-of-type {
  display: grid;
  place-content: center;

  margin-top: 4rem;

  font-size: 2rem;

  border-radius: 1rem;

  animation: slide-down 2s infinite ease-out;
}
</style>
