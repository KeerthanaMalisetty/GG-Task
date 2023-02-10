const express = require("express");
const router = express.Router();

const {
  get_Movie_byId,
  get_Movies,
  add_Movie,
  update_Movie,
  delete_Movie,
} = require("../controllers/index");
router.get("/", get_Movies);

router.get("/:id", get_Movie_byId);
router.post("/addMovie", add_Movie);

router.patch("/updateMovie/:id", update_Movie);

router.delete("/deleteMovie/:id", delete_Movie);

module.exports = router;
