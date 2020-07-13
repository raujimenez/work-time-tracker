const express = require("express");
const userRoute = express.Router();
const db = require("../dbConnection.js");

userRoute.post("/", (req, res) => {
  if (!req.body.username) {
    return res.json({
      status: "error",
      error: `invalid username ${req.body.username}`,
    });
  }
  db.query(
    " INSERT INTO USER (USERNAME, FIRST, LAST, EMAIL) VALUES ( ?, ?, ?, ? );",
    [
      req.body.username,
      req.body.first ? req.body.first : null,
      req.body.last ? req.body.last : null,
      req.body.email ? req.body.email : null,
    ],
    (err) => {
      if (err) {
        return res.json({
          status: "error",
          error: err,
        });
      }
      return res.json({ status: "ok" });
    }
  );
});

userRoute.get("/:username", (req, res) => {
  if (!req.params.username) {
    return res.json({ status: "error", error: "missing username" });
  }

  db.query(
    "SELECT * FROM USER WHERE USERNAME = ? ;",
    [req.params.username],
    (err, results, fields) => {
      if (err) {
        return res.json({
          status: "error",
          error: err,
        });
      }
      return res.json({
        status: "ok",
        user: results[0],
      });
    }
  );
});

module.exports = userRoute;
