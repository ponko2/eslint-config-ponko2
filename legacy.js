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
    // require braces in arrow function body
    'arrow-body-style': 0,

    // require parens in arrow function arguments
    'arrow-parens': 0,

    // require space before/after arrow function's arrow
    'arrow-spacing': 0,

    // ensure calling of super() in constructors
    'constructor-super': 0,

    // enforce spacing around the * in generator functions
    'generator-star-spacing': 0,

    // disallow modifying variables of class declarations
    'no-class-assign': 0,

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 0,

    // disallow modifying variables that are declared using const
    'no-const-assign': 0,

    // disallow duplicate name in class members
    'no-dupe-class-members': 0,

    // disallow duplicate module imports
    'no-duplicate-imports': 0,

    // disallow use of the new operator with the Symbol object
    'no-new-symbol': 0,

    // restrict usage of specified modules when loaded by import declaration
    'no-restricted-imports': 0,

    // disallow use of this/super before calling super() in constructors
    'no-this-before-super': 0,

    // disallow unnecessary constructor
    'no-useless-constructor': 0,

    // require let or const instead of var
    'no-var': 0,

    // require method and property shorthand syntax for object literals
    'object-shorthand': 0,

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 0,

    // suggest using const declaration for variables that are never reassigned after declared
    'prefer-const': 0,

    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,

    // suggest using the rest parameters instead of arguments
    'prefer-rest-params': 0,

    // suggest using the spread operator instead of .apply()
    'prefer-spread': 0,

    // suggest using template literals instead of strings concatenation
    'prefer-template': 0,

    // disallow generator functions that do not have yield
    'require-yield': 0,

    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': 0,

    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': 0,
  }
};
