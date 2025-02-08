'use strict';

const globals = require('globals');
const base = require('./base');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base,
  languageOptions: {
    ...base.languageOptions,
    sourceType: 'module',
    parserOptions: {
      ...base.languageOptions?.parserOptions,
      ecmaFeatures: {
        ...base.languageOptions?.parserOptions?.ecmaFeatures,
        impliedStrict: true,
      },
    },
    globals: {
      ...base.languageOptions.globals,
      ...globals.browser,
      ...globals.node,
    },
  },
};
