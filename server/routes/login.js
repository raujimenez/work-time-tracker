const express = require('express');
const bcrypt = require('bcrypt');

const loginRoute = express.Router();
const db = require('../dbConnection.js');

const saltRounds = 10;

loginRoute.get('/', (req, res) => {
    if (!req.body.password || !req.body.userid) {
        return res.json({
            status: 'error',
            error: 'invalid credentials'
        });
    }

    db.query('SELECT * FROM USER_LOGIN WHERE USER_ID = ?;', [req.body.userid], (error, results, fields) => {
        if (error) {
            return res.json({
                status: 'error',
                error: error
            });
        }
        const hash = results[0]['PASSWORD']

        bcrypt.compare(req.body.password, hash, function(err, result) {
            if(err) {
                return res.json({
                    status: "error",
                    error: err
                })
            }
            if (result) {
                return res.json({status: 'ok'});
            }
            return res.json({
                status: 'error',
                error: 'invalid credentials'
            });
        });
    });
});

loginRoute.post('/', (req, res) => {
    if(!req.body.password || !req.body.userid) {
        return res.json({
            status: 'error',
            error: 'invalid credentials'
        })
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            db.query('INSERT INTO USER_LOGIN (USER_ID, PASSWORD, SALT) VALUES ( ?, ?, ?)',
                [req.body.userid, hash, salt],
                (err) => {
                    if (err) {
                        return res.json({
                            status: 'error',
                            error: err
                        });
                    }
                    return res.json({status: 'ok'})
                }
            );
        });
    });
});


module.exports = loginRoute;