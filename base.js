'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/legacy',
    'eslint-config-ponko2/rules/es6',
  ].map(require.resolve),
  'rules': {}
};
