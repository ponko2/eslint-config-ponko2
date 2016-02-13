'use strict';

module.exports = {
  'rules': {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],

    // disallow or enforce spaces inside of single line blocks
    'block-spacing': [2, 'always'],

    // enforce one true brace style
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],

    // require camel case names
    'camelcase': [2, {'properties': 'never'}],

    // enforce spacing before and after comma
    'comma-spacing': [2, {'before': false, 'after': true}],

    // enforce one true comma style
    'comma-style': [2, 'last'],

    // require or disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 0,

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,

    // require function expressions to have a name
    'func-names': 0,

    // enforce use of function declarations or expressions
    'func-style': 0,

    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': [2, {'min': 2, 'properties': 'never', 'exceptions': ['$', '_']}],

    // require identifiers to match the provided regular expression
    'id-match': 0,

    // blacklist certain identifiers to prevent them being used
    'id-blacklist': 0,

    // specify tab or space width for your code
    'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 1}],

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [2, 'prefer-double'],

    // enforce spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true, 'mode': 'minimum'}],

    // enforce spacing before and after keywords
    'keyword-spacing': 2,

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [2, 'unix'],

    // enforce empty lines around comments
    'lines-around-comment': 0,

    // specify the maximum depth that blocks can be nested
    'max-depth': [1, 4],

    // specify the maximum length of a line in your program
    'max-len': [2, {'code': 100, 'tabWidth': 2, 'ignoreComments': true, 'ignoreUrls': true}],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,

    // limits the number of parameters that can be used in the function declaration
    'max-params': [1, 4],

    // specify the maximum number of statement allowed in a function
    'max-statements': [1, 15, {'ignoreTopLevelFunctions': true}],

    // require a capital letter for constructors
    'new-cap': [2, {'newIsCap': true}],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,

    // require or disallow an empty newline after variable declarations
    'newline-after-var': 0,

    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 0,

    // disallow use of the Array constructor
    'no-array-constructor': 2,

    // disallow use of bitwise operators
    'no-bitwise': 0,

    // disallow use of the continue statement
    'no-continue': 2,

    // disallow comments inline after code
    'no-inline-comments': 0,

    // disallow if as the only statement in an else block
    'no-lonely-if': 2,

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,

    // disallow multiple empty lines
    'no-multiple-empty-lines': [2, {'max': 2, 'maxBOF': 0, 'maxEOF': 1}],

    // disallow negated conditions
    'no-negated-condition': 0,

    // disallow nested ternary expressions
    'no-nested-ternary': 2,

    // disallow the use of the Object constructor
    'no-new-object': 2,

    // disallow use of unary operators, ++ and --
    'no-plusplus': [2, {'allowForLoopAfterthoughts': true}],

    // disallow use of certain syntax in code
    'no-restricted-syntax': [2, 'WithStatement'],

    // disallow whitespace before properties
    'no-whitespace-before-property': 2,

    // disallow space between function identifier and application
    'no-spaced-func': 2,

    // disallow the use of ternary operators
    'no-ternary': 0,

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [2, {'allowAfterThis': true}],

    // disallow the use of ternary operators when a simpler alternative exists
    'no-unneeded-ternary': [2, {'defaultAssignment': false}],

    // require or disallow padding inside curly braces
    'object-curly-spacing': [2, 'never'],

    // require or disallow one variable declaration per function
    'one-var': [2, {'uninitialized': 'always', 'initialized': 'never'}],

    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [2, 'initializations'],

    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [2, 'always'],

    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [2, 'after'],

    // enforce padding within blocks
    'padded-blocks': [2, 'never'],

    // require quotes around object literal property names
    'quote-props': [2, 'consistent-as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false,
    }],

    // specify whether backticks, double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],

    // Require JSDoc comment
    'require-jsdoc': 2,

    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],

    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],

    // sort variables within the same declaration block
    'sort-vars': 0,

    // sort import declarations within module
    'sort-imports': 0,

    // require or disallow a space before blocks
    'space-before-blocks': [2, 'always'],

    // require or disallow a space before function opening parenthesis
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],

    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],

    // require spaces around operators
    'space-infix-ops': 2,

    // require or disallow spaces before/after unary operators
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],

    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [2, 'always', {'exceptions': ['-', '+'], 'markers': ['=', '!']}],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,
  }
};
