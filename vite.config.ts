import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['apps/*/src/**/*.{js,ts}', 'packages/*/src/**/*.{js,ts}', 'modules/*/src/**/*.{js,ts}'],
    setupFiles: ['test/setup.ts'],
  },
})
