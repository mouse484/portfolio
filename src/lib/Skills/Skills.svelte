<script lang="ts">
  import Box from './Box.svelte';
  import skills from './skills';
  import SectionName from '$lib/SectionName.svelte';
</script>

<section id="skills">
  <SectionName>My Skills</SectionName>

  <div class="flex flex-wrap gap-4 mx-auto mt-6 w-full max-w-3xl">
    {#each Object.entries(skills) as [skillName, inSkills]}
      <Box name={skillName} skills={inSkills} />
    {/each}
  </div>
</section>
