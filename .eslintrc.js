module.exports = {
  // root: true,
  // env: {
  //   node: true,
  // },
  // extends: [
  //   'plugin:vue/vue3-recommended',
  //   'eslint:recommended',
  //   '@vue/typescript/recommended',
  //   '@vue/prettier',
  //   '@vue/prettier/@typescript-eslint',
  // ],
  // parserOptions: {
  //   ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  // },
  // plugins: ['vue'],

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],

  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/max-attributes-per-line': 'off', // handled by prettier.printWidth
    'vue/singleline-html-element-content-newline': 'off',
  },
};
