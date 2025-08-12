/** @type {import('jest').Config} */
const { defaults } = require('jest-config');
const path = require('path');
const rootDir = path.resolve(__dirname, '../../../../');

const config = {
	verbose: true,
	roots: ['<rootDir>/src', '<rootDir>/__test__'],
	testMatch: ['**/?(*.)+(spec|specs|test).[tj]s?(x)'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@frepiso/apps-(.*)$': `${rootDir}/apps/$1/src`,
		'^@frepiso/apis-(.*)$': `${rootDir}/packages/apis/$1/src`,
		'^@frepiso/shared$': `${rootDir}/packages/shared/src`,
		'^@frepiso/tools-(.*)$': `${rootDir}/packages/tools/$1/src`,
		'^@frepiso/(.*)$': `${rootDir}/packages/$1/src`,
	},
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	modulePathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
	clearMocks: true,
};

module.exports = config;
