const movies = require("../models/schema");

const get_Movies = async (req, res) => {
  try {
    const getMovies = await movies.find({});
    res.json({
      response_type: "success",
      movies: getMovies,
    });
  } catch (e) {
    res.json({
      response_type: "fail",
      movies: "Movieslist not found due to the " + e,
    });
  }
};

const get_Movie_byId = async (req, res) => {
  try {
    const getMovie = await movies.findById({ _id: req.params.id });
    if (!getMovie) {
      res.json({
        response_type: "fail",
        movie: "Movie with the id" + " " + req.params.id + " not found",
      });
    }
    res.json({
      response_type: "success",
      movie: getMovie,
    });
  } catch (e) {}
};

const add_Movie = async (req, res) => {
  try {
    const addMovie = new movies(req.body);

    const insertMovie = await addMovie.save();
    res.json({ response_type: "success", message: "Movie added successfully" });
  } catch (e) {
    res.json({ response_type: "failed", message: "Could not add movie" });
  }
};

const update_Movie = async (req, res) => {
  try {
    const id = req.params.id;
    const getMovie = await movies.findByIdAndUpdate(id, req.body);
    res.json({
      response_type: "success",
      message: "Movie with " + id + " " + "updated successfully",
    });
  } catch (e) {
    res.json({
      response_type: "success",
      message: "Could not movie with the id  " + id + "",
    });
  }
};

const delete_Movie = async (req, res) => {
  try {
    const deleteMovie = await movies.findByIdAndDelete(req.params.id);
    res.json({
      response_type: "success",
      message: "Movie with the id  " + req.params.id + " " + "has been deleted",
    });
  } catch (e) {
    res.json({
      response_type: "fail",
      message: "Movie with the id  " + id + "is not found .",
    });
  }
};

module.exports = {
  get_Movie_byId,
  get_Movies,
  add_Movie,
  update_Movie,
  delete_Movie,
};
