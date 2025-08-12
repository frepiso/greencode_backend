import { IBoolString } from '../';

// Escape characters with special meaning either inside or outside character sets.
// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
export const escapeStringRegexp = (string: string): string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}
	return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
};

export const toBool = (value: IBoolString): boolean => {
	return value.toLowerCase() === 'true';
};

export const isEven = (n: number): boolean => {
	return n % 2 === 0;
};

export const isOdd = (n: number): boolean => {
	return isEven(n) === false;
};

export const overwriteMerge = (
	_destinationArray: Array<unknown>,
	sourceArray: Array<unknown>,
): Array<unknown> => sourceArray;
