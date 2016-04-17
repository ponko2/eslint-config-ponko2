'use strict';

module.exports = {
  'rules': {
    // require or disallow trailing commas
    'comma-dangle': [2, 'only-multiline'],

    // disallow assignment operators in conditional expressions
    'no-cond-assign': [2, 'always'],

    // disallow the use of console
    'no-console': 1,

    // disallow constant expressions in conditions
    'no-constant-condition': 1,

    // disallow control characters in regular expressions
    'no-control-regex': 2,

    // disallow the use of debugger
    'no-debugger': 1,

    // disallow duplicate arguments in function definitions
    'no-dupe-args': 2,

    // disallow duplicate keys in object literals
    'no-dupe-keys': 2,

    // disallow duplicate case labels
    'no-duplicate-case': 2,

    // disallow empty block statements
    'no-empty': 2,

    // disallow empty character classes in regular expressions
    'no-empty-character-class': 2,

    // disallow reassigning exceptions in catch clauses
    'no-ex-assign': 2,

    // disallow unnecessary boolean casts
    'no-extra-boolean-cast': 0,

    // disallow unnecessary parentheses
    'no-extra-parens': [2, 'all', {'nestedBinaryExpressions': false}],

    // disallow unnecessary semicolons
    'no-extra-semi': 2,

    // disallow reassigning function declarations
    'no-func-assign': 2,

    // disallow function or var declarations in nested blocks
    'no-inner-declarations': [2, 'functions'],

    // disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 2,

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,

    // disallow negating the left operand in in expressions
    'no-negated-in-lhs': 2,

    // disallow calling global object properties as functions
    'no-obj-calls': 2,

    // disallow multiple spaces in regular expression literals
    'no-regex-spaces': 2,

    // disallow sparse arrays
    'no-sparse-arrays': 2,

    // disallow confusing multiline expressions
    'no-unexpected-multiline': 2,

    // disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 2,

    // require calls to isNaN() when checking for NaN
    'use-isnan': 2,

    // enforce valid JSDoc comments
    'valid-jsdoc': [2, {
      'requireReturn': true,
      'prefer': {
        'return': 'returns'
      },
      'preferType': {
        'Boolean': 'boolean',
        'Number': 'number',
        'String': 'string',
        'Object': 'object',
        'Symbol': 'symbol',
        'Function': 'function'
      },
    }],

    // enforce comparing typeof expressions against valid strings
    'valid-typeof': 2,
  }
};
