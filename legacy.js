'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/rules/best-practices',
    'eslint-config-ponko2/rules/errors',
    'eslint-config-ponko2/rules/node',
    'eslint-config-ponko2/rules/strict',
    'eslint-config-ponko2/rules/style',
    'eslint-config-ponko2/rules/variables',
  ].map(require.resolve),
  'rules': {},
};
