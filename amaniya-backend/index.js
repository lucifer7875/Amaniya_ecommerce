// const express = require("express");
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "amaniya",
});

// Register Route
app.post("/register", (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO registation_details(UserName, email, password) VALUES (?,?,? )",
    [userName, email, password],
    (err, result) => {
      // console.log(err);
    }
  );
});

// app.get("/login", (req, res) => {
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false, user: req.session.user });
//   }
// });

// login Route
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM registation_details WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "wrong email/password !!" });
      }
    }
  );
});

app.listen(8080, () => {
  console.log("backend is running on 8080 port");
});
