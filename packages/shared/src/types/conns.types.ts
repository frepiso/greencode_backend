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

export interface IStringRedisMap {
	[key: string]: IRedisConfig;
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
