const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

const movies = new mongoose.model("Moviesdata", movieSchema);

module.exports = movies;
