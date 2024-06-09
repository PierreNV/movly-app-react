import servHTTP from "./servHTTP.mjs";

const endPoint = `${process.env.REACT_APP_COLLECTION_GENRES}`;
const params = { secret: `${process.env.REACT_APP_SECRET}` };

export async function getGenres() {
  try {
    const genres = await servHTTP.get(endPoint, { params: params });
    return genres;
  } catch (error) {
    console.log(error);
  }
}
