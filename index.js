'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/base',
  ].map(require.resolve),
  'env': {
    'node': true,
    'es6': true,
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true,
    },
  },
  'rules': {}
};
