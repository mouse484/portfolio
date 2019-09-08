<template>
  <div class="text-center">
    <h1 id="title" class="mt-3">mouse's Portfolio.</h1>
    <h3 class="mt-3">Student web and robot engineer.</h3>
    <Profile class="mt-5" />
    <skills class="mt-5" />
    <Works class="mt-5" />
    <Footer class="mt-3 mb-5" />
  </div>
</template>

<script>
import Profile from '../components/Profile.vue'
import Skills from '../components/Skills.vue'
import Works from '../components/Works.vue'
import Footer from '../components/Footer.vue'
export default { components: { Profile, Skills, Works, Footer } }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merienda&display=swap');

h1#title {
  color: #9cc2e2;
  font-family: 'Merienda', cursive;
  font-size: 8vh;
}
</style>
