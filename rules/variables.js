'use strict';

module.exports = {
  'rules': {
    // require or disallow initialization in var declarations
    'init-declarations': 'off',

    // disallow catch clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': 'error',

    // disallow deleting variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow specified global variables
    'no-restricted-globals': 'off',

    // disallow var declarations from shadowing variables in the outer scope
    'no-shadow': 'error',

    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': ['error', {'typeof': true}],

    // disallow initializing variables to undefined
    'no-undef-init': 'error',

    // disallow the use of undefined as an identifier
    'no-undefined': 'off',

    // disallow unused variables
    'no-unused-vars': ['error', {'vars': 'local', 'args': 'after-used'}],

    // disallow the use of variables before they are defined
    'no-use-before-define': ['error', {'functions': false, 'classes': true}],
  }
};
