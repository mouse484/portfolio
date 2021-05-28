<script lang="ts">
  import IconLink from '../About/IconLink.svelte';
  import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="space-x-6">
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
</div>
