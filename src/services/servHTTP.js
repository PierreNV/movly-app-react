import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// import { toast } from "react-toastify";
// import servlogger from "./servlogger";

// axios.interceptors.response.use(null, (error) => {
// 	const expectedError =
// 		error.response && error.response.status >= 400 && error.response.status < 500;
// 	if (!expectedError) {
// 		servlogger.log("Error log:", error);
// 		toast.error("Unexpected error");
// 	}
// 	return Promise.reject(error);
// });

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
