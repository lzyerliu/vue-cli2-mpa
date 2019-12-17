// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'],
    'indent': 0,
    'no-tabs': 'off',
    'no-undef': 'off',
    'space-before-function-paren': 0,
    'vue/no-side-effects-in-computed-properties': 'off',
    'standard/no-callback-literal': [0, ['cb', 'callback']],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-sequences': 'off',
    'no-return-assign': 'off',
    'no-useless-escape': 'off',
    'prefer-const': 'off',
    'vue/html-self-closing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/attributes-order': 'off',
    'vue/no-confusing-v-for-v-if': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'no-new': 'off',
    'no-extra-parens': 'off'
  }
}
