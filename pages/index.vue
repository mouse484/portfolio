<template>
  <div class="text-center">
    <h1 id="title" class="mt-3">mouse's Portfolio.</h1>
    <h4 class="mt-3">Student web and robot engineer.</h4>
    <Profile class="mt-5" />
  </div>
</template>

<script>
import Profile from '../components/Profile.vue'
export default { components: { Profile } }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merienda&display=swap');

h1#title {
  color: #9cc2e2;
  font-family: 'Merienda', cursive;
  font-size: 10vh;
}
</style>
