import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from '../connection.js';
import { query } from '../queries/authanticateQueries.js';
import { response } from 'express';

const authanticateUser = (req, res, next) => {
    const values = [req.body.email];
    pool.query(query.getPassword, values)
        .then((response) => {
            console.log(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
    res.status(201).send();
};

export { authanticateUser };
