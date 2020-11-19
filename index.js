module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  rules: {
    'comma-dangle': 'off',
    'curly': ['warn', 'multi-line'],
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': ['warn', 'unix'],
    'no-shadow': ['off'],
    'no-use-before-define': 'off',
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
  },
};
