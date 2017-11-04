'use strict';

module.exports = {
  'rules': {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': [
      'error', {
        'multiline': true,
        'minItems': null,
      }
    ],

    // enforce line breaks after each array element
    'array-element-newline': 'off',

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce consistent spacing inside single-line blocks
    'block-spacing': ['error', 'always'],

    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],

    // enforce camelcase naming convention
    'camelcase': ['error', {'properties': 'never'}],

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // require or disallow trailing commas
    'comma-dangle': ['error', 'only-multiline'],

    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', {'before': false, 'after': true}],

    // enforce consistent comma style
    'comma-style': ['error', 'last'],

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // require or disallow newline at the end of files
    'eol-last': 'error',

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['error', 'always', {'includeCommonJSModuleExports': false}],

    // require or disallow named function expressions
    'func-names': 'off',

    // enforce the consistent use of either function declarations or expressions
    'func-style': 'off',

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'multiline'],

    // disallow specified identifiers
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    'id-length': ['error', {'min': 2, 'properties': 'never', 'exceptions': ['$', '_']}],

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    // enforce consistent indentation
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
        'outerIIFEBody': 0,
        'MemberExpression': 1,
        'FunctionDeclaration': {
          'parameters': 1,
          'body': 1
        },
        'FunctionExpression': {
          'parameters': 1,
          'body': 1
        },
        'CallExpression': {'arguments': 1},
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'flatTernaryExpressions': true,
      }
    ],

    // enforce consistent indentation
    'indent-legacy': 'off',

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true, 'mode': 'minimum'}],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': 'error',

    // enforce position of line comments
    'line-comment-position': 'off',

    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // require empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    'lines-around-directive': 'off',

    // enforce a maximum depth that blocks can be nested
    'max-depth': ['warn', 4],

    // enforce a maximum line length
    'max-len': [
      'error', {
        'code': 100,
        'tabWidth': 2,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      }
    ],

    // enforce a maximum file length
    'max-lines': 'off',

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    'max-params': ['warn', 4],

    // enforce a maximum number of statements allowed in function blocks
    'max-statements': ['warn', 15, {'ignoreTopLevelFunctions': true}],

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', {'max': 1}],

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // require constructor names to begin with a capital letter
    'new-cap': ['error', {'newIsCap': true}],

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require or disallow an empty line after variable declarations
    'newline-after-var': 'off',

    // require an empty line before return statements
    'newline-before-return': 'off',

    // require a newline after each call in a method chain
    'newline-per-chained-call': ['error', {'ignoreChainWithDepth': 3}],

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'off',

    // disallow continue statements
    'no-continue': 'error',

    // disallow inline comments after code
    'no-inline-comments': 'off',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // disallow mixes of different operators
    'no-mixed-operators': 'off',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {'max': 2, 'maxBOF': 0, 'maxEOF': 1}],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow the unary operators ++ and --
    'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],

    // disallow specified syntax
    'no-restricted-syntax': ['error', 'WithStatement'],

    // disallow spacing between function identifiers and their applications
    'no-spaced-func': 'error',

    // disallow tabs in file
    'no-tabs': 'error',

    // disallow ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error', {
        'skipBlankLines': false,
        'ignoreComments': false,
      }
    ],

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {'allowAfterThis': true, 'allowAfterSuper': true}],

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', {'defaultAssignment': false}],

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',

    // enforce consistent line breaks inside braces
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'minProperties': 0,
          'multiline': true,
          'consistent': true,
        },
        'ObjectPattern': {
          'minProperties': 0,
          'multiline': true,
          'consistent': true,
        },
      }
    ],

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'never'],

    // enforce placing object properties on separate lines
    'object-property-newline': ['error', {'allowMultiplePropertiesPerLine': true}],

    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', {'uninitialized': 'always', 'initialized': 'never'}],

    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'initializations'],

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'after', {'overrides': {'?': 'ignore', ':': 'ignore'}}],

    // require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],

    // require or disallow padding lines between statements
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': 'directive',
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': 'directive',
        'next': 'directive'
      }
    ],

    // require quotes around object literal property names
    'quote-props': [
      'error', 'consistent-as-needed', {
        'keywords': false,
        'unnecessary': true,
        'numbers': false,
      }
    ],

    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': ['error', 'single', 'avoid-escape'],

    // require JSDoc comments
    'require-jsdoc': 'error',

    // require or disallow semicolons instead of ASI
    'semi': ['error', 'always'],

    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', {'before': false, 'after': true}],

    // enforce location of semicolons
    'semi-style': ['error', 'last'],

    // require object keys to be sorted
    'sort-keys': 'off',

    // require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // enforce consistent spacing before blocks
    'space-before-blocks': ['error', 'always'],

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [
      'error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      }
    ],

    // enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': [
      'error', 'always', {
        'exceptions': ['-', '+'],
        'markers': ['=', '!'],
        'block': {'balanced': true},
      }
    ],

    // enforce spacing around colons of switch statements
    'switch-colon-spacing': [
      'error', {
        'after': true,
        'before': false,
      }
    ],

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // require or disallow the Unicode BOM
    'unicode-bom': 'error',

    // require parenthesis around regex literals
    'wrap-regex': 'off',
  }
};
