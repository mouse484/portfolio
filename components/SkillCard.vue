<template>
  <div id="skill-card" class="rounded bg-secondary m-2 p-1 d-flex">
    <img :src="img_url" class="m-1" />
    <div class="flex-column ml-2">
      <p>{{ name }}</p>
      <div class="level">
        <div class="level-color level-default text-info" :style="level">
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
