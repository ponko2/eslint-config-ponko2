'use strict';

module.exports = {
  extends: ['./base'].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {},
};
