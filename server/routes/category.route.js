import { getAll, createCategory, createEmptyCategory } from '../controller/category.controller.js';
import { authenticateUser } from '../middleware/authenticate.middleware.js';
import { validateAdmin } from '../middleware/validate.middleware.js';
import express from 'express';
const router = express.Router();

router.get('/getAll', getAll);
router.get('/create', authenticateUser, validateAdmin, createEmptyCategory);
router.post('/create', authenticateUser, validateAdmin, createCategory);

export { router };
