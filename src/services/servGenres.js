import servHTTP from "./servHTTP";
const endPoint = "/genres";

export function getGenres() {
	return servHTTP.get(endPoint);
}
