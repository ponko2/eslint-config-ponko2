const { ESLint } = require('eslint');
const eslintrc = require('../');
const getRuleFinder = require('eslint-find-rules');

const validCode = `const message = "Hello, World!";

if (message !== "") {
  console.log(message);
}
`;

const invalidCode = `var message = "Hello, World!";

if (message !== "") {
  console.log(message);
}
`;

const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: eslintrc,
  overrideConfig: {
    env: {
      browser: true,
    },
    rules: {
      'no-console': 'off',
      'prettier/prettier': [
        'error',
        {
          parser: 'babel',
        },
      ],
    },
  },
});

describe('no warnings with valid code', () => {
  let result;

  beforeEach(async () => {
    [result] = await eslint.lintText(validCode);
  });

  it('did not warning', () => {
    expect(result.warningCount).toBeFalsy();
  });

  it('did not error', () => {
    expect(result.errorCount).toBeFalsy();
  });

  it('no messages in results', () => {
    expect(result.messages).toHaveLength(0);
  });
});

describe('a warning with invalid code', () => {
  let result;

  beforeEach(async () => {
    [result] = await eslint.lintText(invalidCode);
  });

  it('did error', () => {
    expect(result.errorCount).toBeTruthy();
  });

  it('correct rule flagged', () => {
    expect(result.messages[0].ruleId).toBe('no-var');
  });
});

describe('unused rules', () => {
  it('browser', () => {
    const ruleFinder = getRuleFinder('./browser.js');
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it('index', () => {
    const ruleFinder = getRuleFinder('./index.js');
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it('node', () => {
    const ruleFinder = getRuleFinder('./node.js');
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });
});

describe('deprecated rules', () => {
  it('browser', () => {
    const ruleFinder = getRuleFinder('./browser.js');
    expect(ruleFinder.getDeprecatedRules()).toHaveLength(0);
  });

  it('index', () => {
    const ruleFinder = getRuleFinder('./index.js');
    expect(ruleFinder.getDeprecatedRules()).toHaveLength(0);
  });

  it('node', () => {
    const ruleFinder = getRuleFinder('./node.js');
    expect(ruleFinder.getDeprecatedRules()).toHaveLength(0);
  });
});
