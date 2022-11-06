const skills = {
  JavaScript: {
    AltJS: {
      TypeScript: {
        'ts-node': { 'tsconfig-paths': {} },
        ttypescript: { 'typescript-transform-paths': {} },
      },
      CoffeeScript: {},
    },
    Runtime: {
      'Node.js': {
        npm: {},
        yarn: {},
        pnpm: {},
        Framework: { Express: {}, Fastify: {} },
        tools: { Nodemon: {} },
      },
      Deno: {},
      Bun: {},
    },
    Web: {
      React: {
        'Next.js': {},
        Gatsby: {},
        'Create React App': {},
        'React Hook Form': {},
      },
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
    HTTP: { Axios: {}, got: {}, 'node-fetch': {} },
    'Linter/Formatter': {
      ESLint: {},
      Prettier: {},
    },
    Test: {
      Jest: {},
      Vitest: {},
      Mocha: {},
    },
  },
  HTML: { _icon: 'HTML5', EJS: {}, Pug: {} },
  CSS: {
    _icon: 'CSS3',
    'Tailwind CSS': {},
    'Windi CSS': {},
    PostCSS: {},
    Sass: {},
    Framework: { Bootstrap: {}, MUI: {}, Element: {}, Flowbite: {} },
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
  'C#': { _icon: 'C Sharp' },
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
    Glitch: {},
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
  OS: {
    Windows: {},
    Linux: {
      Ubuntu: {},
      Debian: {},
      CentOS: {},
      'Alpine Linux': {},
    },
  },
  Browser: {
    'Google Chrome': {},
    Vivaldi: {},
    FireFox: {},
    Brave: {},
    Opera: {},
    'Tor Browser': {},
  },
  Chat: {
    Discord: {
      Bot: {
        'Discord.js': {},
        'Discord.py': {},
      },
    },
    Slack: {},
    LINE: {},
  },
  Others: {
    Docker: {},
    FireBase: {},
    RenovateBot: {},
    Jupyter: {},
    WSL: { _icon: 'Linux' },
  },
};

export default skills;
