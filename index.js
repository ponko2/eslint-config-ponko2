"use strict";

module.exports = {
  extends: ["./base", "./rules/node", "./rules/es6"].map(require.resolve),
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {}
};
