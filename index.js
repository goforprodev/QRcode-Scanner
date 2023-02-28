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

    console.log(isTable);
    if (!isTable) {
      createTable();
    }

    const q = "SELECT * FROM users WHERE scanNumber = ?";
    db.query(q, [req.body.text], (err, rows) => {
      if (err) return res.status(500).json({ message: err });

      if (rows.length) {
        let dateCreated = new Date(rows[0].createdOn);
        let currentDate = new Date();
        if (dateCreated.getDate() == currentDate.getDate()) {
          return res.status(409).json({ message: "Already Exists" });
        }
      }

      // if the scanNumber does not exist in the database, insert it
      const q = "INSERT INTO users (scanNumber,createdOn) VALUES (?,?)";
      const values = [req.body.text, new Date()];
      db.query(q, values, (err, rows) => {
        if (err)
          return res.status(500).json({ message: "Table Creation Failed" });
        return res
          .status(200)
          .json({ message: "Successfully inserted to Table - users" });
      });
    });
  }
});

app.get("/download", (req, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, row) => {
    if (err) res.status(500).json({ message: `An error occured ${err}` });
    if (!row.length) res.redirect("/");
    if (row.length) {
      res.status(200).send({ data: row, redirect_path: "/" });
    }
  });
});

app.get("/deletedb", (req, res) => {
  const q = "DROP TABLE users";
  db.query(q);
  res.status(200).json({ message: "Successfully deleted Table - users" });
});

// listen on port 3000
app.listen(port, "0.0.0.0", () => console.info(`listening on port ${port}`));
