"use strict";

module.exports = {
  rules: {
    // enforce “for” loop update clause moving the counter in the right direction.
    "for-direction": "error",

    // enforce return statements in getters
    "getter-return": "error",

    // disallow await inside of loops
    "no-await-in-loop": "error",

    // disallow comparing against -0
    "no-compare-neg-zero": "error",

    // disallow assignment operators in conditional expressions
    "no-cond-assign": ["error", "always"],

    // disallow the use of console
    "no-console": "warn",

    // disallow constant expressions in conditions
    "no-constant-condition": ["warn", { checkLoops: false }],

    // disallow control characters in regular expressions
    "no-control-regex": "error",

    // disallow the use of debugger
    "no-debugger": "warn",

    // disallow duplicate arguments in function definitions
    "no-dupe-args": "error",

    // disallow duplicate keys in object literals
    "no-dupe-keys": "error",

    // disallow duplicate case labels
    "no-duplicate-case": "error",

    // disallow empty block statements
    "no-empty": "error",

    // disallow empty character classes in regular expressions
    "no-empty-character-class": "error",

    // disallow reassigning exceptions in catch clauses
    "no-ex-assign": "error",

    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": "off",

    // disallow unnecessary parentheses
    "no-extra-parens": "off",

    // disallow unnecessary semicolons
    "no-extra-semi": "off",

    // disallow reassigning function declarations
    "no-func-assign": "error",

    // disallow variable or function declarations in nested blocks
    "no-inner-declarations": ["error", "functions"],

    // disallow invalid regular expression strings in RegExp constructors
    "no-invalid-regexp": "error",

    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipRegExps: true,
        skipTemplates: true
      }
    ],

    // disallow negating the left operand in in expressions
    "no-negated-in-lhs": "error",

    // disallow calling global object properties as functions
    "no-obj-calls": "error",

    // Disallow use of Object.prototypes builtins directly
    "no-prototype-builtins": "off",

    // disallow multiple spaces in regular expression literals
    "no-regex-spaces": "error",

    // disallow sparse arrays
    "no-sparse-arrays": "error",

    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "error",

    // disallow confusing multiline expressions
    "no-unexpected-multiline": "off",

    // disallow unreachable code after return, throw, continue, and break statements
    "no-unreachable": "error",

    // disallow control flow statements in finally blocks
    "no-unsafe-finally": "error",

    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "error",

    // require calls to isNaN() when checking for NaN
    "use-isnan": "error",

    // enforce valid JSDoc comments
    "valid-jsdoc": [
      "error",
      {
        requireReturn: true,
        prefer: { return: "returns" },
        preferType: {
          Boolean: "boolean",
          Number: "number",
          String: "string",
          Object: "object",
          Symbol: "symbol",
          Function: "function"
        }
      }
    ],

    // enforce comparing typeof expressions against valid strings
    "valid-typeof": "error"
  }
};
