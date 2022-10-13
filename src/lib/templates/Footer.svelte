<script lang="ts">
  import IconLink from '$lib/components/element/IconLink.svelte';
  import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
</script>

<footer class="flex justify-center pb-8 mt-20 space-x-6">
  <IconLink
    icon={faTwitter}
    href="https://twitter.com/mouse_484"
    alt="Twitter @mouse_484"
  />
  <IconLink
    icon={faGithub}
    href="https://github.com/mouse484"
    alt="GitHub mouse484"
  />
  <IconLink
    icon={faPaperPlane}
    href="mailto:escmouse484+dev@gmail.com"
    alt="mailto:escmouse484+dev@gmail.com"
  />
</footer>
