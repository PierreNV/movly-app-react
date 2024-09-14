import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.params = { secret: `mysecret` };
axios.defaults.headers.common = { "Content-Type": "application/json", Accept: "application/json" };

const axiosMethods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default axiosMethods;
