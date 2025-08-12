export enum ENUM_ENDPOINTS {
	api_mock = 'api_mock',
	api_gateway = 'api_gateway',
	api_auth = 'api_auth',
	api_admin = 'api_admin',
	api_static = 'api_static',
	api_dynamic = 'api_dynamic',
}

export enum ENUM_REDIS_PREFIXES {
	SESSION = 'SO-SESSION',
	STATICS = 'SO-STATICS',
}

export enum ENUM_RABBIT_QUEUES {
	EMAIL = 'queue-notification',
	DOCUMENT = 'queue-document',
	ERP = 'queue-erp',
}
