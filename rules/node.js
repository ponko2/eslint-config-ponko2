'use strict';

module.exports = {
  'env': {
    'node': true
  },
  'rules': {
    // enforce return after a callback
    'callback-return': 0,

    // enforce require() on top-level module scope
    'global-require': 2,

    // enforce error handling in callbacks
    'handle-callback-err': 0,

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 2,

    // disallow use of new operator with the require function
    'no-new-require': 2,

    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,

    // disallow process.exit()
    'no-process-exit': 0,

    // restrict usage of specified node imports
    'no-restricted-imports': 0,

    // restrict usage of specified modules when loaded by require function
    'no-restricted-modules': 0,

    // disallow use of synchronous methods
    'no-sync': 0,
  }
};
