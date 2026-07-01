import { pool } from '../connection.js';
import { query } from '../queries/categoryQueries.js';
const createCategory = (req, res) => {
    const { id, name, description } = req.body;
    const values = [id, name, description, req.user.id];
    pool.query(query.create, values)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status(404).send({ message: 'category creation failed' });
            }
            res.status(201).send({ message: 'category created Sucessfully' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
const createEmptyCategory = (req, res) => {
    const emptyCategory = {
        id: crypto.randomUUID(),
        title: '',
        description: '',
    };
    res.status(200).json({ emptyCategory });
};
const getAll = (req, res) => {
    pool.query(query.getAll)
        .then((response) => {
            if (response.rowCount === 0) return res.status(404).send({ message: 'no categories' });
            res.status(200).send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
export { getAll, createCategory, createEmptyCategory };
