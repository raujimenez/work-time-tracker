const express = require('express');
const userRoute = express.Router();
const db = require('../dbConnection.js');

userRoute.post('/', (req, res) => {
    if (req.body.username === '') {
        return res.json({
            status: 'error',
            error: 'invalid username'
        });
    }
    db.query(
        ' INSERT INTO USER (USERNAME, FIRST, LAST, EMAIL) VALUES ( ?, ?, ? );',
        [
            res.body.username, 
            (res.body.first) ? res.body.first : '', 
            (res.body.last) ? res.body.last : '', 
            (res.body.email) ? res.body.email : ''
        ],
        (err) => {
            if (err) {
                return res.json({
                    status: 'error',
                    error: 'failed to insert record.'
                });
            }
            return res.json({status: 'ok'})
        }
    );
});

userRoute.get('/', (req, res) => {
    if (!req.body.username) {
        return res.json({status: 'error', error: 'missing username'});
    }
    
    db.query(
        'SELECT FROM USER WHERE USERNAME = ? ;',
        [req.body.username],
        (err, results, fields) => {
            if (err) {
                return res.json({
                    status: 'error',
                    error: `${req.body.username} not found`
                });
            }
            return res.json({
                status: 'ok',
                user: results[0]
            });
        }
    );
})

module.exports = userRoute;