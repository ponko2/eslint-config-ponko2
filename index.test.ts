import getRuleFinder from 'eslint-find-rules';
import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { beforeEach, describe, expect, it } from 'vitest';
import baseConfig from '.';

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

const eslint = new FlatESLint({
  baseConfig,
  overrideConfig: {
    rules: {
      'no-console': 'off',
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
  it('browser', async () => {
    const ruleFinder = await getRuleFinder('./browser.js', {
      useFlatConfig: true,
    });
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it('index', async () => {
    const ruleFinder = await getRuleFinder('./index.js', {
      useFlatConfig: true,
    });
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });

  it('node', async () => {
    const ruleFinder = await getRuleFinder('./node.js', {
      useFlatConfig: true,
    });
    expect(ruleFinder.getUnusedRules()).toHaveLength(0);
  });
});

describe('deprecated rules', () => {
  it('browser', async () => {
    const ruleFinder = await getRuleFinder('./browser.js', {
      useFlatConfig: true,
    });
    expect(ruleFinder.getDeprecatedRules()).toHaveLength(0);
  });

  it('index', async () => {
    const ruleFinder = await getRuleFinder('./index.js', {
      useFlatConfig: true,
    });
    expect(ruleFinder.getDeprecatedRules()).toHaveLength(0);
  });

  it('node', async () => {
    const ruleFinder = await getRuleFinder('./node.js', {
      useFlatConfig: true,
    });
    expect(ruleFinder.getDeprecatedRules()).toHaveLength(0);
  });
});
