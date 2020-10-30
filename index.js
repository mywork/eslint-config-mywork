module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  rules: {
    'comma-dangle': 'off',
    'curly': ["error", "multi-line"],
    'function-paren-newline': ['off'],
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'indent': [
      'error',
      2
    ],
    'implicit-arrow-linebreak': ['off'],
    'indent': ['off'],
    'linebreak-style': 'off',
    'newline-per-chained-call': ['off'],
    'no-confusing-arrow': ['off'],
    'no-shadow': ['off'],
    'no-use-before-define': 'off',
    'nonblock-statement-body-position': ['off'],
    'object-curly-newline': ['off'],
    'operator-linebreak': ['off'],
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
    'react/jsx-curly-newline': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'react/require-default-props': ['off'],
  },
};