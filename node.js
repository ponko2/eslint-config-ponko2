'use strict';

module.exports = {
  extends: ['./base', './rules/node'].map(require.resolve),
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: false
    }
  }
};
