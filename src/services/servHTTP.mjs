import axios from "axios";
import { servLogger } from "./servLog.mjs";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = { "Content-Type": "application/json", Accept: "application/json" };

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedError) {
    servLogger(error);
  }
  return Promise.reject(error);
});

const axiosMethods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default axiosMethods;
