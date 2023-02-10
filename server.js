const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const moviesRouter = require("./Routes/movies");
require("dotenv").config();
const connectDB = require("./db/connect");
const port = process.env.PORT;
console.log(process.env.PORT);
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/movies", moviesRouter);

const startServer = async () => {
  try {
    await connectDB(process.env.Mongo_url);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
