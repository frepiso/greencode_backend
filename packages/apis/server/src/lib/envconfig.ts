import { IEnvConfig, ILogLevelKey } from '@frepiso/shared';
import dotenv from 'dotenv';

export class EnvConfig {
	private static instance: EnvConfig;
	private env: NodeJS.ProcessEnv;
	private config!: IEnvConfig;

	private constructor() {
		dotenv.config();
		this.env = process.env;
		this.setConfig();
	}

	public static getInstance(): EnvConfig {
		if (!this.instance) {
			this.instance = new EnvConfig();
		}
		return this.instance;
	}

	public getConfig(): IEnvConfig {
		return this.config;
	}

	private setConfig(): void {
		const env = this.env;
		this.config = {
			name: env.NAME || 'API unknown',
			port: Number(env.PORT) || 4200,
			environment: env.ENVIRONMENT || 'local',
			logLevel: (env.LOG_LEVEL as ILogLevelKey) || ('info' as ILogLevelKey),
		};
	}
}
