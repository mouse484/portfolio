<template>
  <b-row>
    <b-col v-for="skill in skills" :key="skill" style="width: 10rem;">
      <Card :skill="skill" />
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
