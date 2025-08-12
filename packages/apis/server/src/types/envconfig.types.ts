import { ILogLevelKey } from './logs.types';

export type IGraphQLConnData = string;

export interface IPostgresConnData {
	host: string;
	port: number;
	database: string;
	user: string;
	pass: string;
}

export interface IMongoConnData {
	host: string;
	user: string;
	pass: string;
}

export interface IRedisConnData {
	host: string;
	port: number;
	databases: IRedisConfig;
	user: string;
	pass: string;
}

export interface IRedisDatabase {
	db: number;
	expiration: number;
}

export interface IRedisConfig {
	statics: IRedisDatabase;
	sessions: IRedisDatabase;
}

export interface IFtpConnData {
	host: string;
	user: string;
	pass: string;
	port: number;
	secure: boolean;
}

export type IJSONConnData = {
	filePath: string;
};

export type IRabbitConnData = {
	host: string;
	port: number;
	user: string;
	pass: string;
	environment: string;
	durable: boolean;
};

export interface IJwtData {
	jwtMode: string;
	jwtSecret: string;
	jwtExpiration: string;
	jwtId: string;
	jwtEncoder: string;
}

export interface IStringRedisMap {
	[key: string]: IRedisConfig;
}

export interface IEnvProperties {
	[key: string]: {
		apis: Record<string, string>;
		persistence: Record<string, string>;
		domain: string;
	};
}

export interface IEnvConfigPersistence {
	common_sql: IPostgresConnData;
	common_rabbit: IRabbitConnData;
	common_redis: IRedisConnData;
	booking_mongo: IMongoConnData;
	error_mongo: IMongoConnData;
	static_mongo: IMongoConnData;
}

export interface IEnvConfigApis {
	api_mock: string;
	api_gateway: string;
	api_admin: string;
	api_static: string;
	api_dynamic: string;
	api_node: string;
	api_php: string;
}

export interface IEnvConfig {
	name: string;
	port: number;
	environment: string;
	logLevel: ILogLevelKey;
	// api: string;
	// apis: IEnvConfigApis;
	// persistence: IEnvConfigPersistence;
	// domain: string;
	// jwtData: IJwtData;
}
