import { mouse } from '@mouse_484/eslint-config'

export default mouse(
  {
    typescript: true,
    svelte: true,
    stylistic: true,
    formatters: true,
  },
  {
    files: ['**/sections/*.svelte'],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
)
