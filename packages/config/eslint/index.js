module.exports = {
	extends: ['next', 'turbo', 'prettier'],
	ignorePatterns: ['**/dist/**', '**/temp/**'],
	env: {
		es2021: true,
		'jest/globals': true,
	},
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'no-var-requires': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn', // or "error"
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		quotes: [2, 'single', { avoidEscape: true }],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.*?.json',
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 12,
				sourceType: 'module',
			},
			plugins: ['@typescript-eslint'],
		},
		{
			files: ['*.js', '*.jsx'],
			rules: {},
			parser: '@babel/eslint-parser',
			parserOptions: {
				requireConfigFile: false,
			},
			env: {
				browser: true,
				jest: true,
				node: true,
			},
		},
	],
};
