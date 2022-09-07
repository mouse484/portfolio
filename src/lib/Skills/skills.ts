const skills = {
  JavaScript: {
    'Node.js': { npm: {}, yarn: {} },
    TypeScript: {},
    Deno: {},
    Web: {
      React: { 'Next.js': {}, Gatsby: {} },
      'Vue.js': { 'Nuxt.js': {} },
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
    Server: {
      Express: {},
      Fastify: {},
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
    MongoDB: {},
  },
  Editor: {
    'Visual Studio Code': { Gitpod: {} },
  },
  Chat: {
    Discord: {},
    Slack: {},
  },
};

export default skills;
