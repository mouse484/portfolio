const skills = {
  JavaScript: {
    TypeScript: {},
    'Node.js': { npm: {}, yarn: {} },
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
    'linter/formatter': {
      ESLint: {},
      Prettier: {},
    },
    test: {
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
  Hosting: {
    Vercel: {},
    Netlify: {},
    'GitHub Pages': {},
    heroku: {},
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
  Editor: {
    'Visual Studio Code': { Gitpod: {} },
  },
  Chat: {
    Discord: {},
    Slack: {},
  },
};

export default skills;
