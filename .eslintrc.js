module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "@nuxtjs/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    jsx: true,
    tsx: true,
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/multi-word-component-names": "off",
  },
};
