'use strict';

module.exports = {
  extends: ['./base'].map(require.resolve),
  env: {
    browser: true,
    node: false,
  },
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: false,
    },
  },
  rules: {},
};
