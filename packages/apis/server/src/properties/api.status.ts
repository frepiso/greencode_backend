export const HttpStatus = {
	OK: {
		POST: {
			CODE: 201,
			MSG: 'Ok. Resource created and returned.',
		},
		GET: {
			CODE: 200,
			MSG: 'Ok. Resource found.',
		},
		PUT: {
			CODE: 201,
			MSG: 'Ok. Resource replaced and returned.',
		},
		PATCH: {
			CODE: 200,
			MSG: 'Ok. Resource modified.',
		},
		DELETE: {
			CODE: 200,
			MSG: 'Ok. Resource deleted.',
		},
	},
	OK_NO_CONTENT: {
		POST: {
			CODE: 204,
			MSG: 'Ok. Resource created and no returned.',
		},
		PUT: {
			CODE: 204,
			MSG: 'Ok. Resource replaced and no returned.',
		},
		PATCH: {
			CODE: 204,
			MSG: 'Ok. Resource modified and no returned.',
		},
	},
	ERROR: {
		BAD_REQUEST: {
			CODE: 400,
			MSG: 'Error. Missing fields required.',
		},
		INVALID_AUTH: {
			CODE: 401,
			MSG: 'Error. Invalid auth.',
		},
		PERMISSION: {
			CODE: 403,
			MSG: 'Error. Permission error.',
		},
		NOT_FOUND: {
			CODE: 404,
			MSG: 'Error. Resource not found.',
		},
		NOT_ALLOWED: {
			CODE: 405,
			MSG: 'Error. Method not allowed.',
		},
		ALREADY_EXISTS: {
			CODE: 409,
			MSG: 'Error. Resource already exists.',
		},
		DATABASE: {
			CODE: 500,
			MSG: 'Error. Database Error (something went wrong on our end).',
		},
		UNKNOWN: {
			CODE: 500,
			MSG: 'Error. General (unknown) error.',
		},
		OFFLINE: {
			CODE: 502,
			MSG: 'Error. Service offline. Try again later).',
		},
	},
};
