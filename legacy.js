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
    'arrow-body-style': 'off',

    // require parentheses around arrow function arguments
    'arrow-parens': 'off',

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'off',

    // require super() calls in constructors
    'constructor-super': 'off',

    // enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': 'off',

    // disallow reassigning class members
    'no-class-assign': 'off',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'off',

    // disallow reassigning const variables
    'no-const-assign': 'off',

    // disallow duplicate class members
    'no-dupe-class-members': 'off',

    // disallow duplicate module imports
    'no-duplicate-imports': 'off',

    // disallow new operators with the Symbol object
    'no-new-symbol': 'off',

    // disallow specified modules when loaded by import
    'no-restricted-imports': 'off',

    // disallow this/super before calling super() in constructors
    'no-this-before-super': 'off',

    // disallow unnecessary constructors
    'no-useless-constructor': 'off',

    // require let or const instead of var
    'no-var': 'off',

    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': 'off',

    // require arrow functions as callbacks
    'prefer-arrow-callback': 'off',

    // require const declarations for variables that are never reassigned after declared
    'prefer-const': 'off',

    // require Reflect methods where applicable
    'prefer-reflect': 'off',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'off',

    // require spread operators instead of .apply()
    'prefer-spread': 'off',

    // require template literals instead of string concatenation
    'prefer-template': 'off',

    // require generator functions to contain yield
    'require-yield': 'off',

    // enforce sorted import declarations within module
    'sort-imports': 'off',

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'off',

    // require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': 'off',
  }
};
