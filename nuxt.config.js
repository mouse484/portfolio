export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: "mouse's Portfolio.",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Student web and robot engineer, mouse's Portfolio."
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#9cc2e2' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Livvic', 'Merienda', 'Noto+Sans+JP']
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
