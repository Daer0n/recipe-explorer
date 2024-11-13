import globals from 'globals';
import pluginJs from '@eslint/js';
import shopifyEslintPlugin from '@shopify/eslint-plugin';
import { fixupConfigRules } from '@eslint/compat';

const eslintConfig = [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                project: 'tsconfig.json',
            },
        },
        rules: {
            'no-console': 'warn',
            eqeqeq: ['error', 'always'],
            semi: ['error', 'always'],
            'react/prop-types': 'off',
            'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
            'import/prefer-default-export': 'off',
            quotes: ['error', 'single'],
        },
    },
    {
        files: ['**/*.ts?(x)'],
        rules: {
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    pluginJs.configs.recommended,
    ...fixupConfigRules(shopifyEslintPlugin.configs.esnext),
    ...fixupConfigRules(shopifyEslintPlugin.configs.react),
    ...fixupConfigRules(shopifyEslintPlugin.configs.typescript),
    ...fixupConfigRules(shopifyEslintPlugin.configs['typescript-type-checking']),
    ...fixupConfigRules(shopifyEslintPlugin.configs.webpack),
    ...fixupConfigRules(shopifyEslintPlugin.configs.prettier),
];

export default eslintConfig;
