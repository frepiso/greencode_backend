import { ApiServer, IApp } from '@frepiso/apis-server';
import { log } from '@frepiso/tools-logger';

const app: IApp = ApiServer.getInstance();

export const onListen = (app: IApp): void => {
	log(`Listening ${app.get('apiName')} at port ${app.get('port')}`);
	log(`Environment: ${app.get('environment')}`);
};

export default app;
