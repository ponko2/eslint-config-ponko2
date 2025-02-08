'use strict';

const globals = require('globals');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  languageOptions: {
    globals: {
      ...globals.es2025,
    },
  },
  rules: {
    // ---------------------------------------------------------------------------
    // Possible Problems
    // These rules relate to possible logic errors in code:
    // ---------------------------------------------------------------------------

    // Enforce `return` statements in callbacks of array methods
    'array-callback-return': [
      'error',
      { allowImplicit: true, checkForEach: true },
    ],

    // Require `super()` calls in constructors
    'constructor-super': 'error',

    // Enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 'error',

    // Enforce `return` statements in getters
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',

    // Disallow `await` inside of loops
    'no-await-in-loop': 'error',

    // Disallow reassigning class members
    'no-class-assign': 'error',

    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // Disallow reassigning `const` variables
    'no-const-assign': 'error',

    // Disallow expressions where the operation doesn’t affect the value
    'no-constant-binary-expression': 'error',

    // Disallow constant expressions in conditions
    'no-constant-condition': ['warn', { checkLoops: false }],

    // Disallow returning value from constructor
    'no-constructor-return': 'error',

    // Disallow control characters in regular expressions
    'no-control-regex': 'error',

    // Disallow the use of `debugger`
    'no-debugger': 'error',

    // Disallow duplicate arguments in `function` definitions
    'no-dupe-args': 'error',

    // Disallow duplicate class members
    'no-dupe-class-members': 'error',

    // Disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    'no-duplicate-case': 'error',

    // Disallow duplicate module imports
    'no-duplicate-imports': 'off',

    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // Disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // Disallow reassigning exceptions in `catch` clauses
    'no-ex-assign': 'error',

    // Disallow fallthrough of `case` statements
    'no-fallthrough': 'error',

    // Disallow reassigning `function` declarations
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings
    'no-import-assign': 'error',

    // Disallow variable or `function` declarations in nested blocks
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in `RegExp` constructors
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    'no-irregular-whitespace': [
      'error',
      { skipStrings: true, skipRegExps: true, skipTemplates: true },
    ],

    // Disallow literal numbers that lose precision
    'no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'error',

    // Disallow `new` operators with global non-constructor functions
    'no-new-native-nonconstructor': 'error',

    // Disallow `new` operators with the `Symbol` object
    'no-new-symbol': 'error',

    // Disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',

    // Disallow calling some `Object.prototype` methods directly on objects
    'no-prototype-builtins': 'error',

    // Disallow assignments where both sides are exactly the same
    'no-self-assign': ['error', { props: true }],

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Disallow returning values from setters
    'no-setter-return': 'error',

    // Disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // Disallow `this` / `super` before calling `super()` in constructors
    'no-this-before-super': 'error',

    // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
    'no-undef': ['error', { typeof: true }],

    // Disallow confusing multiline expressions
    'no-unexpected-multiline': 'off',

    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',

    // Disallow unreachable code after `return` , `throw` , `continue` , and `break` statements
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 'error',

    // Disallow control flow statements in `finally` blocks
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // Disallow unused private class members
    'no-unused-private-class-members': 'error',

    // Disallow unused variables
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // Disallow the use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true }],

    // Disallow useless backreferences in regular expressions
    'no-useless-backreference': 'error',

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    'require-atomic-updates': 'off',

    // Require calls to `isNaN()` when checking for `NaN`
    'use-isnan': 'error',

    // Enforce comparing `typeof` expressions against valid strings
    'valid-typeof': ['error', { requireStringLiterals: true }],

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
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

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
    curly: ['error', 'all'],

    // Require `default` cases in `switch` statements
    'default-case': 'error',

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // Enforce default parameters to be last
    'default-param-last': 'error',

    // Enforce dot notation whenever possible
    'dot-notation': [
      'error',
      { allowKeywords: true, allowPattern: '^[a-z]+(_[a-z]+)+$' },
    ],

    // Require the use of `===` and `!==`
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': [
      'error',
      'always',
      { includeCommonJSModuleExports: false },
    ],

    // Require or disallow named `function` expressions
    'func-names': 'off',

    // Enforce the consistent use of either `function` declarations or expressions
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

    // Enforce a particular style for multiline comments
    'multiline-comment-style': 'off',

    // Require constructor names to begin with a capital letter
    'new-cap': ['error', { newIsCap: true }],

    // Disallow the use of `alert` , `confirm` , and `prompt`
    'no-alert': 'warn',

    // Disallow `Array` constructors
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    'no-bitwise': 'off',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // Disallow the use of `console`
    'no-console': 'off',

    // Disallow `continue` statements
    'no-continue': 'error',

    // Disallow deleting variables
    'no-delete-var': 'error',

    // Disallow equal signs explicitly at the beginning of regular expressions
    'no-div-regex': 'off',

    // Disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow empty block statements
    'no-empty': 'error',

    // Disallow empty functions
    'no-empty-function': 'error',

    // Disallow empty static blocks
    'no-empty-static-block': 'error',

    // Disallow `null` comparisons without type-checking operators
    'no-eq-null': 'off',

    // Disallow the use of `eval()`
    'no-eval': 'error',

    // Disallow extending native types
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'error',

    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

    // Disallow unnecessary labels
    'no-extra-label': 'error',

    // Disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',

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

    // Disallow `&amp;#92;8` and `&amp;#92;9` escape sequences in string literals
    'no-nonoctal-decimal-escape': 'error',

    // Disallow calls to the `Object` constructor without an argument
    'no-object-constructor': 'error',

    // Disallow octal literals
    'no-octal': 'error',

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

    // Disallow variable redeclaration
    'no-redeclare': 'error',

    // Disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',

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

    // Disallow `javascript:` urls
    'no-script-url': 'error',

    // Disallow comma operators
    'no-sequences': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

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
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // Disallow unused labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': 'off',

    // Disallow unnecessary `catch` clauses
    'no-useless-catch': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],

    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // Disallow unnecessary escape characters
    'no-useless-escape': 'error',

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

    // Disallow `with` statements
    'no-with': 'error',

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
    'operator-assignment': ['error', 'always'],

    // Require using arrow functions for callbacks
    'prefer-arrow-callback': 'off',

    // Require `const` declarations for variables that are never reassigned after declared
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],

    // Require destructuring from arrays and/or objects
    'prefer-destructuring': [
      'error',
      { array: false, object: true },
      { enforceForRenamedProperties: false },
    ],

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

    // Enforce the consistent use of the radix argument when using `parseInt()`
    radix: 'error',

    // Disallow async functions which have no `await` expression
    'require-await': 'off',

    // Enforce the use of `u` or `v` flag on RegExp
    'require-unicode-regexp': 'off',

    // Require generator functions to contain `yield`
    'require-yield': 'error',

    // Enforce sorted import declarations within modules
    'sort-imports': 'off',

    // Require object keys to be sorted
    'sort-keys': 'off',

    // Require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // Require or disallow strict mode directives
    strict: ['error', 'safe'],

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

    // Enforce position of line comments
    'line-comment-position': 'off',

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'off',
  },
};
