import { json, Router } from "express";
import genres from "../routes/genres";
import customers from "../routes/customers";
import movies from "../routes/movies";
import rentals from "../routes/rentals";
import users from "../routes/users";
import auth from "../routes/auth";
import returns from "../routes/returns";
import error from "../middleware/error";

const router = Router();

export default function (api) {
  router.get("/genres", genres);
  router.get("/customers", customers);
  router.get("/movies", movies);
  router.get("/rentals", rentals);
  router.get("/users", users);
  router.get("/auth", auth);
  router.get("/returns", returns);
  router.get(error);
  api.use(json());
  api.use("/api/", router);
}
