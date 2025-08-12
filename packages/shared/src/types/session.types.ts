import { ICurrencyIsoKeys, ILangCodeKeys } from '../';

export type ISession = {
	hidden: {
		applicationToken: string;
		roles?: string[];
	};
	data: ISessionData;
};

export type ISessionData = ISessionShared & {
	error?: Error;
};

export type ISessionShared = {
	headers: ISessionSharedHeaders;
	user: ISessionSharedUser;
};

export type ISessionSharedHeaders = {
	authorization: string;
	lang: ILangCodeKeys;
	currency: ICurrencyIsoKeys;
};

export type ISessionSharedUser = {
	id: number;
	username: string;
	name: string;
	imageProfile: string;
	imageProfileThumb: string;
};

export type ICredentials = {
	username: string;
	password: string;
};
