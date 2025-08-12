import { IApp } from '../';

export class Routes {
	public app: IApp;
	private name: string;

	constructor(app: IApp, name: string) {
		this.app = app;
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}
