'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ]
    .map(require.resolve)
    .concat('plugin:prettier/recommended'),
  env: {
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
