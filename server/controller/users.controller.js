import { pool } from '../connection.js';
import { query } from '../queries/authanticateQueries.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = (req, res) => {
    const values = [req.body.email];
    const password = req.body.password;
    pool.query(query.getPassword, values)
        .then((response) => {
            if (response.rowCount >= 1) {
                bcrypt.compare(password, response.rows[0].password_hash).then((isMatch) => {
                    if (isMatch) {
                        res.status(200).send({ message: 'login successful' });
                        next();
                    } else res.status(401).send({ message: 'wrong password entered' });
                });
            } else {
                res.status(404).send({ message: 'invalid email / no email found' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

export { login };
