import * as http from 'http';
import app, { onListen } from './app';

const server: http.Server = http.createServer(app);
server.listen(app.get('port'), () => {
	onListen(app);
});
server.on('error', console.error);
export default server;
