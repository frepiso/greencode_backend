module.exports = {
	...require('@frepiso/config-eslint'),
	root: true,
	settings: {
		next: {
			rootDir: ['apps/**', 'packages/**'],
		},
	},
};
