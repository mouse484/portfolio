import { mouse } from '@mouse_484/eslint-config'

export default mouse({
  typescript: true,
  astro: true,
  formatters: true,
  unocss: true,
}, {
  rules: {
    'antfu/no-top-level-await': 'off',
  },
})
