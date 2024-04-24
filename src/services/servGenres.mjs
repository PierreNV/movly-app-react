// import servHTTP from "./servHTTP.mjs";
const endPoint = "/genres";

export function getGenres() {
  return fetch("./netlify/functions/genres");
}
