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
        'delimiter': 'comma',
        'requireLast': true
      },
      'singleline': {
          'delimiter': 'comma',
          'requireLast': false
      }
    }],
    'import/no-extraneous-dependencies': ['error', {'packageDir': __dirname}],
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
    'curly': ["error", "multi"],
  },
};