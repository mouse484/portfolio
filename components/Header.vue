<template>
  <div id="header">
    <b-navbar type="dark">
      <transition name="title">
        <b-navbar-brand v-if="scrolled" class="title" href="#">
          mouse's
        </b-navbar-brand>
      </transition>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#about">About Me</b-nav-item>
        <b-nav-item href="#skills">Skills</b-nav-item>
        <b-nav-item href="#works">Works</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <transition name="title">
      <h1
        v-if="!scrolled"
        class="title text-center mt-3"
        style="font-size: 8vh;"
      >
        mouse's Portfolio.
      </h1>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.scrolled) this.scrolled = window.scrollY > 10
    }
  }
}
</script>

<style scoped>
.title {
  color: #9cc2e2;
  font-family: 'Merienda', cursive;
}
#header {
  position: sticky;
  top: 0;
  background-color: #181a1b;
  z-index: 1;
}
.title-enter-active {
  transition: all 0.3s ease;
}
.title-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.title-enter,
.title-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
