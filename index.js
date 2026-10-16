const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// configs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + "/static/"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// requests
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(4200);
