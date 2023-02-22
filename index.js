// imports
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//Allow express to parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/demo", (req, res) => {
  res.render("demo");
});

app.post("/some", (req, res) => {
  if (req.body) {
    // console.log(req.body);
    res.status(200).send(req.body);
  }
});

// listen on port 3000
app.listen(port, () => console.info(`listening on port ${port}`));
