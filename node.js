"use strict";

module.exports = {
  extends: ["./base", "./rules/node", "./rules/es6"].map(require.resolve),
  env: {
    browser: false,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "script",
    ecmaFeatures: {
      impliedStrict: false
    }
  }
};
