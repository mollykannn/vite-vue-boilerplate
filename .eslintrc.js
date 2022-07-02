module.exports = {
  root: true,
  env: {
    node: true
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-default-prop': 'off',
    "vue/multi-word-component-names": "off",
  },

  extends: ['./.eslintrc-auto-import.json','plugin:vue/vue3-essential', 'eslint:recommended', 'eslint-config-prettier'
],
}
