<template>
  <div class="px-5">
    <div id="about" ref="about">
      <h2>About Me</h2>
      <p class="h5 mt-1">
        I am a Web and Robot engineer from Japan. I am self-taught in web
        programs such as Node.js/Vue.js/TypeScript and so on. I dropped out of
        junior high school and spent time on programs instead of studying.
        However, I need to study general education, so I will study at an online
        high school from April 2020. Please wait because it will be an
        unbelievable engineer.
      </p>
    </div>

    <div id="skills">
      <h2>My Skills</h2>
      <skills />
    </div>

    <div id="works">
      <h2>My Works</h2>
      <Works />
    </div>
  </div>
</template>

<script>
import Skills from '../components/Skills.vue'
import Works from '../components/Works.vue'
export default {
  components: { Skills, Works }
}
</script>

<style scoped>
h2 {
  border-bottom: solid 2px yellow;
  padding-bottom: 10px;
  width: 10rem;
}
div > h2 {
  padding-top: 3rem;
}
#about > p {
  line-height: 1.7;
}
</style>
