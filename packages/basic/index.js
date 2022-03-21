module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    './rules/possible-problems',
    './rules/suggestions',
    './rules/layoutAndFormatting',
    './rules/importPlugin',
    './rules/nPlugin',
    './rules/promisePlugin',
  ].map(require.resolve),

  plugins: [
    'import',
    'n',
    'promise',
  ],
};
