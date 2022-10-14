<script lang="ts">
  import SectionName from '$lib/components/element/SectionName.svelte';
  import SkillList from '$lib/components/modules/SkillList.svelte';
  import skills from '$lib/data/skills';
</script>

<section id="skills">
  <SectionName>My Skills</SectionName>

  <div class="flex flex-wrap mx-auto mt-6 w-full max-w-3xl">
    <SkillList {skills} />
  </div>
</section>
