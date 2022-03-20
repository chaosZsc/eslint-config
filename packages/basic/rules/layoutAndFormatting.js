module.exports = {
  rules: {
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'dot-location': [
      'error',
      'property',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'multiline',
    ],
    'generator-star-spacing': [
      'error',
      'before',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    indent: [
      'error',
      2,
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      { before: true },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'lines-between-class-members': [
      'error',
      'always',
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 3 },
    ],
    'no-extra-parens': [
      'error',
      'functions',
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside',
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    quotes: [
      'error',
      'single',
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    semi: 'error',
    'semi-spacing': 'error',
    'semi-style': [
      'error',
      'last',
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': [
      'error',
      'never',
    ],
    'wrap-iife': [
      'error',
      'inside',
      { functionPrototypeMethods: true },
    ],
    'yield-star-spacing': [
      'error',
      'before',
    ],
  },
};
