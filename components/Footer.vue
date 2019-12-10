<template>
  <div>
    <a href="https://github.com/mouse484" aria-label="GitHubでmouse484を見る">
      <font-icon :icon="['fab', 'github']" size="2x" />
    </a>
    <a
      href="https://twitter.com/mouse_484"
      aria-label="Twitterでmouse_484を見る"
    >
      <font-icon :icon="['fab', 'twitter']" size="2x" />
    </a>
    <a href="mailto:escmouse484@gmail.com" aria-label="mouseにメールを送る">
      <i class="far fa-paper-plane fa-2x"></i>
      <font-icon :icon="['fas', 'paper-plane']" size="2x" />
    </a>
  </div>
</template>

<style scoped>
a {
  padding: 1em;
}
</style>
