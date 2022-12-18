<script lang="ts">
  import SectionName from '$lib/components/element/SectionName.svelte';
  import SkillList from '$lib/components/modules/SkillList/SkillList.svelte';
  import skills from '$lib/data/skills';
  import Spacer from '$lib/components/element/Spaser.svelte';
</script>

<section id="skills">
  <SectionName>My Skills</SectionName>
  <Spacer size={4} />
  <div class="flex flex-wrap">
    <SkillList {skills} />
  </div>
</section>

<style lang="postcss">
  section {
    text-align: center;
  }
  div {
    max-width: 50%;
    margin: auto;
    justify-content: center;
  }
</style>
