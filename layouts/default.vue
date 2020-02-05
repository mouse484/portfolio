<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '../components/Header'
export default { components: { Header } }
</script>

<style>
body {
  background-color: #181a1b;
  font-family: 'Livvic', sans-serif;
  color: #b9cbd9;
  min-height: 100vh;
}
a {
  color: #9cc2e2;
}
</style>
