'use strict';

module.exports = {
  'rules': {
    // enforce getter and setter pairs in objects
    'accessor-pairs': [2, {'setWithoutGet': true}],

    // enforce return statements in callbacks of array methods
    'array-callback-return': 2,

    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 2,

    // enforce a maximum cyclomatic complexity allowed in a program
    'complexity': [1, 11],

    // require return statements to either always or never specify values
    'consistent-return': 2,

    // enforce consistent brace style for all control statements
    'curly': [2, 'all'],

    // require default cases in switch statements
    'default-case': 2,

    // enforce consistent newlines before and after dots
    'dot-location': [2, 'property'],

    // enforce dot notation whenever possible
    'dot-notation': [2, {'allowKeywords': true, 'allowPattern': '^[a-z]+(_[a-z]+)+$'}],

    // require the use of === and !==
    'eqeqeq': [2, 'smart'],

    // require for-in loops to include an if statement
    'guard-for-in': 2,

    // disallow the use of alert, confirm, and prompt
    'no-alert': 1,

    // disallow the use of arguments.caller or arguments.callee
    'no-caller': 2,

    // disallow lexical declarations in case clauses
    'no-case-declarations': 2,

    // disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': 2,

    // disallow else blocks after return statements in if statements
    'no-else-return': 2,

    // disallow empty functions
    'no-empty-function': 2,

    // disallow empty destructuring patterns
    'no-empty-pattern': 2,

    // disallow null comparisons without type-checking operators
    'no-eq-null': 2,

    // disallow the use of eval()
    'no-eval': [2, {'allowIndirect': true}],

    // disallow extending native types
    'no-extend-native': 2,

    // disallow unnecessary calls to .bind()
    'no-extra-bind': 2,

    // disallow unnecessary labels
    'no-extra-label': 2,

    // disallow fallthrough of case statements
    'no-fallthrough': 2,

    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,

    // disallow shorthand type conversions
    'no-implicit-coercion': [2, {
      'boolean': true,
      'number': true,
      'string': true,
      'allow': ['!!'],
    }],

    // disallow var and named function declarations in the global scope
    'no-implicit-globals': 2,

    // disallow the use of eval()-like methods
    'no-implied-eval': 2,

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,

    // disallow the use of the __iterator__ property
    'no-iterator': 2,

    // disallow labeled statements
    'no-labels': 2,

    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,

    // disallow function declarations and expressions inside loop statements
    'no-loop-func': 2,

    // disallow magic numbers
    'no-magic-numbers': 0,

    // disallow multiple spaces
    'no-multi-spaces': [2, {'exceptions': {
      'ImportDeclaration': true,
      'VariableDeclarator': true,
      'AssignmentExpression': true
    }}],

    // disallow multiline strings
    'no-multi-str': 2,

    // disallow reassigning native objects
    'no-native-reassign': 2,

    // disallow new operators outside of assignments or comparisons
    'no-new': 2,

    // disallow new operators with the Function object
    'no-new-func': 2,

    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 2,

    // disallow octal literals
    'no-octal': 2,

    // disallow octal escape sequences in string literals
    'no-octal-escape': 2,

    // disallow reassigning function parameters
    'no-param-reassign': [2, {'props': true}],

    // disallow the use of the __proto__ property
    'no-proto': 2,

    // disallow var redeclaration
    'no-redeclare': [2, {'builtinGlobals': true}],

    // disallow assignment operators in return statements
    'no-return-assign': 2,

    // disallow javascript: urls
    'no-script-url': 2,

    // disallow assignments where both sides are exactly the same
    'no-self-assign': 2,

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,

    // disallow comma operators
    'no-sequences': 2,

    // disallow throwing literals as exceptions
    'no-throw-literal': 2,

    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 2,

    // disallow unused expressions
    'no-unused-expressions': 2,

    // disallow unused labels
    'no-unused-labels': 2,

    // disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 2,

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,

    // disallow unnecessary escape characters
    'no-useless-escape': 2,

    // disallow void operators
    'no-void': 2,

    // disallow specified warning terms in comments
    'no-warning-comments': [0, {'terms': ['todo', 'fixme', 'xxx'], 'location': 'start'}],

    // disallow with statements
    'no-with': 2,

    // enforce the consistent use of the radix argument when using parseInt()
    'radix': 2,

    // require var declarations be placed at the top of their containing scope
    'vars-on-top': 2,

    // require parentheses around immediate function invocations
    'wrap-iife': [2, 'outside'],

    // require or disallow "Yoda" conditions
    'yoda': [2, 'never', {'exceptRange': true, 'onlyEquality': true}],
  }
};
