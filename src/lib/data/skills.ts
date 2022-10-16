const skills = {
  JavaScript: {
    TypeScript: {
      'ts-node': { 'tsconfig-paths': {} },
      ttypescript: { 'typescript-transform-paths': {} },
    },
    'Node.js': {
      npm: {},
      yarn: {},
      Framework: { Express: {}, Fastify: {} },
      tools: { Nodemon: {} },
    },
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
    HTTP: { Axios: {} },
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
    'Tailwind CSS': {},
    'Windi CSS': {},
    PostCSS: {},
    Sass: {},
    Framework: { Bootstrap: {}, MUI: {}, Element: {} },
    icons: {
      'Font Awesome': {},
      'Simple Icons': {},
    },
  },
  Go: {},
  Python: {},
  Ruby: { 'Ruby on Rails': {} },
  C: {},
  'C++': {},
  R: {},
  Arduino: {},
  Git: {
    GitHub: {},
    GitLab: {},
    tools: {
      commitlint: {},
      'Conventional Commits': {},
      'semantic-release': {},
    },
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
  CMS: {
    contentful: {},
    microCMS: {},
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
    WSL: { _icon: 'Linux' },
  },
  Chat: {
    Discord: {},
    Slack: {},
  },
};

export default skills;
