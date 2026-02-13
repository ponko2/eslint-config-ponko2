import { configDefaults, defineConfig } from 'vitest/config';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, '**/.direnv/**'],
  },
});
