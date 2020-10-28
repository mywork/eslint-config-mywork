module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  rules: {
    'comma-dangle': 0,
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'linebreak-style': 0,
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