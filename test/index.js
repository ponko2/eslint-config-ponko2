import test        from 'ava';
import {CLIEngine} from 'eslint';
import eslintrc    from '../';

const validCode =
`const message = 'Hello, World!';

if (message !== '') {
  console.log(message);
}
`;

const invalidCode =
`var message = 'Hello, World!';

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

test('no warnings with valid code', (t) => {
  const result = cli.executeOnText(validCode).results[0];

  t.falsy(result.warningCount, 'no warnings');
  t.falsy(result.errorCount, 'no errors');
  t.deepEqual(result.messages, [], 'no messages in results');
});

test('a warning with invalid code', (t) => {
  const result = cli.executeOnText(invalidCode).results[0];

  t.truthy(result.errorCount, 'fails');
  t.is(result.messages[0].ruleId, 'no-var');
});
