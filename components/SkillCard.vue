<template>
  <div class="rounded bg-secondary m-2 p-2 d-flex">
    <img :src="img_url" />
    <div class="flex-column">
      <p>{{ name }}</p>
      <div class="level">
        <div class="star-rating-front text-info" :style="level">■■■■■</div>
        <div class="text-white">■■■■■</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.level {
  position: relative;
  width: 5em;
  height: 1em;
}
.star-rating-front {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>

<script>
export default {
  props: {
    skill: { type: Array, default: Array }
  },
  data() {
    return {
      name: this.skill[0],
      img_url: `./img/skills/${this.skill[0]}.svg`,
      level: `width: ${this.skill[1] * 20}%;`
    }
  }
}
</script>
