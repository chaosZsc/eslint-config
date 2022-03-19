module.exports = {
  rules: {
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: true,
        enforceForClassMembers: true,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: true,
        ignoreImports: false,
        ignoreGlobals: true,
        allow: ['^UNSAFE_'],
      },
    ],
    'class-methods-use-this': [
      'error',
      { enforceForClassFields: true },
    ],
    complexity: ['error', 20],
    'consistent-return': [
      'error',
      { treatUndefinedAsUnspecified: false },
    ],
    curly: ['error', 'multi-or-nest'],
    'default-case': 'error',
    'default-case-last': 'error',
    'dot-notation': [
      'error',
      { allowKeywords: false },
    ],
    eqeqeq: [
      'error',
      'always',
    ],
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': [
      'error',
      'as-needed',
    ],
    'func-style': [
      'error',
      'declaration',
      { allowArrowFunctions: true },
    ],
    'grouped-accessor-pairs': 'error',
    'multiline-comment-style': [
      'error',
      'starred-block',
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': [
      'error',
      { allowElseIf: false },
    ],
    'no-empty': [
      'error',
      { allowEmptyCatch: true },
    ],
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': [
      'error',
      { enforceForLogicalOperands: true },
    ],
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
      },
    ],
    'no-implied-eval': 'error',
    'no-invalid-this': [
      'error',
      { capIsConstructor: false },
    ],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: false,
        detectObjects: false,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      { props: false },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': [
      'error',
      { restrictedNamedExports: ['default'] },
    ],
    'no-return-assign': [
      'error',
      'except-parens',
    ],
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [
          'props',
          'state',
          'store',
        ],
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': [
      'error',
      { defaultAssignment: false },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': [
      'error',
      { enforceForClassMembers: true },
    ],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'object-shorthand': [
      'error',
      'properties',
    ],
    'one-var': [
      'error',
      { initialized: 'never' },
    ],
    'operator-assignment': [
      'error',
      'always',
    ],
    'prefer-const': [
      'error',
      { destructuring: 'all' },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    'prefer-object-has-own': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'as-needed',
    ],
    radix: [
      'error',
      'as-needed',
    ],
    'require-await': 'error',
    'require-yield': 'error',
    'spaced-comment': [
      'error',
      'always',
    ],
    'symbol-description': 'error',
  },
};
