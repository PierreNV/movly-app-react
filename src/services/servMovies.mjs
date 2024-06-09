import servHTTP from "./servHTTP.mjs";

const endPoint = `${process.env.REACT_APP_COLLECTION_MOVIES}`;
const params = { secret: `${process.env.REACT_APP_SECRET}` };

export async function getMovies() {
  try {
    const movies = await servHTTP.get(endPoint, { params: params });
    return movies;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovie(movieId) {
  try {
    const movies = await servHTTP.get(endPoint, { params: params });
    return movies.data.find((movie) => movie._id === movieId);
  } catch (error) {
    console.log(error);
  }
}

export function deleteMovie(movieId) {
  servHTTP.delete(endPoint + movieId);
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
