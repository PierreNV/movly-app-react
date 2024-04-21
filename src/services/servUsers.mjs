import servHTTP from "./servHTTP.mjs";
const endPoint = "/users/";

export function register(user) {
  return servHTTP.post(endPoint, {
    name: user.username,
    email: user.email,
    password: user.password,
  });
}
