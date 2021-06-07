<script lang="ts">
  import Link from '$lib/Link.svelte';
  import SimpleIcon from '$lib/SimpleIcon.svelte';

  const fetchPosts = (async () => {
    const response = await fetch(
      'https://portfolio-api.mouse484.vercel.app/posts'
    );
    return (await response.json()) as {
      title: string;
      link: string;
      isoDate: string;
      platform: 'zenn' | 'qiita';
    }[];
  })();
</script>

<section>
  <h3 class="mx-4 text-3xl text-center">My Posts</h3>

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
