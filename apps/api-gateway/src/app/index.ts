import { ApiServer, IApp } from '@frepiso/apis-server';
import { log } from '@frepiso/logger';

const app: IApp = ApiServer.getInstance();

export const onListen = (app: IApp): void => {
	const name = app.get('apiName');
	log(`api ${name} running on ${app.get('port')}`);
};

export default app;
