import { json } from "express";
import genres from "../routes/genres";
import customers from "../routes/customers";
import movies from "../routes/movies";
import rentals from "../routes/rentals";
import users from "../routes/users";
import auth from "../routes/auth";
import error from "../middleware/error";

export default function (api) {
  api.use("/api/auth", auth);
  api.use("/api/customers", customers);
  api.use("/api/genres", genres);
  api.use("/api/movies", movies);
  api.use("/api/rentals", rentals);
  api.use("/api/users", users);
  api.use(error);
  api.use(json());
  console.log("express api is started");
}
