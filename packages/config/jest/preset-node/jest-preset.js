module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.tsx?$': 'esbuild-jest',
	},
	moduleNameMapper: {
		'^@frepiso/apis-(.*)$': '<rootDir>../../packages/apis/$1',
		'^@frepiso/apps-(.*)$': '<rootDir>../../packages/apps/$1',
		'^@frepiso/(.*)$': '<rootDir>/../$1/src',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	modulePathIgnorePatterns: [
		'<rootDir>/test/__fixtures__',
		'<rootDir>/node_modules',
		'<rootDir>/dist',
	],
};
