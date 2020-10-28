module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
          'delimiter': 'semi',
          'requireLast': false
      }
    }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'import/extensions': ['error', { json: 'always' }],

    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
        ]
      }
    ],
    'react/require-default-props': ['off'],
    'no-shadow': ['off'],
    'curly': ["error", "multi-line"],
    'react/jsx-curly-newline': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': 0,
    'indent': 0,
    'function-paren-newline': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'react/jsx-wrap-multilines': 0,
  },
};