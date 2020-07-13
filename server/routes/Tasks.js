const db = require('../dbConnection');
const express = require('express');

const ManyTasksRoute = require('./ManyTasks');

const tasksRoute = express.Router();

tasksRoute.use('/users', ManyTasksRoute);

tasksRoute.post('/', (req, res) => {
    db.query('INSERT INTO TASKS (TITLE, DESCRIPTION, PR_SUBMITTED, PR_REVIEWED) VALUES (?, ?, ?, ?)', 
        [
            (req.body.title) ? req.body.title : null, 
            (req.body.description) ? req.body.description : null,
            (req.body.prsubmitted) ? req.body.prsubmitted : null,
            (req.body.prreviewed) ? req.body.prreviewed : null
        ],
        (err) => {
            if (err) {
                return res.json({
                    status: 'error',
                    error: err
                })
            }
            return res.json({
                status: 'ok'
            })
        }
    )
})

tasksRoute.get('/:id', (req, res) => {
    db.query('SELECT * FROM TASKS WHERE ID = ?', [req.params.id], (err, results, fields) => {
        if (err) {
            return res.json({
                status: 'error',
                error: err
            })
        }
        return res.json({
            status: 'ok',
            task: results
        })
    })
})

module.exports = tasksRoute