import { writable } from 'svelte/store';

type themeType = 'light' | 'dark';

export const theme = writable<themeType>('light');

export const initTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return theme.set('dark');
  }
  return theme.set(localStorage.getItem('dark') ? 'dark' : 'light');
};

theme.subscribe((theme) => {
  if (typeof document !== 'undefined') {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
});
