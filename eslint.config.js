import { mouse } from '@mouse_484/eslint-config'

export default mouse(
  {
    typescript: true,
    svelte: true,
    stylistic: true,
    formatters: true,
  },
  {
    files: ['**/*.svelte'],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
)
