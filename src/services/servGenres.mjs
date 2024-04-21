import servHTTP from "./servHTTP.mjs";
const endPoint = "/genres";

export function getGenres() {
  return servHTTP.get(endPoint);
}
