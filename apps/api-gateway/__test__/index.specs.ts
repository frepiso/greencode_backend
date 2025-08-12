import request from 'supertest';
import server from '../src/';

describe('API GATEWAY Default & Conn', () => {
	beforeAll(() => {
		console.log = jest.fn();
	});

	afterEach(() => {
		server.close();
	});

	afterAll(() => {
		server.close();
	});

	it('API conexion should work', async () => {
		const result = await request(server).get('/');
		expect(console.log).toHaveBeenCalledWith('logger: Listening API GATEWAY at port 4201');
		expect(result.text).toEqual('logger: Environment: local');
	});

	// it('API ping should response pong', async () => {
	// 	const result = await request(server).get('/ping/');
	// 	expect(result.text).toEqual('pong');
	// 	expect(result.statusCode).toEqual(200);
	// });
});
