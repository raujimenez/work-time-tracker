const db = require('../dbConnection');
const express = require('express');
const UserTaskRoute = express.Router();

UserTaskRoute.post('/', (req, res) => {
    if (!req.body.userid || !req.body.taskid) {
        return res.json({
            status: 'error',
            error: 'invalid body'
        })
    }

    db.query('INSERT INTO EVENTS (USER_ID, TASK_ID, CREATED_ON, LAST_MODIFIED) VALUES ( ?, ?, ?, ?);',
        [req.body.userid, req.body.taskid, new Date(), new Date()],
        (err) => {
            if(err) {
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

UserTaskRoute.get('/', (req, res) => {
    if(!req.body.userid) {
        return res.json({
            status: 'error',
            error: 'missing userid'
        });
    }
    db.query('SELECT * from EVENTS WHERE USER_ID = ?;',
        [req.body.userid],
        (err, results, fields) => {
            if(err) {
                return res.json({
                    status: 'error',
                    error: err
                });
            }
            return res.json({
                status: 'ok',
                events: results
            })
        }
    );

});

module.exports = UserTaskRoute;