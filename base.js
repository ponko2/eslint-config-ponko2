'use strict';

const globals = require('globals');
const js = require('@eslint/js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  languageOptions: {
    globals: {
      ...globals.es2025,
    },
  },
  rules: {
    ...js.configs.recommended.rules,

    // ---------------------------------------------------------------------------
    // Possible Problems
    // These rules relate to possible logic errors in code:
    // ---------------------------------------------------------------------------

    // Enforce `return` statements in callbacks of array methods
    'array-callback-return': [
      'error',
      { allowImplicit: true, checkForEach: true },
    ],

    // Disallow `await` inside of loops
    'no-await-in-loop': 'error',

    // Disallow returning value from constructor
    'no-constructor-return': 'error',

    // Disallow duplicate module imports
    'no-duplicate-imports': 'off',

    // Disallow variable or `function` declarations in nested blocks
    'no-inner-declarations': 'error',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // Disallow `let` or `var` variables that are read but never assigned
    'no-unassigned-vars': 'error',

    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 'error',

    // Disallow the use of variables before they are defined
    'no-use-before-define': ['error', { functions: false }],

    // Disallow variable assignments when the value is not used
    'no-useless-assignment': 'error',

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    'require-atomic-updates': 'off',

    // ---------------------------------------------------------------------------
    // Suggestions
    // These rules suggest alternate ways of doing things:
    // ---------------------------------------------------------------------------

    // Enforce getter and setter pairs in objects and classes
    'accessor-pairs': 'off',

    // Require braces around arrow function bodies
    'arrow-body-style': 'off',

    // Enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',

    // Enforce camelcase naming convention
    camelcase: ['error', { properties: 'never' }],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // Enforce that class methods utilize `this`
    'class-methods-use-this': 'error',

    // Enforce a maximum cyclomatic complexity allowed in a program
    complexity: 'off',

    // Require `return` statements to either always or never specify values
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // Enforce consistent brace style for all control statements
    curly: 'error',

    // Require `default` cases in `switch` statements
    'default-case': 'error',

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // Enforce default parameters to be last
    'default-param-last': 'error',

    // Enforce dot notation whenever possible
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],

    // Require the use of `===` and `!==`
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'error',

    // Require or disallow named `function` expressions
    'func-names': 'off',

    // Enforce the consistent use of either `function` declarations or expressions assigned to variables
    'func-style': 'off',

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'error',

    // Require `for-in` loops to include an `if` statement
    'guard-for-in': 'error',

    // Disallow specified identifiers
    'id-denylist': 'off',

    // Enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    'id-match': 'off',

    // Require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // Require or disallow logical assignment operator shorthand
    'logical-assignment-operators': 'error',

    // Enforce a maximum number of classes per file
    'max-classes-per-file': 'off',

    // Enforce a maximum depth that blocks can be nested
    'max-depth': 'off',

    // Enforce a maximum number of lines per file
    'max-lines': 'off',

    // Enforce a maximum number of lines of code in a function
    'max-lines-per-function': 'off',

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',

    // Require constructor names to begin with a capital letter
    'new-cap': 'error',

    // Disallow the use of `alert` , `confirm` , and `prompt`
    'no-alert': 'warn',

    // Disallow `Array` constructors
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    'no-bitwise': 'off',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'error',

    // Disallow the use of `console`
    'no-console': 'off',

    // Disallow `continue` statements
    'no-continue': 'error',

    // Disallow equal signs explicitly at the beginning of regular expressions
    'no-div-regex': 'off',

    // Disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow empty functions
    'no-empty-function': 'error',

    // Disallow `null` comparisons without type-checking operators
    'no-eq-null': 'off',

    // Disallow the use of `eval()`
    'no-eval': 'error',

    // Disallow extending native types
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'error',

    // Disallow unnecessary labels
    'no-extra-label': 'error',

    // Disallow shorthand type conversions
    'no-implicit-coercion': 'off',

    // Disallow declarations in the global scope
    'no-implicit-globals': 'error',

    // Disallow the use of `eval()` -like methods
    'no-implied-eval': 'error',

    // Disallow inline comments after code
    'no-inline-comments': 'off',

    // Disallow use of `this` in contexts where the value of `this` is `undefined`
    'no-invalid-this': 'off',

    // Disallow the use of the `__iterator__` property
    'no-iterator': 'error',

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // Disallow labeled statements
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': 'error',

    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'error',

    // Disallow magic numbers
    'no-magic-numbers': 'off',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // Disallow multiline strings
    'no-multi-str': 'error',

    // Disallow negated conditions
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow `new` operators outside of assignments or comparisons
    'no-new': 'error',

    // Disallow `new` operators with the `Function` object
    'no-new-func': 'error',

    // Disallow `new` operators with the `String` , `Number` , and `Boolean` objects
    'no-new-wrappers': 'error',

    // Disallow calls to the `Object` constructor without an argument
    'no-object-constructor': 'error',

    // Disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // Disallow reassigning `function` parameters
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnValue
          'event', // for event.returnValue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
          'registration', // for Create React App ServiceWorker registration
          'state', // for Redux Toolkit state
        ],
      },
    ],

    // Disallow the unary operators `++` and `--`
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Disallow the use of the `__proto__` property
    'no-proto': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: {
          direct: true,
          named: true,
          defaultFrom: true,
          namedFrom: true,
          namespaceFrom: true,
        },
      },
    ],

    // Disallow specified global variables
    'no-restricted-globals': 'off',

    // Disallow specified modules when loaded by `import`
    'no-restricted-imports': 'off',

    // Disallow certain properties on certain objects
    'no-restricted-properties': 'off',

    // Disallow specified syntax
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],

    // Disallow assignment operators in `return` statements
    'no-return-assign': ['error', 'always'],

    // Disallow `javascript:` URLs
    'no-script-url': 'error',

    // Disallow comma operators
    'no-sequences': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // Disallow ternary operators
    'no-ternary': 'off',

    // Disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // Disallow initializing variables to `undefined`
    'no-undef-init': 'error',

    // Disallow the use of `undefined` as an identifier
    'no-undefined': 'off',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      { allowAfterThis: true, allowAfterSuper: true },
    ],

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow unused expressions
    'no-unused-expressions': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': 'off',

    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'error',

    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // Disallow redundant return statements
    'no-useless-return': 'error',

    // Require `let` or `const` instead of `var`
    'no-var': 'error',

    // Disallow `void` operators
    'no-void': ['error', { allowAsStatement: true }],

    // Disallow specified warning terms in comments
    'no-warning-comments': 'off',

    // Require or disallow method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: true,
        avoidExplicitReturnArrows: true,
      },
    ],

    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': 'error',

    // Require using arrow functions for callbacks
    'prefer-arrow-callback': 'off',

    // Require `const` declarations for variables that are never reassigned after declared
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],

    // Require destructuring from arrays and/or objects
    'prefer-destructuring': ['error', { array: false, object: true }],

    // Disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 'error',

    // Enforce using named capture group in regular expression
    'prefer-named-capture-group': 'off',

    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    'prefer-object-has-own': 'off',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': 'error',

    // Require rest parameters instead of `arguments`
    'prefer-rest-params': 'error',

    // Require spread operators instead of `.apply()`
    'prefer-spread': 'error',

    // Require template literals instead of string concatenation
    'prefer-template': 'error',

    // Disallow losing originally caught error when re-throwing custom errors
    'preserve-caught-error': 'error',

    // Enforce the consistent use of the radix argument when using `parseInt()`
    radix: 'error',

    // Disallow async functions which have no `await` expression
    'require-await': 'off',

    // Enforce the use of `u` or `v` flag on regular expressions
    'require-unicode-regexp': 'off',

    // Enforce sorted import declarations within modules
    'sort-imports': 'off',

    // Require object keys to be sorted
    'sort-keys': 'off',

    // Require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // Require or disallow strict mode directives
    strict: 'error',

    // Require symbol descriptions
    'symbol-description': 'error',

    // Require `var` declarations be placed at the top of their containing scope
    'vars-on-top': 'error',

    // Require or disallow “Yoda” conditions
    yoda: ['error', 'never', { exceptRange: true, onlyEquality: true }],

    // ---------------------------------------------------------------------------
    // Layout & Formatting
    // These rules care about how the code looks rather than how it executes:
    // ---------------------------------------------------------------------------

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'off',
  },
};
