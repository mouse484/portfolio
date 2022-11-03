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

  <div class="mx-auto mt-8 max-w-lg">
    {#await fetchPosts}
      <p class="text-center">loading...</p>
    {:then data}
      {#each data as { platform, title, link, isoDate }}
        <div class="mx-4">
          <div class="text-sm">
            {new Date(isoDate).toLocaleDateString()}
          </div>

          <div class="flex gap-4">
            <span class="flex-initial">
              <SimpleIcon name={platform} />
            </span>
            <span class="min-w-0 text-left">
              <Link href={link}>
                <p class="truncate hover:break-words hover:whitespace-normal">
                  {title}
                </p>
              </Link>
            </span>
          </div>
        </div>
      {/each}
    {:catch error}
      {console.log(error)}
      <p>An error occurred!</p>
    {/await}
  </div>
</section>
