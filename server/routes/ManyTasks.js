const db = require('../dbConnection');
const express = require('express');
const ManyTasksRoute = express.Router();

const generateQuery = (idArr) => {
    const query = 'SELECT * FROM TASKS WHERE ID = ?'
    if(idArr.length == 1) {
        return query;
    }
    return query.concat(idArr.map(
        (value, index) => (index !== idArr.length) ? ' OR ID = ?' : ' OR ID = ?;')
    );
}

ManyTasksRoute.get('/many', (req, res) => {
    if (req.body.tasks !== typeof(Array)) {
        return res.json({
            status: 'error',
            error: 'tasks not in array format'
        });
    }

    db.query(
        generateQuery(req.body.tasks),
        [req.body.tasks],
        (err, results, fields) => {
            if (err) {
                return res.json({
                    status: 'error',
                    error: err
                })
            }
            return res.json({
                status: 'ok',
                tasks: results
            })
        }
    );

});

module.exports = ManyTasksRoute;