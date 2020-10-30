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
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'curly': ["error", "multi-line"],
    'function-paren-newline': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'indent': ['off'],
    'newline-per-chained-call': ['off'],
    'no-confusing-arrow': ['off'],
    'no-shadow': ['off'],
    'nonblock-statement-body-position': ['off'],
    'object-curly-newline': ['off'],
    'operator-linebreak': ['off'],
    'react/jsx-curly-newline': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
        ]
      }
    ],
    'react/jsx-wrap-multilines': ['off'],
    'react/require-default-props': ['off'],
  },
};