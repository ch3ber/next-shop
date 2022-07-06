module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'standard',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}
