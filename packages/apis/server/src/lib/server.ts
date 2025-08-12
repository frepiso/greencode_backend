import { urlencoded } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { App, EnvConfig, IApp } from '../';

export class ApiServer {
	private static instance: ApiServer;
	private static app: IApp = App();

	private constructor() {
		this.config();
	}

	public static getInstance(): IApp {
		if (!this.app || !this.instance) {
			this.instance = new ApiServer();
		}
		return this.app;
	}

	config(): void {
		const envConfig: EnvConfig = EnvConfig.getInstance();
		const { name, port, environment, logLevel } = envConfig.getConfig();

		ApiServer.app
			.disable('x-powered-by')
			.use(urlencoded({ extended: true }))
			.use(morgan('dev'))
			.use(cors());
		ApiServer.app
			.set('apiName', name)
			.set('port', port)
			.set('environment', environment)
			.set('logLevel', logLevel);
	}
}
