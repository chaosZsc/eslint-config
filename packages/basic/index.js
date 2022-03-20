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
  ].map(require.resolve),
};
