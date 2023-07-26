module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    // sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    semi: [2, 'never'],
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 180 }],
    'object-curly-spacing': 'off',
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/no-unused-modules': [1, {unusedExports: true}],
  },

}

// module.exports = {
//   extends: [
//     // By extending from a plugin config, we can get recommended rules without having to add them manually.
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:import/recommended',
//     'plugin:jsx-a11y/recommended',
//     // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
//     // Make sure it's always the last config, so it gets the chance to override other configs.
//     // 'eslint-config-prettier',
//   ],
//   settings: {
//     react: {
//       // Tells eslint-plugin-react to automatically detect the version of React to use.
//       version: 'detect',
//     },
//     // Tells eslint how to resolve imports
//     'import/resolver': {
//       node: {
//         paths: ['src'],
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       },
//     },
//   },
//   rules: {
//     // Add your own rules here to override ones from the extended configs.
//   },
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   }
// };
