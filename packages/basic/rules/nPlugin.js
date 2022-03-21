module.exports = {
  rules: {
    'n/handle-callback-err': [
      'error',
      '^(err|error)$',
    ],
    'n/no-callback-literal': 'error',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'error',
    'n/no-new-require': 'error',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'error',
    'n/no-unpublished-require': 'error',
    'n/process-exit-as-throw': 'error',
    'n/no-deprecated-api': 'error',
  },
};
