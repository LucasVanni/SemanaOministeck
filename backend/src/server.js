const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const server = express();

mongoose.connect(
  "mongodb+srv://lucas:040996@cluster0-hqtn5.mongodb.net/omnisteck8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
server.use(express.json());

server.use(cors());
server.use(routes);

server.listen(3333);
