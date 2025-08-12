import { IBoolString } from '../';

export const escapeStringRegexp = (string: string): string => {
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
