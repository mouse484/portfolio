<template>
  <div v-if="loading">
    <Header />
    <nuxt class="main" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: { Header, Footer },
  data() {
    return { loading: false }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$nuxt.$loading.finish()
        this.loading = true
      }, 500)
    })
  }
}
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
.main {
  max-width: 750px;
  margin: 0 auto;
}
</style>
