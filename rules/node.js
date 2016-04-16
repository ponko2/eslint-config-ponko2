'use strict';

module.exports = {
  'rules': {
    // require return statements after callbacks
    'callback-return': 0,

    // require require() calls to be placed at top-level module scope
    'global-require': 2,

    // require error handling in callbacks
    'handle-callback-err': 0,

    // disallow require calls to be mixed with regular var declarations
    'no-mixed-requires': 2,

    // disallow new operators with calls to require
    'no-new-require': 2,

    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,

    // disallow the use of process.env
    'no-process-env': 0,

    // disallow the use of process.exit()
    'no-process-exit': 0,

    // disallow specified modules when loaded by require
    'no-restricted-modules': 0,

    // disallow synchronous methods
    'no-sync': 0,
  }
};
