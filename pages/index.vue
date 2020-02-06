<template>
  <div class="px-5">
    <h1 id="title" class="text-center mt-3">mouse's Portfolio.</h1>

    <div id="about" class="mt-5">
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

    <div id="skills" class="mt-5">
      <h2>My Skills</h2>
      <skills />
    </div>

    <div id="works" class="mt-5">
      <h2>My Works</h2>
      <Works />
    </div>

    <Footer class="mt-5 mb-4" />
  </div>
</template>

<script>
import Skills from '../components/Skills.vue'
import Works from '../components/Works.vue'
import Footer from '../components/Footer.vue'
export default { components: { Skills, Works, Footer } }
</script>

<style scoped>
h1#title {
  color: #9cc2e2;
  font-family: 'Merienda', cursive;
  font-size: 8vh;
}
h2 {
  border-bottom: solid 2px yellow;
  width: 10rem;
}
#about > p {
  line-height: 1.7;
}
</style>
