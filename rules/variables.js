'use strict';

module.exports = {
  'rules': {
    // require or disallow initialization in var declarations
    'init-declarations': 0,

    // disallow catch clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': 2,

    // disallow deleting variables
    'no-delete-var': 2,

    // disallow labels that share a name with a variable
    'no-label-var': 2,

    // disallow specified global variables
    'no-restricted-globals': 0,

    // disallow var declarations from shadowing variables in the outer scope
    'no-shadow': 2,

    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 2,

    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': [2, {'typeof': true}],

    // disallow initializing variables to undefined
    'no-undef-init': 2,

    // disallow the use of undefined as an identifier
    'no-undefined': 2,

    // disallow unused variables
    'no-unused-vars': [2, {'vars': 'local', 'args': 'after-used'}],

    // disallow the use of variables before they are defined
    'no-use-before-define': [2, {'functions': false, 'classes': true}],
  }
};
