import { object, string } from "joi";
import { Schema, model } from "mongoose";

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

const Genre = model("Genre", genreSchema);

function validateGenre(genre) {
  const schema = object({
    name: string().max(50),
  });
  const { error } = schema.validate(genre);
  if (error) console.log(error);
  return genre;
}

const _genreSchema = genreSchema;
export { _genreSchema as genreSchema };
const _Genre = Genre;
export { _Genre as Genre };
export const validate = validateGenre;
