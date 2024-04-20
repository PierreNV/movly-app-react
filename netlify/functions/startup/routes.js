import { Router, json } from "express";
import genres from "../routes/genres";
import customers from "../routes/customers";
import movies from "../routes/movies";
import rentals from "../routes/rentals";
import users from "../routes/users";
import auth from "../routes/auth";
import returns from "../routes/returns";
import error from "../middleware/error";

export default function (api) {
  const router = Router();
  router.get("/api/genres", genres);
  router.get("/api/customers", customers);
  router.get("/api/movies", movies);
  router.get("/api/rentals", rentals);
  router.get("/api/users", users);
  router.get("/api/auth", auth);
  router.get("/api/returns", returns);
  router.get(error);
  api.use(json());
  api.use("/api/", router);
  return serverless(api);
}
