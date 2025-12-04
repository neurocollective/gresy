const isLocal = window.location.hostname === 'localhost';
const origin = (isLocal) ? 'http://localhost:5000' : window.location.origin;

const DEFAULT_OPTIONS = {
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	credentials: 'include',
};

export const RESPONSE_BODY = 'responseBody';
export const HTTP_STATUS = 'httpStatus';

export const apiCall = (path, specificOptions = {}) => {

	const options = { DEFAULT_OPTIONS, ...specificOptions };

	const url = `${origin}${path}`;

	return fetch(url, options).then((response) => {
		
		const { ok, status } = response;

		return response.text().then((text) => {

			if (!ok) {
				return Promise.reject({
					[HTTP_STATUS]: status,
					[RESPONSE_BODY]: text,
				});
			}

			return {
				[HTTP_STATUS]: status,
				[RESPONSE_BODY]: JSON.parse(text),
			};
		});
	});
};
