
export const fetchAuth = (email,password) => {
	let body = {
		Email: email,
		Password:password
	};

	let requestUrl = "http://private-052d6-testapi4528.apiary-mock.com/authenticate";

	return new Promise(resolve => {
		resolve(
			 fetch(requestUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})
		);
	});
};


export const fetchProjs = (token) => {

	let requestUrl = "http://private-052d6-testapi4528.apiary-mock.com/info?="+{token};

	return new Promise(resolve => {
		resolve(
			 fetch(requestUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
		);
	});
};













