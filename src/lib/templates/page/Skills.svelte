<script lang="ts">
  import SectionName from '$lib/components/element/SectionName.svelte';
  import SkillList from '$lib/components/modules/SkillList/SkillList.svelte';
  import skills from '$lib/data/skills';
</script>

<section id="skills">
  <SectionName>My Skills</SectionName>

  <div class="flex flex-wrap gap-2 justify-center px-10 mx-auto mt-6 max-w-3xl">
    <SkillList {skills} />
  </div>
</section>
