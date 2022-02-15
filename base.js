'use strict';

module.exports = {
  extends: [
    './rules/layout-and-formatting',
    './rules/possible-problems',
    './rules/suggestions',
  ].map(require.resolve),
  env: {
    es2022: true,
  },
};
