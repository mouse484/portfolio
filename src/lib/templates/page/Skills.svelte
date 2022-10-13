<script lang="ts">
  import SkillBox from '$lib/components/modules/SkillBox.svelte';
  import skills from '$lib/data/skills';
  import SectionName from '$lib/components/element/SectionName.svelte';
</script>

<section id="skills">
  <SectionName>My Skills</SectionName>

  <div class="flex flex-wrap gap-4 mx-auto mt-6 w-full max-w-3xl">
    {#each Object.entries(skills) as [skillName, inSkills]}
      <SkillBox name={skillName} skills={inSkills} />
    {/each}
  </div>
</section>
