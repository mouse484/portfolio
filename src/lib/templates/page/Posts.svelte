<script lang="ts">
  import Link from '$lib/components/element/Link.svelte';
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import SectionName from '$lib/components/element/SectionName.svelte';
  import Spaser from '$lib/components/element/Spaser.svelte';

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

<section id="posts">
  <SectionName>My Posts</SectionName>
  <Spaser size={4} />
  {#await fetchPosts}
    <p class="text-center">loading...</p>
  {:then data}
    {#each data as { platform, title, link, isoDate }}
      <div class="date">
        {new Date(isoDate).toLocaleDateString()}
      </div>
      <div class="flex">
        <span>
          <SimpleIcon name={platform} />
        </span>
        <span>
          <Link href={link}>
            <p class="truncate">
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

<style lang="postcss">
  section {
    margin: auto;
    max-width: 24em;
  }
  .flex {
    justify-content: start;
    align-items: start;
    & span {
      flex: 0 1 auto;
      min-width: 0;
    }
  }
  .date {
    font-size: 0.7em;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      overflow-wrap: break-word;
      white-space: normal;
    }
  }
</style>
