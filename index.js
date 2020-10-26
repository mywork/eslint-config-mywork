module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  rules: {
    'comma-dangle': 0,
    'curly': ["error", "multi"],
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
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
  },
};