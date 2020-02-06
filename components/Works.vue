<template>
  <div style="disply:block;" class="mb-3">
    <div>
      <h3 class="mt-3">Ecstar</h3>
      <p style="font-style: italic;">
        The easiest JavaScript/TypeScript Discord bot framework.
      </p>
      <p>Ecstar is a framework that extends Discord.js</p>
      <p>My First npm module development.</p>
      <a
        href="https://github.com/mouse484/Ecstar"
        aria-label="github.com/mouse484/Ecstar"
      >
        <font-icon :icon="['fab', 'github']" />
      </a>
    </div>

    <div>
      <h3 class="mt-3">Portfolio</h3>
      <p>This portfolio site.</p>
      <p>Built with Vue.js (Nuxt.js) and Bootstrap</p>
      <a
        href="https://github.com/mouse484/portfolio"
        aria-label="github.com/mouse484/portfolio"
      >
        <font-icon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://portfolio.mouse-484.tk/"
        aria-label="portfolio.mouse-484.tk"
      >
        <font-icon icon="link" />
      </a>
    </div>
  </div>
</template>

<style scoped>
a > svg {
  margin-right: 0.5em;
}
h3,
div > div {
  border-bottom: solid 1px lime;
  padding-bottom: 1rem;
}
div > p {
  font-size: 1.2rem;
}
</style>
