import express from 'express';
import {
    createProduct,
    deleteProduct,
    getOneProduct,
    getProducts,
    updateProduct,
    createEmpty,
} from '../controller/products.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/new', createEmpty);
router.post('/new', createProduct);
router.get('/:id', getOneProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export { router };
