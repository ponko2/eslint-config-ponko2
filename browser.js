'use strict';

const globals = require('globals');
const base = require('./base');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base,
  languageOptions: {
    ...base.languageOptions,
    sourceType: 'script',
    globals: {
      ...base.languageOptions?.globals,
      ...globals.browser,
    },
  },
};
