module.exports = {
  rules: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
        commonjs: true,
      },
    ],
    'import/export': 'error',
    'import/no-deprecated': 'error',
    'import/first': [
      'error',
      'absolute-first',
    ],
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
        jsx: 'never',
        txs: 'never',
        json: 'never',
        vue: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
      },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
  },
};
