import { log } from '@frepiso/logger';
import dotenv from 'dotenv';
import { createServer } from './app/server';

dotenv.config();

const port = process.env.PORT || 4200;
const server = createServer();

server.listen(port, () => {
	log(`api running on ${port}`);
});
server.on('error', console.error);
