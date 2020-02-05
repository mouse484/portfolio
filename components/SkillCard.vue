<template>
  <div class="card bg-dark">
    <img :src="imageUrl(skill)" :alt="name(skill)" class="float-left" />

    <div class="text-white">{{ name(skill) }}</div>
    <b-progress :value="level(skill)" max="10" show-value variant="info" />
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 60% 40%;
  padding: 0.5rem;
  margin: 0.2rem;
  width: 9.7rem;
}
img {
  grid-column: 1/2;
  grid-row: 1/3;
}
</style>

<script>
export default {
  props: {
    skill: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    name(skill) {
      return skill[0]
    },
    level(skill) {
      return skill[1]
    },
    imageUrl(skill) {
      return `./img/skills/${skill[0]}.svg`
    }
  }
}
</script>
