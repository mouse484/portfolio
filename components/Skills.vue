<template>
  <div>
    <h2>Skills</h2>
    <div class="d-flex flex-wrap mx-lg-5">
      <SkillCard v-for="skill in skills" :key="skill" :skill="skill" />
    </div>
  </div>
</template>

<script>
import SkillCard from '~/components/SkillCard.vue'
import skills from '~/assets/Skills.json'
export default {
  components: { SkillCard },
  data: () => {
    return {
      skills
    }
  }
}
</script>
