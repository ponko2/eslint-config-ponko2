'use strict';

module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'off',

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'off',

    // enforce line breaks after each array element
    'array-element-newline': 'off',

    // require parentheses around arrow function arguments
    'arrow-parens': 'off',

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'off',

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': 'off',

    // enforce consistent brace style for blocks
    'brace-style': 'off',

    // require or disallow trailing commas
    'comma-dangle': 'off',

    // enforce consistent spacing before and after commas
    'comma-spacing': 'off',

    // enforce consistent comma style
    'comma-style': 'off',

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'off',

    // enforce consistent newlines before and after dots
    'dot-location': 'off',

    // require or disallow newline at the end of files
    'eol-last': 'off',

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',

    // enforce line breaks between arguments of a function call
    'function-call-argument-newline': 'off',

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'off',

    // enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': 'off',

    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'off',

    // enforce consistent indentation
    indent: 'off',

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'off',

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 'off',

    // enforce consistent spacing before and after keywords
    'keyword-spacing': 'off',

    // enforce position of line comments
    'line-comment-position': 'off',

    // enforce consistent linebreak style
    'linebreak-style': 'off',

    // require empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow an empty line between class members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // enforce a maximum line length
    'max-len': 'off',

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': 'off',

    // require a newline after each call in a method chain
    'newline-per-chained-call': 'off',

    // disallow unnecessary parentheses
    'no-extra-parens': 'off',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'off',

    // disallow multiple spaces
    'no-multi-spaces': 'off',

    // disallow multiple empty lines
    'no-multiple-empty-lines': 'off',

    // disallow all tabs
    'no-tabs': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'off',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'off',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',

    // enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': 'off',

    // enforce consistent spacing inside braces
    'object-curly-spacing': 'off',

    // enforce placing object properties on separate lines
    'object-property-newline': 'off',

    // enforce consistent linebreak style for operators
    'operator-linebreak': 'off',

    // require or disallow padding within blocks
    'padded-blocks': 'off',

    // require or disallow padding lines between statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: 'off',

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 'off',

    // require or disallow semicolons instead of ASI
    semi: 'off',

    // enforce consistent spacing before and after semicolons
    'semi-spacing': 'off',

    // enforce location of semicolons
    'semi-style': 'off',

    // enforce consistent spacing before blocks
    'space-before-blocks': 'off',

    // enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': 'off',

    // enforce consistent spacing inside parentheses
    'space-in-parens': 'off',

    // require spacing around infix operators
    'space-infix-ops': 'off',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': 'off',

    // enforce spacing around colons of switch statements
    'switch-colon-spacing': 'off',

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'off',

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'off',

    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'off',

    // require parentheses around immediate `function` invocations
    'wrap-iife': 'off',

    // require parenthesis around regex literals
    'wrap-regex': 'off',

    // require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': 'off',
  },
};
