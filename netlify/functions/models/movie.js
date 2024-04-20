import { object, string, objectId, number } from "joi";
import { model, Schema } from "mongoose";
import { genreSchema } from "./genre";

const Movie = model(
  "Movies",
  new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    liked: {
      type: Boolean,
    },
  })
);

function validateMovie(movie) {
  const schema = object({
    title: string().max(50),
    genreId: objectId(),
    numberInStock: number().min(0),
    dailyRentalRate: number().min(0),
  });
  const { error } = schema.validate(movie);
  if (error) console.log(error);
  return movie;
}

const _Movie = Movie;
export { _Movie as Movie };
export const validate = validateMovie;
