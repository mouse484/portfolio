<script lang="ts">
  import Link from '$lib/components/element/Link.svelte';
  import SimpleIcon from '$lib/components/element/SimpleIcon.svelte';
  import SectionName from '$lib/components/element/SectionName.svelte';

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

  <div class="max-w-lg mx-auto mt-8">
    {#await fetchPosts}
      <p>...waiting</p>
    {:then data}
      {#each data as { platform, title, link, isoDate }}
        <div class="mt-2 text-sm">
          {new Date(isoDate).toLocaleDateString()}
        </div>

        <p class="flex content-start gap-4">
          <span class="flex-initial">
            <SimpleIcon name={platform} />
          </span>
          <span class="flex-grow text-left">
            <Link href={link}>
              <span class="truncate ...">{title}</span>
            </Link>
          </span>
        </p>
      {/each}
    {:catch error}
      {console.log(error)}
      <p>An error occurred!</p>
    {/await}
  </div>
</section>
