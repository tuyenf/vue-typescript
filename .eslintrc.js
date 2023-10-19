module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  ignorePatterns: ['node_modules/*', 'dist/*', 'public/*'],
}
