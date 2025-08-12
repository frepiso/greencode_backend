import express, { Application, NextFunction, Request, RequestHandler, Response } from 'express';
import session from 'express-session';

export type IApp = Application;

export type IRequest = Request;

export type IResponse = Response;

export type INext = NextFunction;

export type IRequestHandler = RequestHandler;

export type IRequestSession = Request;

export const App = express;

export const AppSession = session;

export interface IRoutes {
	app: IApp;
	getName: () => string;
	configureRoutes: (app: IApp) => void;
}
