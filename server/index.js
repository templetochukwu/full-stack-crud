const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "@Mark1470",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  // const sqlInsert =
  //   "DELETE FROM contact_db (name, email, contact) VALUES ('Temple', 'temple@gmail.com', 07025789505)";
  // db.query(sqlInsert, (error, result) => {
  //   console.log("error", error);
  //   console.log("result", result);
  //   res.send("Hello Express!");
  // });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
