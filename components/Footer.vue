<template>
  <div id="footer" class="text-center">
    <a href="https://github.com/mouse484" aria-label="github.com/mouse484">
      <font-icon :icon="['fab', 'github']" size="2x" />
    </a>
    <a href="https://twitter.com/mouse_484" aria-label="twitter.com/mouse_484">
      <font-icon :icon="['fab', 'twitter']" size="2x" />
    </a>
    <a href="mailto:escmouse484@gmail.com" aria-label="send Email">
      <i class="far fa-paper-plane fa-2x"></i>
      <font-icon :icon="['fas', 'paper-plane']" size="2x" />
    </a>
  </div>
</template>

<style scoped>
#footer {
  position: sticky;
  bottom: 0;
  background-color: #181a1b;
  z-index: 1;
  display: block;
  width: 100%;
  box-shadow: 0px -5px 4px #181a1b;
}
a {
  padding: 1em;
}
</style>
