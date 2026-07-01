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
    const { title, description, price, category_id, active, quantity } = req.body;
    const values = [title, description, price, category_id, active, quantity, id];
    pool.query(query.update, values)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status(404).send({ message: 'Update failed.' });
            }
            res.status(200).send({ message: 'Update Sucessful' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    const values = [id];
    pool.query(query.delete, values)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status(404).send({ message: 'Product deletion failed' });
            }
            res.status(204).send({ message: 'Product deleted Sucessfully' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

export const createProduct = (req, res) => {
    const { id, title, description, price, category_id, active, quantity } = req.body;
    const values = [id, title, description, price, category_id, active, quantity, req.user.id];
    pool.query(query.create, values)
        .then((response) => {
            if (response.rowCount <= 0) {
                return res.status(404).send({ message: 'Product creation failed' });
            }
            res.status(201).send({ message: 'Product created Sucessfully' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};

export const createEmpty = (req, res) => {
    const newProduct = {
        id: crypto.randomUUID(),
        title: '',
        description: '',
        price: '',
        category_id: '',
        active: true,
        quantity: 1,
    };
    res.status(200).json(newProduct);
};
