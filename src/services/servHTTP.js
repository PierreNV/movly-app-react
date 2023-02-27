import axios from "axios";
import { servLogger } from "./servLogger";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
	const expectedError =
	error.response && error.response.status >= 400 && error.response.status < 500;
	if (!expectedError) {
		servLogger(error);
	}
	return Promise.reject(error);
});

export function setJWT(jwt) {
	axios.defaults.headers.common["x-auth-token"] = jwt;
}

const axiosMethods = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

export default axiosMethods;
