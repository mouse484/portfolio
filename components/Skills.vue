<template>
  <b-row>
    <b-col v-for="(skill, index) in skills" :key="index" style="width: 10rem;">
      <Card :name="skill[0]" :level="skill[1]" />
    </b-col>
  </b-row>
</template>

<script>
import skills from '~/assets/Skills.json'
import Card from '~/components/SkillCard'

export default {
  components: { Card },
  data() {
    return {
      skills
    }
  }
}
</script>
