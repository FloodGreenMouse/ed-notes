module.exports = {
  root: true,
  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  rules: {
    indent: [
      'error',
      2
    ],
    quotes: [
      'error',
      'single'
    ],
    'comma-dangle': 'error',
    'no-console': 'off',
    'space-before-function-paren': [
      'warn',
      'always'
    ],
    'no-prototype-builtins': 'off',
    'no-sequences': 'off',
    'no-tabs': 'off',
    'brace-style': 'off',
    'no-return-assign': 'off',
    'array-callback-return': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
