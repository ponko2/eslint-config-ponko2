'use strict';

module.exports = {
  '*.{json,md,yaml,yml}': 'prettier --write',
  '*.{cjs,js,mjs}': ['eslint --fix', 'prettier --write'],
};
