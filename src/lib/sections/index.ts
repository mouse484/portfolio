import type { Component } from 'svelte';

export const files = import.meta.glob<
  true,
  string,
  { name: string, default: Component }
>('./*.svelte', { eager: true });

export const sections = Object.values(files).flatMap((file) => {
  if (!file.default && !file.name) {
    return [];
  }
  return {
    name: file.name,
    component: file.default,
  };
});
