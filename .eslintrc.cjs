/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    //关闭eslint检查文件名是否为驼峰命名
    'vue/multi-word-component-names': 'off'
  }
};
