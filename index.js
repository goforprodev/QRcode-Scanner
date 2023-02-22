// imports
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db.js");

const app = express();
const port = 4000;

let isTable = false;

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

const createTable = () => {
  let tableName = "users";
  // Query to create table
  const q = `CREATE TABLE ${tableName} (
    ID int NOT NULL AUTO_INCREMENT,
    scanNumber VARCHAR(255), createdOn DATETIME NOT NULL,PRIMARY KEY (ID))`;

  db.query(q, (err, rows) => {
    if (err) console.log("Table Creation Failed");

    isTable = true;
    console.log(`Successfully Created Table - ${tableName}`);
  });
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/demo", (req, res) => {
  res.render("demo");
});

app.post("/some", (req, res) => {
  if (req.body) {
    // res.status(200).send(req.body);

    if (!isTable) {
      createTable();
    }

    const q = "INSERT INTO users (scanNumber,createdOn) VALUES (?,?)";
    const values = [req.body.text, new Date()];
    db.query(q, values, (err, rows) => {
      if (err) return res.status(500).json("Table Creation Failed");
      // isTable = false;
      return res.json("Successfully inserted to Table - users");
    });
  }
});

// listen on port 3000
app.listen(port, () => console.info(`listening on port ${port}`));
