"use strict";

module.exports = {
  extends: ["./legacy"].map(require.resolve),
  env: {
    browser: true,
    node: false
  },
  rules: {
    // require return statements after callbacks
    "callback-return": "off",

    // require require() calls to be placed at top-level module scope
    "global-require": "off",

    // require error handling in callbacks
    "handle-callback-err": "off",

    // disallow use of the Buffer() constructor
    "no-buffer-constructor": "off",

    // disallow require calls to be mixed with regular variable declarations
    "no-mixed-requires": "off",

    // disallow new operators with calls to require
    "no-new-require": "off",

    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "off",

    // disallow the use of process.env
    "no-process-env": "off",

    // disallow the use of process.exit()
    "no-process-exit": "off",

    // disallow specified modules when loaded by require
    "no-restricted-modules": "off",

    // disallow certain properties on certain objects
    "no-restricted-properties": "off",

    // disallow synchronous methods
    "no-sync": "off"
  }
};
