<script lang="ts">
  import SectionName from '$lib/components/elements/SectionName.svelte';
  import SkillList from '$lib/components/modules/SkillList/SkillList.svelte';
  import skills from '$lib/data/skills';
  import Spacer from '$lib/components/elements/Spaser.svelte';
  import { section } from './section.css';
  import { skillList } from './Skills.css';
</script>

<section id="skills" class={section}>
  <SectionName>My Skills</SectionName>
  <Spacer size={4} />
  <div class={skillList}>
    <SkillList {skills} />
  </div>
</section>
