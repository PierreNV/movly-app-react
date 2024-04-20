import { Movie, validate } from "../models/movie";
import { Genre } from "../models/genre";
import auth from "../middleware/auth";
import admin from "../middleware/admin";
import validateObjectId from "../middleware/validateObjectId";
import moment from "moment";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find().select("-__v").sort("name");
  res.send(movies);
});

router.post("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    liked: false,
    publishDate: moment().toJSON(),
  });
  await movie.save();

  res.send(movie);
});

// router.put("/:id", [auth], async (req, res) => {
// 	const movie = await Movie.findByIdAndUpdate(req.params.id, {liked: req.body.liked});
// 	if (!movie)
// 	return res.status(404).send("The movie with the given ID was not found.");
// 	res.send(movie);
// });

router.put("/:id", [auth], async (req, res) => {
  if (typeof req.body.liked === "boolean") {
    const movie = await Movie.findByIdAndUpdate(req.params.id, { liked: req.body.liked });
    return res.send(movie);
  }

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name,
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
    },
    { new: true }
  );

  if (!movie) return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie) return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const movie = await Movie.findById(req.params.id).select("-__v");

  if (!movie) return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

export default router;
