import servHTTP from "./servHTTP.mjs";

const endPoint = "/movies/";
function movieURL(id) {
  return endPoint + id;
}

export function getMovies() {
  return servHTTP.get(endPoint);
}
export function getMovie(movieId) {
  return servHTTP.get(movieURL(movieId));
}
export function deleteMovie(movieId) {
  servHTTP.delete(movieURL(movieId));
}
export function saveMovie(movie) {
  if (movie._id) {
    const data = { ...movie };
    delete data._id;
    return servHTTP.put(endPoint + movie._id, data);
  }
  return servHTTP.post(endPoint, movie);
}
export function likeMovie(movie) {
  return servHTTP.put(endPoint + movie._id, { liked: !movie.liked });
}
