export type ILogLevelKey = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

export type ILogLevels = {
	[key in ILogLevelKey]: number;
};
