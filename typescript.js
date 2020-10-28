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
    'react/jsx-curly-newline': ['off'],
    'operator-linebreak': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'nonblock-statement-body-position': ['off'],
    'object-curly-newline': ['off'],
    'indent': ['off'],
    'function-paren-newline': ['off'],
    'newline-per-chained-call': ['off'],
    'no-confusing-arrow': ['off'],
    'react/jsx-wrap-multilines': ['off'],
  },
};