'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/base',
    'eslint-config-ponko2/rules/node',
    'eslint-config-ponko2/rules/es6',
  ].map(require.resolve),
  'env': {
    'browser': false,
    'node': true,
    'es6': true,
  },
  'parserOptions': {
    'ecmaVersion': 2015,
    'sourceType': 'script',
    'ecmaFeatures': {'impliedStrict': false},
  },
  'rules': {
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'off',

    // require Reflect methods where applicable
    'prefer-reflect': 'off',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'off',

    // require spread operators instead of .apply()
    'prefer-spread': 'off',
  }
};
