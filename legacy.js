'use strict';

module.exports = {
  'extends': [
    'eslint-config-ponko2/base',
    'eslint-config-ponko2/rules/node',
  ].map(require.resolve),
  'env': {
    'browser': true,
    'node': true,
    'es6': false,
  },
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'script',
    'ecmaFeatures': {
      'impliedStrict': false,
    },
  },
  'rules': {
    // require braces around arrow function bodies
    'arrow-body-style': 0,

    // require parentheses around arrow function arguments
    'arrow-parens': 0,

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 0,

    // require super() calls in constructors
    'constructor-super': 0,

    // enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': 0,

    // disallow reassigning class members
    'no-class-assign': 0,

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 0,

    // disallow reassigning const variables
    'no-const-assign': 0,

    // disallow duplicate class members
    'no-dupe-class-members': 0,

    // disallow duplicate module imports
    'no-duplicate-imports': 0,

    // disallow new operators with the Symbol object
    'no-new-symbol': 0,

    // disallow specified modules when loaded by import
    'no-restricted-imports': 0,

    // disallow this/super before calling super() in constructors
    'no-this-before-super': 0,

    // disallow unnecessary constructors
    'no-useless-constructor': 0,

    // require let or const instead of var
    'no-var': 0,

    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': 0,

    // require arrow functions as callbacks
    'prefer-arrow-callback': 0,

    // require const declarations for variables that are never reassigned after declared
    'prefer-const': 0,

    // require Reflect methods where applicable
    'prefer-reflect': 0,

    // require rest parameters instead of arguments
    'prefer-rest-params': 0,

    // require spread operators instead of .apply()
    'prefer-spread': 0,

    // require template literals instead of string concatenation
    'prefer-template': 0,

    // require generator functions to contain yield
    'require-yield': 0,

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 0,

    // require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': 0,
  }
};
