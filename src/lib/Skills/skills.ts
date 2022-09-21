const skills = {
  JavaScript: {
    'Node.js': { npm: {}, yarn: {}, Framework: { Express: {}, Fastify: {} } },
    TypeScript: {},
    Deno: {},
    Bun: {},
    Web: {
      React: { 'Next.js': {}, Gatsby: {} },
      'Vue.js': { 'Nuxt.js': {}, Vuetify: {} },
      Svelte: { SvelteKit: { _icon: 'svelte' } },
      Angular: {},
      jQuery: {},
    },
    Bundler: {
      Webpack: {},
      Babel: {},
      Vite: {},
      'rollup.js': {},
      gulp: {},
      esbuild: {},
    },
    Application: {
      Electron: {},
    },
    'Linter/Formatter': {
      ESLint: {},
      Prettier: {},
    },
    Test: {
      Jest: {},
      Mocha: {},
    },
  },
  HTML: { _icon: 'HTML5' },
  CSS: {
    _icon: 'CSS3',
    Bootstrap: {},
    'Tailwind CSS': {},
    PostCSS: {},
    Sass: {},
    Element: {},
  },
  Go: {},
  Python: {},
  Ruby: {},
  C: {},
  'C++': {},
  R: {},
  Arduino: {},
  Git: {
    GitHub: {},
    GitLab: {},
  },
  'CI/CD': {
    'GitHub Actions': {},
    CircleCI: {},
    'Travis CI': {},
  },
  Hosting: {
    Vercel: {},
    Netlify: {},
    'GitHub Pages': {},
    heroku: {},
  },
  Database: {
    MySQL: {},
    SQLite: {},
    PostgreSQL: {},
    MongoDB: {},
  },
  Editor: {
    'Visual Studio Code': {},
    JetBrains: {},
    'Sublime Text': {},
    Gitpod: {},
  },
  Others: {
    Docker: {},
    FireBase: {},
    Jupyter: {},
  },
  Chat: {
    Discord: {
      Bot: { 'Discord.js': {} },
    },
    Slack: {},
  },
};

export default skills;
