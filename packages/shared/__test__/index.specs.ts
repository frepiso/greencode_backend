import { escapeStringRegexp, isEven, isOdd, toBool } from '../src/';

describe('escapeStringRegexp', () => {
	test('it returns string to bool', () => {
		expect(escapeStringRegexp('/path/to/resource.html?search=query')).toBe(
			'/path/to/resource.html?search=query',
		);
	});
});

describe('toBool', () => {
	test('it returns boll string to bool', () => {
		expect(toBool('true')).toBe(true);
		expect(toBool('True')).toBe(true);
		expect(toBool('TRUE')).toBe(true);
		expect(toBool('false')).toBe(false);
		expect(toBool('False')).toBe(false);
		expect(toBool('FALSE')).toBe(false);
	});
});

describe('isEven', () => {
	test('it detects even numbers', () => {
		expect(isEven(0)).toBe(true);
		expect(isEven(2)).toBe(true);
		expect(isEven(4)).toBe(true);
		expect(isEven(10)).toBe(true);
		expect(isEven(132)).toBe(true);
	});

	test('it detects odd numbers', () => {
		expect(isEven(1)).toBe(false);
		expect(isEven(3)).toBe(false);
		expect(isEven(5)).toBe(false);
		expect(isEven(11)).toBe(false);
		expect(isEven(133)).toBe(false);
	});
});

describe('isOdd', () => {
	test('it detects even numbers', () => {
		expect(isOdd(0)).toBe(false);
		expect(isOdd(2)).toBe(false);
		expect(isOdd(4)).toBe(false);
		expect(isOdd(10)).toBe(false);
		expect(isOdd(132)).toBe(false);
	});

	test('it detects odd numbers', () => {
		expect(isOdd(1)).toBe(true);
		expect(isOdd(3)).toBe(true);
		expect(isOdd(5)).toBe(true);
		expect(isOdd(11)).toBe(true);
		expect(isOdd(133)).toBe(true);
	});
});
