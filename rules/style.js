"use strict";

module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    "array-bracket-newline": "off",

    // enforce line breaks after each array element
    "array-element-newline": "off",

    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": "off",

    // enforce consistent spacing inside single-line blocks
    "block-spacing": "off",

    // enforce consistent brace style for blocks
    "brace-style": "off",

    // enforce camelcase naming convention
    camelcase: ["error", { properties: "never" }],

    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": "off",

    // require or disallow trailing commas
    "comma-dangle": "off",

    // enforce consistent spacing before and after commas
    "comma-spacing": "off",

    // enforce consistent comma style
    "comma-style": "off",

    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": "off",

    // enforce consistent naming when capturing the current execution context
    "consistent-this": "off",

    // require or disallow newline at the end of files
    "eol-last": "off",

    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": "off",

    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": [
      "error",
      "always",
      { includeCommonJSModuleExports: false }
    ],

    // require or disallow named function expressions
    "func-names": "off",

    // enforce the consistent use of either function declarations or expressions
    "func-style": "off",

    // enforce consistent line breaks inside function parentheses
    "function-paren-newline": "off",

    // disallow specified identifiers
    "id-blacklist": "off",

    // enforce minimum and maximum identifier lengths
    "id-length": [
      "error",
      { min: 2, properties: "never", exceptions: ["$", "_"] }
    ],

    // require identifiers to match a specified regular expression
    "id-match": "off",

    // enforce consistent indentation
    indent: "off",

    // enforce consistent indentation
    "indent-legacy": "off",

    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": "off",

    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": "off",

    // enforce consistent spacing before and after keywords
    "keyword-spacing": "off",

    // enforce position of line comments
    "line-comment-position": "off",

    // enforce consistent linebreak style
    "linebreak-style": ["error", "unix"],

    // require empty lines around comments
    "lines-around-comment": "off",

    // require or disallow newlines around directives
    "lines-around-directive": "off",

    // require or disallow an empty line between class members
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: false }
    ],

    // enforce a maximum depth that blocks can be nested
    "max-depth": ["warn", 4],

    // enforce a maximum line length
    "max-len": "off",

    // enforce a maximum file length
    "max-lines": "off",

    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": "off",

    // enforce a maximum number of parameters in function definitions
    "max-params": ["warn", 4],

    // enforce a maximum number of statements allowed in function blocks
    "max-statements": ["warn", 15, { ignoreTopLevelFunctions: true }],

    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": ["error", { max: 1 }],

    // enforce a particular style for multiline comments
    "multiline-comment-style": ["error", "starred-block"],

    // enforce newlines between operands of ternary expressions
    "multiline-ternary": "off",

    // require constructor names to begin with a capital letter
    "new-cap": ["error", { newIsCap: true }],

    // require parentheses when invoking a constructor with no arguments
    "new-parens": "off",

    // require or disallow an empty line after variable declarations
    "newline-after-var": "off",

    // require an empty line before return statements
    "newline-before-return": "off",

    // require a newline after each call in a method chain
    "newline-per-chained-call": "off",

    // disallow Array constructors
    "no-array-constructor": "error",

    // disallow bitwise operators
    "no-bitwise": "off",

    // disallow continue statements
    "no-continue": "error",

    // disallow inline comments after code
    "no-inline-comments": "off",

    // disallow if statements as the only statement in else blocks
    "no-lonely-if": "error",

    // disallow mixes of different operators
    "no-mixed-operators": "off",

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "off",

    // disallow use of chained assignment expressions
    "no-multi-assign": "error",

    // disallow multiple empty lines
    "no-multiple-empty-lines": "off",

    // disallow negated conditions
    "no-negated-condition": "off",

    // disallow nested ternary expressions
    "no-nested-ternary": "error",

    // disallow Object constructors
    "no-new-object": "error",

    // disallow the unary operators ++ and --
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

    // disallow specified syntax
    "no-restricted-syntax": ["error", "WithStatement"],

    // disallow spacing between function identifiers and their applications
    "no-spaced-func": "off",

    // disallow tabs in file
    "no-tabs": "off",

    // disallow ternary operators
    "no-ternary": "off",

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "off",

    // disallow dangling underscores in identifiers
    "no-underscore-dangle": [
      "error",
      { allowAfterThis: true, allowAfterSuper: true }
    ],

    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    // disallow whitespace before properties
    "no-whitespace-before-property": "off",

    // enforce the location of single-line statements
    "nonblock-statement-body-position": "off",

    // enforce consistent line breaks inside braces
    "object-curly-newline": "off",

    // enforce consistent spacing inside braces
    "object-curly-spacing": "off",

    // enforce placing object properties on separate lines
    "object-property-newline": "off",

    // enforce variables to be declared either together or separately in functions
    "one-var": ["error", { uninitialized: "always", initialized: "never" }],

    // require or disallow newlines around variable declarations
    "one-var-declaration-per-line": "off",

    // require or disallow assignment operator shorthand where possible
    "operator-assignment": ["error", "always"],

    // enforce consistent linebreak style for operators
    "operator-linebreak": "off",

    // require or disallow padding within blocks
    "padded-blocks": "off",

    // require or disallow padding lines between statements
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "directive",
        next: "*"
      },
      {
        blankLine: "any",
        prev: "directive",
        next: "directive"
      }
    ],

    // require quotes around object literal property names
    "quote-props": "off",

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: "off",

    // require JSDoc comments
    "require-jsdoc": "error",

    // require or disallow semicolons instead of ASI
    semi: "off",

    // enforce consistent spacing before and after semicolons
    "semi-spacing": "off",

    // enforce location of semicolons
    "semi-style": "off",

    // require object keys to be sorted
    "sort-keys": "off",

    // require variables within the same declaration block to be sorted
    "sort-vars": "off",

    // enforce consistent spacing before blocks
    "space-before-blocks": "off",

    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": "off",

    // enforce consistent spacing inside parentheses
    "space-in-parens": "off",

    // require spacing around infix operators
    "space-infix-ops": "off",

    // enforce consistent spacing before or after unary operators
    "space-unary-ops": "off",

    // enforce consistent spacing after the // or /* in a comment
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["-", "+"],
        markers: ["=", "!"],
        block: { balanced: true }
      }
    ],

    // enforce spacing around colons of switch statements
    "switch-colon-spacing": "off",

    // require or disallow spacing between template tags and their literals
    "template-tag-spacing": "off",

    // require or disallow the Unicode BOM
    "unicode-bom": "off",

    // require parenthesis around regex literals
    "wrap-regex": "off"
  }
};
