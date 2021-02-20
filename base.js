'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  env: {
    es2021: true,
  },
};
