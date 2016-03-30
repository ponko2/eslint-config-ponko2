'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/legacy',
  ].map(require.resolve),
  'env': {
    'browser': false,
    'node': true,
  },
  'rules': {}
};
