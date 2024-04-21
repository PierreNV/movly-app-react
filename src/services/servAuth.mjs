import jwtDecode from "jwt-decode";
import servHTTP, { setJWT } from "./servHTTP.mjs";

setJWT(getJWT());

const endPoint = "/auth/";

export async function login(email, password) {
  const { data: jwt } = await servHTTP.post(endPoint, { email, password });
  if (jwt) localStorage.setItem("token", jwt);
}

export function loginWithJWT(jwt) {
  if (jwt) localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJWT() {
  return localStorage.getItem("token");
}
