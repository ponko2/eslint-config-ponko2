const {CLIEngine} = require('eslint');
const eslintrc = require('../');

const validCode = `const message = 'Hello, World!';

if (message !== '') {
  console.log(message);
}
`;

const invalidCode = `var message = 'Hello, World!';

if (message !== '') {
  console.log(message);
}
`;

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
  envs: ['browser'],
  rules: {'no-console': 0}
});

describe('no warnings with valid code', () => {
  let result;

  beforeEach(() => {
    result = cli.executeOnText(validCode).results[0];
  });

  it('did not warning', () => {
    expect(result.warningCount).toBeFalsy();
  });

  it('did not error', () => {
    expect(result.errorCount).toBeFalsy();
  });

  it('no messages in results', () => {
    expect(result.messages.length).toBe(0);
  });
});

describe('a warning with invalid code', () => {
  let result;

  beforeEach(() => {
    result = cli.executeOnText(invalidCode).results[0];
  });

  it('did error', () => {
    expect(result.errorCount).toBeTruthy();
  });

  it('correct rule flagged', () => {
    expect(result.messages[0].ruleId).toBe('no-var');
  });
});
