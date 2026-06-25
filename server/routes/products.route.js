import express from 'express';
import { getOneProduct, getProducts, updateProduct } from '../controller/products.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.put('/:id', updateProduct);

export { router };
