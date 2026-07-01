import express from 'express';
import {
    createProduct,
    deleteProduct,
    getOneProduct,
    getProducts,
    updateProduct,
    createEmpty,
} from '../controller/products.controller.js';
import { authenticateUser } from '../middleware/authenticate.middleware.js';
import { validateAdmin } from '../middleware/validate.middleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/new', authenticateUser, validateAdmin, createEmpty);
router.post('/new', authenticateUser, validateAdmin, createProduct);
router.get('/:id', getOneProduct);
router.put('/:id', authenticateUser, validateAdmin, updateProduct);
router.delete('/:id', authenticateUser, validateAdmin, deleteProduct);

export { router };
