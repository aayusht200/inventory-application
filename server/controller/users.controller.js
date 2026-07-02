import { pool } from '../connection.js';
import { query } from '../queries/userQueries.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { response } from 'express';

const login = (req, res) => {
    const values = [req.body.email];
    const password = req.body.password;
    pool.query(query.getUserByEmail, values)
        .then((response) => {
            if (response.rowCount >= 1) {
                bcrypt.compare(password, response.rows[0].password_hash).then((isMatch) => {
                    if (isMatch) {
                        const accessToken = jwt.sign(
                            {
                                id: response.rows[0].id,
                                role: response.rows[0].role,
                                email: response.rows[0].email,
                            },
                            process.env.JWT_SECRET
                        );
                        res.status(200).json({
                            accessToken: accessToken,
                            user: {
                                username: response.rows[0].username,
                                email: response.rows[0].email,
                                role: response.rows[0].role,
                            },
                        });
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

const signupUser = (req, res) => {
    const { username, email, password } = req.body;
    const id = crypto.randomUUID();
    bcrypt
        .hash(password, 10)
        .then((password_hash) => {
            const values = [id, username, email, password_hash, 'user', null];
            pool.query(query.createNewUser, values)
                .then((response) => {
                    res.status(201).send({ message: 'signup successfull' });
                })
                .catch((err) => {
                    if (err.constraint) {
                        return res.status(409).send({ message: err.detail });
                    }
                    return res.status(500).json({
                        message: 'Internal Server Error',
                    });
                });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

const adminCreateUser = (req, res) => {
    const { username, email, password, role } = req.body;
    const id = crypto.randomUUID();
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Only admins can create admin accounts',
        });
    }
    bcrypt
        .hash(password, 10)
        .then((password_hash) => {
            const values = [id, username, email, password_hash, role, req.user.id];
            pool.query(query.createNewUser, values)
                .then((response) => {
                    res.status(201).send({ message: 'signup successfull' });
                })
                .catch((err) => {
                    if (err.constraint) {
                        return res.status(409).send({ message: err.detail });
                    }
                    return res.status(500).json({
                        message: 'Internal Server Error',
                    });
                });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

const getCurrentUser = (req, res) => {
    const test = req.user;
    pool.query(query.getuser, [test.email])
        .then((response) => {
            res.status(200).send({ user: response.rows[0] });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
export { login, signupUser, adminCreateUser, getCurrentUser };
