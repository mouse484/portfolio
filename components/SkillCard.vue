<template>
  <div id="skill-card" class="m-3 p-1 d-flex bg-dark rounded">
    <img :src="img_url" :alt="name" class="m-1" />
    <div class="flex-column ml-2">
      <p class="text-white">{{ name }}</p>
      <div class="level">
        <div
          class="level-color level-default"
          style="color:#7fffd4;"
          :style="level"
        >
          ■■■■■
        </div>
        <div class="text-white level-default">■■■■■</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#skill-card {
  min-width: 10em;
}
.level {
  position: relative;
}
.level-color {
  position: absolute;
  overflow: hidden;
}
.level-default {
  text-align: left;
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
