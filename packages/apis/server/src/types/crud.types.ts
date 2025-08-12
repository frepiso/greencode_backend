import { ISession } from '@frepiso/shared';
import { INext, IRequest, IResponse } from '../';

export interface ICRUDLController {
	read: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	list: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	create: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	replace: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	modify: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	delete?: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
}

export interface IRUController {
	read?: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	replace?: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	modify?: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
}

export interface IRUControllerWithoutSession {
	read: (req: IRequest, res: IResponse, next: INext) => Promise<void>;
	replace: (req: IRequest, res: IResponse, next: INext) => Promise<void>;
	modify: (req: IRequest, res: IResponse, next: INext) => Promise<void>;
}

export interface IRDLController {
	read: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	list: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
	delete?: (SESSION_DATA: ISession, req: IRequest, res: IResponse, next: INext) => Promise<void>;
}
