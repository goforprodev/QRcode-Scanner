const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "helloworld@22",
  database: "qrscan",
});

db.connect((err) => {
  if (err) {
    console.log("Failed to connected to db ", err);
  } else {
    console.log("Connected to db");
  }
});

module.exports = db;
