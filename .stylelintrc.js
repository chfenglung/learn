module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'declaration-block-trailing-semicolon': null
  }
}
