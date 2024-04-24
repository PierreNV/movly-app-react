const express = require("express");
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rentals = require("../routes/rentals");
const users = require("../routes/users");
const auth = require("../routes/auth");
const returns = require("../routes/returns");
const error = require("../middleware/error");

module.exports = function (api) {
  api.use(express.json());
  api.use("/api/genres", genres);
  api.use("/api/customers", customers);
  api.use("/api/movies", movies);
  api.use("/api/rentals", rentals);
  api.use("/api/users", users);
  api.use("/api/auth", auth);
  api.use("/api/returns", returns);
  api.use(error);
};
