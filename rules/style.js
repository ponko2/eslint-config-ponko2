'use strict';

module.exports = {
  'rules': {
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],

    // enforce consistent spacing inside single-line blocks
    'block-spacing': [2, 'always'],

    // enforce consistent brace style for blocks
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],

    // enforce camelcase naming convention
    'camelcase': [2, {'properties': 'never'}],

    // enforce consistent spacing before and after commas
    'comma-spacing': [2, {'before': false, 'after': true}],

    // enforce consistent comma style
    'comma-style': [2, 'last'],

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': [2, 'never'],

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 0,

    // enforce at least one newline at the end of files
    'eol-last': 2,

    // enforce named function expressions
    'func-names': 0,

    // enforce the consistent use of either function declarations or expressions
    'func-style': 0,

    // disallow specified identifiers
    'id-blacklist': 0,

    // enforce minimum and maximum identifier lengths
    'id-length': [2, {'min': 2, 'properties': 'never', 'exceptions': ['$', '_']}],

    // require identifiers to match a specified regular expression
    'id-match': 0,

    // enforce consistent indentation
    'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 1}],

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': [2, 'prefer-double'],

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true, 'mode': 'minimum'}],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': 2,

    // enforce consistent linebreak style
    'linebreak-style': [2, 'unix'],

    // require empty lines around comments
    'lines-around-comment': 0,

    // enforce a maximum depth that blocks can be nested
    'max-depth': [1, 4],

    // enforce a maximum line length
    'max-len': [2, {'code': 100, 'tabWidth': 2, 'ignoreComments': true, 'ignoreUrls': true}],

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 0,

    // enforce a maximum number of parameters in function definitions
    'max-params': [1, 4],

    // enforce a maximum number of statements allowed in function blocks
    'max-statements': [1, 15, {'ignoreTopLevelFunctions': true}],

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': [2, {'max': 1}],

    // require constructor function names to begin with a capital letter
    'new-cap': [2, {'newIsCap': true}],

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 2,

    // require or disallow an empty line after var declarations
    'newline-after-var': 0,

    // require an empty line before return statements
    'newline-before-return': 0,

    // require a newline after each call in a method chain
    'newline-per-chained-call': [2, {'ignoreChainWithDepth': 3}],

    // disallow Array constructors
    'no-array-constructor': 2,

    // disallow bitwise operators
    'no-bitwise': 0,

    // disallow continue statements
    'no-continue': 2,

    // disallow inline comments after code
    'no-inline-comments': 0,

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 2,

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,

    // disallow multiple empty lines
    'no-multiple-empty-lines': [2, {'max': 2, 'maxBOF': 0, 'maxEOF': 1}],

    // disallow negated conditions
    'no-negated-condition': 0,

    // disallow nested ternary expressions
    'no-nested-ternary': 2,

    // disallow Object constructors
    'no-new-object': 2,

    // disallow the unary operators ++ and --
    'no-plusplus': [2, {'allowForLoopAfterthoughts': true}],

    // disallow specified syntax
    'no-restricted-syntax': [2, 'WithStatement'],

    // disallow spacing between function identifiers and their applications
    'no-spaced-func': 2,

    // disallow ternary operators
    'no-ternary': 0,

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [2, {'allowAfterThis': true}],

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': [2, {'defaultAssignment': false}],

    // disallow whitespace before properties
    'no-whitespace-before-property': 2,

    // enforce consistent spacing inside braces
    'object-curly-spacing': [2, 'never'],

    // enforce variables to be declared either together or separately in functions
    'one-var': [2, {'uninitialized': 'always', 'initialized': 'never'}],

    // require or disallow newlines around var declarations
    'one-var-declaration-per-line': [2, 'initializations'],

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': [2, 'always'],

    // enforce consistent linebreak style for operators
    'operator-linebreak': [2, 'after', {'overrides': {'?': 'ignore', ':': 'ignore'}}],

    // require or disallow padding within blocks
    'padded-blocks': [2, 'never'],

    // require quotes around object literal property names
    'quote-props': [2, 'consistent-as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false,
    }],

    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': [2, 'single', 'avoid-escape'],

    // require JSDoc comments
    'require-jsdoc': 2,

    // require or disallow semicolons instead of ASI
    'semi': [2, 'always'],

    // enforce consistent spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],

    // enforce sorted import declarations within module
    'sort-imports': 0,

    // require variables within the same declaration block to be sorted
    'sort-vars': 0,

    // enforce consistent spacing before blocks
    'space-before-blocks': [2, 'always'],

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],

    // enforce consistent spacing inside parentheses
    'space-in-parens': [2, 'never'],

    // require spacing around operators
    'space-infix-ops': 2,

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': [2, 'always', {'exceptions': ['-', '+'], 'markers': ['=', '!']}],

    // require parenthesis around regex literals
    'wrap-regex': 0,
  }
};
