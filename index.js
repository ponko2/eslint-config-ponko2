'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/base',
    'eslint-config-ponko2/rules/node',
    'eslint-config-ponko2/rules/es6',
  ].map(require.resolve),
  'env': {
    'browser': true,
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
