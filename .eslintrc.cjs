module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'react-refresh', 'import', 'jsx-a11y', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    ecmaVersion: 'latest',
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['!*.js', '.*.js', '*.json', 'scripts', 'src/graphql/generated/*', 'node_modules'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'newline-before-return': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-warning-comments': 'warn',
    'object-shorthand': 'error',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link', 'RouterLink'],
        aspects: ['invalidHref'],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '$/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index'], 'unknown'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      plugins: ['@typescript-eslint/eslint-plugin'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', 'tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
      },
    },
  ],
};
