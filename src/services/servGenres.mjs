import servHTTP from "./servHTTP.mjs";

const endPoint = `${process.env.REACT_APP_COLLECTION_GENRES}`;

export async function getGenres() {
  try {
    const genres = await servHTTP.get(endPoint);
    return genres;
  } catch (error) {
    console.log(error);
  }
}
