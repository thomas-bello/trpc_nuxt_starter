// https://eslint.org/docs/latest/use/configure/

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'no-template-curly-in-string': 'off',
  },
}

// const config = {
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   globals: {
//     RequestInit: true,
//   },
//   parser: "vue-eslint-parser",
//   parserOptions: {
//     parser: "@typescript-eslint/parser",
//     ecmaVersion: 2020,
//     sourceType: "module",
//     jsxPragma: "React",
//     ecmaFeatures: {
//       jsx: true,
//       tsx: true,
//     },
//   },
//   extends: [
//     "plugin:vue/vue3-recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//     "plugin:prettier/recommended",
//   ],
//   rules: {
//     // "@typescript-eslint/ban-ts-ignore": "off",
//     // "@typescript-eslint/explicit-function-return-type": "off",
//     // "@typescript-eslint/no-explicit-any": "off",
//     // "@typescript-eslint/no-var-requires": "off",
//     // "@typescript-eslint/no-empty-function": "off",
//     "@typescript-eslint/no-use-before-define": "error",
//     "@typescript-eslint/ban-ts-comment": "warn",
//     // "@typescript-eslint/ban-types": "off",
//     // "@typescript-eslint/no-non-null-assertion": "off",
//     // "@typescript-eslint/explicit-module-boundary-types": "off",
//     "@typescript-eslint/no-unused-vars": [
//       "error",
//       {
//         argsIgnorePattern: "^_",
//         varsIgnorePattern: "^_",
//       },
//     ],

//     semi: ["error", "never"],
//     "no-undef": "error",

//     "prettier/prettier": [
//       "error",
//       {
//         semi: false,
//         singleQuote: false,
//       },
//     ],

//     "vue/multi-word-component-names": "off",

//     // "vue/custom-event-name-casing": "off",
//     // "vue/attributes-order": "off",
//     // "vue/one-component-per-file": "off",
//     // "vue/html-closing-bracket-newline": "off",
//     // "vue/max-attributes-per-line": "off",
//     // "vue/multiline-html-element-content-newline": "off",
//     // "vue/singleline-html-element-content-newline": "off",
//     // "vue/attribute-hyphenation": "off",
//     // "vue/require-default-prop": "off",
//     // "vue/html-self-closing": "off",
//     // "vue/no-dupe-keys": "off"
//   },
// }

module.exports = config
