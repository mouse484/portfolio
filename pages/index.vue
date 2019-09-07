<template>
  <div>
    <h1 id="title" class="text-center mt-3">mouse's Portfolio.</h1>
    <Profile />
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
}
</style>
