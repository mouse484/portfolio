/** @type {import('stylelint').Config} */
export default {
  extends: [
    '@mouse_484/stylelint-config',
  ],
  rules: {
    '@stylistic/string-quotes': 'single',
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],
    }],
  },
};
