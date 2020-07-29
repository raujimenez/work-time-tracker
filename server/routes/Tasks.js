const db = require("../dbConnection");
const express = require("express");

const ManyTasksRoute = require("./ManyTasks");

const tasksRoute = express.Router();

tasksRoute.use("/users", ManyTasksRoute);

tasksRoute.post("/", (req, res) => {
  db.query(
    "INSERT INTO TASKS (TITLE, DESCRIPTION, PR_SUBMITTED, PR_REVIEWED) VALUES (?, ?, ?, ?)",
    [
      req.body.title ? req.body.title : null,
      req.body.description ? req.body.description : null,
      !req.body.prsubmitted ? null : req.body.prsubmitted === true ? 1 : 0,
      !req.body.prreviewed ? null : req.body.prreviewed === true ? 1 : 0,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "error",
          error: err,
        });
      }
      console.log(results);
      return res.json({
        status: "ok",
        taskid: results.insertId
      });
    }
  );
});

tasksRoute.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM TASKS WHERE ID = ?",
    [req.params.id],
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "error",
          error: err,
        });
      }
      console.log(results);
      return res.json({
        status: "ok",
        task: results,
      });
    }
  );
});

module.exports = tasksRoute;
