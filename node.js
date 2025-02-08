'use strict';

const globals = require('globals');
const base = require('./base');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base,
  languageOptions: {
    ...base.languageOptions,
    sourceType: 'commonjs',
    globals: {
      ...base.languageOptions?.globals,
      ...globals.node,
    },
  },
};
