// https://github.com/typescript-eslint/typescript-eslint/blob/93fb661d803467d807d5bf1592dbc9ddfc5d4529/docs/getting-started/linting/README.md
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/ban-ts-ignore': ['warn'],
    '@typescript-eslint/no-use-before-define': ['warn'],
  },
};
