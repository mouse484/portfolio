<script lang="ts">
  import Box from './Box.svelte';
  import skills from './skills';
</script>

<section>
  <h3 class="text-3xl text-center">My Skills</h3>

  <div class="flex flex-wrap gap-4 mx-auto mt-6 w-full max-w-3xl">
    {#each Object.entries(skills) as [skillName, inSkills]}
      <Box name={skillName} skills={inSkills} />
    {/each}
  </div>
</section>
