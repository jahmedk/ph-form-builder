module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};