<template>
  <b-row>
    <b-col v-for="(skill, index) in skills" :key="index">
      <Card :name="skill[0]" :level="skill[1]" />
    </b-col>
  </b-row>
</template>

<style scoped>
.col {
  margin: 0 auto;
  max-width: 10rem;
  min-width: 10rem;
}
</style>

<script>
import skills from '~/assets/Skills.json'
import Card from '~/components/SkillCard'

export default {
  components: { Card },
  data() {
    return {
      skills,
    }
  },
}
</script>
