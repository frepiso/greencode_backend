import { ISessionShared } from '../';

export interface IStringMap {
	[key: string]: string;
}

export interface IStringArrayMap {
	[key: string]: string[];
}

export type IJsons = {
	[key: string]: Record<string, string>;
};

export interface IMatchFiltersResponse {
	filters: IStringMap;
	available: boolean;
}

export type ITypeProps = {
	[key: string]:
		| string
		| number
		| boolean
		| Date
		| Array<string | number>
		| Record<string, unknown>
		| Array<Record<string, unknown>>;
};

export type IBoolString = 'true' | 'True' | 'TRUE' | 'false' | 'False' | 'FALSE';

export type IStaticData = {
	key: string;
	field: string;
	data: string;
};

export type IFunction = {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	[key: string]: (...args: any[]) => any;
};
export type IFunc = {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	[key: string]: () => any;
};

export type IServiceResponse = {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	data: any;
	loading: boolean;
	error: string | null;
	handlerAbortController: () => void;
};

export type IServerSideResponse = {
	props: {
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		entityData: any;
		sessionData: ISessionShared;
		appModule: string;
		entityEndpoint?: string;
		errorCode?: number;
	};
};
