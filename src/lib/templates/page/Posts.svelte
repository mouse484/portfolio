<script lang="ts">
  import Link from '$lib/components/element/Link.svelte';
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import SectionName from '$lib/components/element/SectionName.svelte';
  import Spaser from '$lib/components/element/Spaser.svelte';
  import {
    dateClass,
    description,
    descriptionItem,
    posts,
    truncate,
  } from './Posts.css';

  const fetchPosts = (async () => {
    const response = await fetch('api/posts');
    return (await response.json()) as {
      title: string;
      link: string;
      isoDate: string;
      platform: 'zenn' | 'qiita';
    }[];
  })();
</script>

<section id="posts" class={posts}>
  <SectionName>My Posts</SectionName>
  <Spaser size={4} />
  {#await fetchPosts}
    <p>loading...</p>
  {:then data}
    {#each data as { platform, title, link, isoDate }}
      <div class={dateClass}>
        {new Date(isoDate).toLocaleDateString()}
      </div>
      <div class={description}>
        <span class={descriptionItem}>
          <SimpleIcon name={platform} />
        </span>
        <span class={descriptionItem}>
          <Link href={link}>
            <p class={truncate}>
              {title}
            </p>
          </Link>
        </span>
      </div>
    {/each}
  {:catch error}
    {console.log(error)}
    <p>An error occurred!</p>
  {/await}
</section>
