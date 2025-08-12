import { ILogLevelKey } from '../';

export interface IJwtData {
	jwtMode: string;
	jwtSecret: string;
	jwtExpiration: string;
	jwtId: string;
	jwtEncoder: string;
}

export interface IEnvProperties {
	[key: string]: {
		apis: Record<string, string>;
		persistence: Record<string, string>;
		domain: string;
	};
}

// export interface IEnvConfigPersistence {
// 	common_sql: IPostgresConnData;
// 	common_rabbit: IRabbitConnData;
// 	common_redis: IRedisConnData;
// 	booking_mongo: IMongoConnData;
// 	error_mongo: IMongoConnData;
// 	static_mongo: IMongoConnData;
// }

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
}
