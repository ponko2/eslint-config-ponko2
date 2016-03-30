'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/rules/best-practices',
    'eslint-config-ponko2/rules/errors',
    'eslint-config-ponko2/rules/node',
    'eslint-config-ponko2/rules/strict',
    'eslint-config-ponko2/rules/style',
    'eslint-config-ponko2/rules/variables',
    'eslint-config-ponko2/rules/es5',
  ].map(require.resolve),
  'env': {
    'node': true,
    'es6': false,
  },
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'script',
    'ecmaFeatures': {
      'impliedStrict': false,
    },
  },
  'rules': {}
};
