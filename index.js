module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  rules: {
    'comma-dangle': 'off',
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'indent': [
      'error',
      2
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.jsx'
        ]
      }
    ],
    'react/forbid-prop-types': [
      1,
      {
        'forbid': ['array', 'any']
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