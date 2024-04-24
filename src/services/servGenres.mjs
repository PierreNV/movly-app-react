// import { response } from "express";
// import servHTTP from "./servHTTP.mjs";
// const endPoint = "genres";

export async function getGenres() {
  return await fetch("/.netlify/functions/genres").then((response) => response.json());

  // return servHTTP.get(endPoint);
}
