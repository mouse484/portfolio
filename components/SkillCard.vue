<template>
  <div class="card bg-dark">
    <img :src="imageUrl" :alt="name" class="float-left" />

    <div class="text-white">{{ name }}</div>
    <b-progress :value="level" max="10" show-value variant="info" />
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
    name: {
      type: String,
      default: 'name'
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    imageUrl() {
      return `./img/skills/${this.name}.svg`
    }
  }
}
</script>
