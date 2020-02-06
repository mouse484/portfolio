<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default { components: { Header, Footer } }
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
