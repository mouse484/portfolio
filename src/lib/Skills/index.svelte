<script lang="ts">
  import SimpleIcon from '$lib/SimpleIcon.svelte';

  const skills = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'npm',
    'yarn',
    'Vue.js',
    'Nuxt.js',
    'Svelte',
    'React',
    'Next.js',
    'Angular',
    'Gatsby',
    'jQuery',
    'Babel',
    'Webpack',
    'rollup.js',
    'gulp',
    'Vite',
    'Express',
    'Fastify',
    'Electron',
    'ESLint',
    'Prettier',
    'Jest',
    'Mocha',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'PostCSS',
    'Vercel',
    'Netlify',
    'Go',
    'Python',
    'Ruby',
    'C',
    'C++',
    'Arduino',
    'Docker',
    'Git',
    'GitHub',
    'GitLab',
    'Visual Studio Code',
    'Gitpod',
    'Slack',
    'Discord',
  ];
</script>

<section>
  <h3 class="text-3xl text-center">My Skills</h3>

  <div class="flex flex-wrap gap-4 justify-center px-8 mx-auto mt-8 max-w-2xl">
    {#each skills as skill}
      <div class="flex space-x-2">
        <SimpleIcon name={skill} />
        <p>{skill}</p>
      </div>
    {/each}
  </div>
</section>
