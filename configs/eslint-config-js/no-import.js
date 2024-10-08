/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'plugin:@cspell/recommended',
  ],
  rules: {
    'no-warning-comments': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/check-param-names': 'error',
    '@cspell/spellchecker': [
      'warn',
      {
        cspell: {
          words: ['packlint', 'codecov', 'tsup', 'nextra', 'Sandpack'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.ts*', '*.test.ts*', '*.test-d.ts*'],
      plugins: ['@vitest', 'jest-dom'],
      extends: ['plugin:@vitest/legacy-recommended'],
      settings: {
        vitest: {
          typecheck: true,
        },
      },
    },
  ],
}
