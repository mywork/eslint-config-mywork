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
    'import/extensions': ['error', { json: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-unresolved': 'off',
    'no-shadow': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
        ]
      }
    ],
    'react/require-default-props': ['off'],
  },
};