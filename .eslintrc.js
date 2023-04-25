module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': 'tsconfig.json',
    'sourceType': 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-trailing-spaces': 'error',
    'no-console': 'off',

    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': 'next|res|req' }],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    'quotes': 'off',

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/indent': 'off'
  }
};
