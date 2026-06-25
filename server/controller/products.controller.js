import { pool } from '../connection.js';
import { query } from '../queries/productQueries.js';
export const getProducts = (req, res) => {
    pool.query(query.getAll)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status('404').send({ message: 'No products found' });
            }
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

export const getOneProduct = (req, res) => {
    const { id } = req.params;
    const values = [id];
    pool.query(query.getOne, values)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status(404).send({ message: 'No product matchs that id' });
            }
            res.send(response.rows[0]);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const values = [id];
    pool.query(query.getOne, values)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status(404).send({ message: 'No product matchs that id' });
            }
            res.send(response.rows[0]);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};